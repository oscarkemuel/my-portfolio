import { constants } from '@/utils/constants';
import { MetadataRoute } from 'next'

function generatePages() {
  const defaultUrl = constants.defaultUrl;
  
  const pages = [
    {
      url: `${process.env.SITE_URL || defaultUrl}`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${process.env.SITE_URL || defaultUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.SITE_URL || defaultUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.SITE_URL || defaultUrl}/projects`,
      lastModified: new Date(),
    }
  ]

  return pages
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [...generatePages()]
}