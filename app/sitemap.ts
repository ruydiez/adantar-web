import type { MetadataRoute } from 'next'
import { client } from '@/lib/sanity.client'
import { allSlugsQuery } from '@/lib/sanity.queries'

const baseUrl = 'https://adantar.vercel.app'

const pages = [
  { path: '',               priority: 1,   freq: 'weekly'  },
  { path: '/sobre-adantar', priority: 0.8, freq: 'monthly' },
  { path: '/experiencias',  priority: 0.9, freq: 'weekly'  },
  { path: '/contacto',      priority: 0.7, freq: 'monthly' },
] as const

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let slugs: { slug: string }[] = []
  try { slugs = await client.fetch(allSlugsQuery) } catch {}

  const now = new Date()

  const staticUrls: MetadataRoute.Sitemap = pages.flatMap(({ path, priority, freq }) => [
    { url: `${baseUrl}${path}`,      lastModified: now, changeFrequency: freq, priority },
    { url: `${baseUrl}/es${path}`,   lastModified: now, changeFrequency: freq, priority: priority * 0.95 },
  ])

  const experienceUrls: MetadataRoute.Sitemap = slugs.flatMap(({ slug }) => [
    { url: `${baseUrl}/experiencias/${slug}`,     lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/es/experiencias/${slug}`,  lastModified: now, changeFrequency: 'weekly', priority: 0.75 },
  ])

  return [...staticUrls, ...experienceUrls]
}
