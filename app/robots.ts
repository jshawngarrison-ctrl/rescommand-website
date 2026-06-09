import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/constants'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? SITE.url

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
