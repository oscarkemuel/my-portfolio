import { constants } from '@/utils/constants';
import { MetadataRoute } from 'next'

function generatePages() {
  const defaultUrl = constants.defaultUrl;

  const pagesPaths = [
    'about',
    'contact',
    'projects',
    'blog'
  ]
  
  const pages = [
    {
      url: `${process.env.SITE_URL || defaultUrl}`,
      lastModified: new Date(),
      priority: 1,
    },
    ...pagesPaths.map((path) => ({
      url: `${process.env.SITE_URL || defaultUrl}/${path}`,
      lastModified: new Date(),
    })),
  ]

  return pages
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [...generatePages()]
}