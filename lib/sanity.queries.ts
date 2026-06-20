import { groq } from 'next-sanity'

export const experiencesQuery = groq`
  *[_type == "experience"] | order(order asc, _createdAt desc) {
    _id,
    title,
    slug,
    shortDescription,
    mainImage,
    vertical,
    status,
    duration,
    capacity,
    destination,
  }
`

export const experienceBySlugQuery = groq`
  *[_type == "experience" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    shortDescription,
    longDescription,
    mainImage,
    vertical,
    status,
    duration,
    capacity,
    destination,
  }
`

export const featuredExperiencesQuery = groq`
  *[_type == "experience" && status == "active"] | order(order asc) [0...3] {
    _id,
    title,
    slug,
    shortDescription,
    mainImage,
    vertical,
    duration,
    capacity,
    destination,
  }
`

export const verticalsQuery = groq`
  array::unique(*[_type == "experience" && defined(vertical)].vertical)
`

export const allSlugsQuery = groq`
  *[_type == "experience" && defined(slug.current)] {
    "slug": slug.current
  }
`
