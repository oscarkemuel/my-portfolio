import { MetadataRoute } from 'next'

function generatePages(lang: 'pt-BR/' | 'en-US/' | '') {
  const pages = [
    {
      url: `${process.env.SITE_URL || 'https://oscarkemuel.com'}/${lang}`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.SITE_URL || 'https://oscarkemuel.com'}/${lang}about`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.SITE_URL || 'https://oscarkemuel.com'}/${lang}contact`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.SITE_URL || 'https://oscarkemuel.com'}/${lang}experiences`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.SITE_URL || 'https://oscarkemuel.com'}/${lang}projects`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.SITE_URL || 'https://oscarkemuel.com'}/${lang}skills`,
      lastModified: new Date(),
    },
  ]

  return pages
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [...generatePages('')]
}