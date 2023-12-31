import { getEntries } from "../urls/contentful";
import { IGetEntries, IGetEntriesResponse } from "../urls/contentful/types";
import { NextResponse } from "next/server";
import { getFileUrl } from "../utils/getFileUrl";
import { IProject } from "./types";

export async function GET(req: Request) {
  let projects: IProject[] = [];
  let responseProjects: IGetEntriesResponse = {} as IGetEntriesResponse;
  const { searchParams } = new URL(req.url);

  const locale = searchParams.get("locale") || "pt-BR";
  const configEntries: IGetEntries = {
    contentType: "project",
    locale,
  };

  try {
    const { items, includes } = await getEntries(configEntries);
    responseProjects = { items, includes };
  } catch (error) {
    NextResponse.json({ error });
  }

  projects = responseProjects.items.map((item) => {
    const { fields, sys } = item;
    const { updatedAt } = sys;
    const { title, description, image, githubSlug, url } = fields;

    const imageUrl = getFileUrl({
      id: image.sys.id,
      includes: responseProjects.includes!,
    });

    return {
      title,
      description,
      image: imageUrl,
      githubSlug,
      url,
      updatedAt,
    } as IProject;
  });

  return NextResponse.json({ projects });
}
