import { createClient } from "contentful";

export const contentfulApi = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  environment: 'master',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || ''
})