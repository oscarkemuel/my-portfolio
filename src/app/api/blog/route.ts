import { NextResponse } from "next/server";
import { getEntries } from "../urls/contentful";
import { IGetEntries, IGetEntriesResponse } from "../urls/contentful/types";
import { IPost } from "./types";

export async function GET(req: Request) {
  let posts: IPost[] = [];
  let reponsePosts: IGetEntriesResponse = {} as IGetEntriesResponse;
  const { searchParams } = new URL(req.url);

  const locale = searchParams.get("locale") || "pt-BR";
  const configEntries: IGetEntries = {
    contentType: "blogPost",
    locale,
  };

  try {
    const { items, includes } = await getEntries(configEntries);
    reponsePosts = { items, includes };
  } catch (error) {
    NextResponse.json(
      {
        message: "An error occurred while trying to get the experiences.",
      },
      {
        status: 500,
      }
    );
  }

  posts = reponsePosts.items.map((item) => {
    const { fields } = item;
    const { title, description, updateAt, slug } = fields;

    return {
      id: item.sys.id,
      title,
      description,
      slug,
      updatedAt: new Date(updateAt).toString(),
    } as IPost;
  });

  return NextResponse.json({ posts });
}
