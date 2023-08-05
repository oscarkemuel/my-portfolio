import { Includes } from "@/services/contentful/types";

interface Props {
  id: string;
  includes: Includes;
}

export function getFileUrl({ id, includes }: Props) {
  const asset = includes.Asset?.find((asset) => asset.sys.id === id);

  return `https:${asset?.fields.file.url}`;
}