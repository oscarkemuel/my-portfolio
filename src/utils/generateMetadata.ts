import type { Metadata } from 'next'

interface IProps {
  title?: string;
  description?: string;
  metadataBase?: URL;
  routePathName?: string;
  author?: {
    name: string;
    url: string;
  };
  keywords?: string[];
}

export function generateMetadata({ description, metadataBase, routePathName, title, author, keywords }: IProps): Metadata {
  const defaultUrl = 'https://oscarkemuel.com';

  return {
    title: `Oscar Kemuel | ${title || 'React Developer'}`,
    description: description || 'React Developer',
    metadataBase: metadataBase || new URL(process.env.SITE_URL || defaultUrl),
    alternates: {
      canonical: routePathName || '',
      languages: {
        'pt-BR': `/pt-BR/${routePathName || ''}`,
        'en-US': `/en-US/${routePathName || ''}`,
      },
    },
    authors: {
      name: author?.name || 'Oscar Kemuel',
      url: author?.url || process.env.SITE_URL || defaultUrl,
    },
    keywords: keywords || [
      'Oscar Kemuel',
      'React Developer',
      'Front-end Developer',
      'React Developer',
      'Next.js Developer',
      'TypeScript Developer',
      'JavaScript Developer',
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Front-end',
      'Developer'
    ]
  }
}