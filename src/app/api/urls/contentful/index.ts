import { IGetEntries, IGetEntriesResponse } from "./types";

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env;

export const getEntries = async ({
  contentType,
  locale,
}: IGetEntries) => {
  const url = `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/entries?access_token=${CONTENTFUL_ACCESS_TOKEN}&locale=${
    locale || "pt-BR"
  }&content_type=${contentType}`;

  const response = await fetch(url);
  

  const data = await response.json();

  if (data.sys.type === "Error") throw new Error(data.sys.id);

  return {
    items: data.items as Array<any>,
    includes: data.includes,
  } as IGetEntriesResponse;
};
