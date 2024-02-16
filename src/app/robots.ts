import { constants } from '@/utils/constants'
import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${process.env.SITE_URL || constants.defaultUrl}/sitemap.xml`,
  }
}