import { IGetEntries, IGetEntriesResponse } from "./types";

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env;

export const getEntries = async ({ contentType, revalidateInHours, locale }: IGetEntries) => {
  const url = `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/entries?access_token=${CONTENTFUL_ACCESS_TOKEN}&locale=${locale || 'pt-BR'}&content_type=${contentType}`
  console.log(url)

  const response = await fetch(
    url,
    {
      next: {
        revalidate: revalidateInHours ? (60 * 60 * Number(revalidateInHours)) : false,
      },
      cache: 'no-cache',
    }
  );

  const data = await response.json();

  if(data.sys.type === 'Error') throw new Error(data.sys.id);

  return {
    items: data.items as Array<any>,
    includes: data.includes
  } as IGetEntriesResponse;
}