import type { MetadataRoute } from 'next'

const baseUrl = 'https://adantar.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url:               baseUrl,
      lastModified:      new Date(),
      changeFrequency:   'weekly',
      priority:          1,
    },
    {
      url:               `${baseUrl}/sobre-adantar`,
      lastModified:      new Date(),
      changeFrequency:   'monthly',
      priority:          0.8,
    },
    {
      url:               `${baseUrl}/experiencias`,
      lastModified:      new Date(),
      changeFrequency:   'weekly',
      priority:          0.9,
    },
    {
      url:               `${baseUrl}/contacto`,
      lastModified:      new Date(),
      changeFrequency:   'monthly',
      priority:          0.7,
    },
  ]
}
