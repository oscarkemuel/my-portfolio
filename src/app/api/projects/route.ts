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
    NextResponse.json(
      {
        message: "An error occurred while trying to get the projects.",
      },
      {
        status: 500,
      }
    );
  }

  projects = responseProjects.items.map((item) => {
    const { fields } = item;
    const { title, description, image, githubSlug, url, updatedAt } = fields;

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
