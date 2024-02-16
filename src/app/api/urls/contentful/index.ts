import { IGetEntries, IGetEntriesResponse, IGetEntry } from "./types";

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env;

const defaultUrl = `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}`;

export const getEntries = async ({ contentType, locale }: IGetEntries) => {
  const url = `${defaultUrl}/entries?access_token=${CONTENTFUL_ACCESS_TOKEN}&locale=${
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

export const getEntry = async ({ id, locale }: IGetEntry) => {
  const url = `${defaultUrl}/entries/${id}?access_token=${CONTENTFUL_ACCESS_TOKEN}&locale=${
    locale || "pt-BR"
  }`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.sys.type === "Error") throw new Error(data.sys.id);

  return data;
};

export const getAsset = async ({ id, locale }: IGetEntry) => {
  const url = `${defaultUrl}/assets/${id}?access_token=${CONTENTFUL_ACCESS_TOKEN}&locale=${
    locale || "pt-BR"
  }`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.sys.type === "Error") throw new Error(data.sys.id);

  return data;
};
