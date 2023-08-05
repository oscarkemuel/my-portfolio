import { MetadataRoute } from 'next'

function generatePages(lang: 'pt-BR/' | 'en-US/' | '') {
  const defaultUrl = 'https://oscarkemuel.com';
  
  const pages = [
    {
      url: `${process.env.SITE_URL || defaultUrl}/${lang}`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.SITE_URL || defaultUrl}/${lang}about`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.SITE_URL || defaultUrl}/${lang}contact`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.SITE_URL || defaultUrl}/${lang}projects`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.SITE_URL || defaultUrl}/${lang}skills`,
      lastModified: new Date(),
    },
  ]

  return pages
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [...generatePages('')]
}