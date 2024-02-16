import type { Metadata } from 'next'
import { constants } from './constants';

interface IProps {
  inverseTitle?: boolean;
  title?: string;
  description?: string;
  metadataBase?: URL;
  routePathName?: string;
  author?: {
    name: string;
    url: string;
  };
  keywords?: string[];
  rest?: any;
}

export function generateNewMetadata({ description, metadataBase, routePathName, title, author, keywords, inverseTitle, rest }: IProps): Metadata {
  const defaultUrl = constants.defaultUrl;

  return {
    title: !inverseTitle ? `Oscar Kemuel | ${title || 'React Developer'}` : `${title || 'React Developer'} | Oscar Kemuel`,
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
    keywords: [...keywords || [''], 
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
    ],
    ...rest,
  }
}