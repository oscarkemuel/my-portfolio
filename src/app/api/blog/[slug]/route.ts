import { NextResponse } from "next/server";
import { getEntries } from "../../urls/contentful";
import { IGetEntries } from "../../urls/contentful/types";
import { IPost } from "@/services/contentful/types";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const { searchParams } = new URL(req.url);
  const { slug } = params;
  let post: IPost = {} as IPost;
  let assets: any[] = [];

  const locale = searchParams.get("locale") || "pt-BR";
  const configEntries: IGetEntries = {
    locale,
    contentType: "blogPost",
    params: `fields.slug=${slug}`,
    limit: 1,
  };

  try {
    const { items, includes } = await getEntries(configEntries);

    if (items.length === 0) {
      return NextResponse.json(
        {
          message: `Post with slug ${slug} not found.`,
        },
        {
          status: 404,
        }
      );
    }

    const { fields, sys } = items[0];

    post = {
      id: sys.id,
      title: fields.title,
      description: fields.description,
      data: fields.data,
      updatedAt: fields.updateAt,
      slug: fields.slug,
    };

    if (includes && includes.Asset) {
      assets = includes.Asset.map((asset) => {
        return {
          id: asset.sys.id,
          title: asset.fields.title,
          description: asset.fields.description,
          url: `https:${asset.fields.file.url}`,
        };
      });
    }
  } catch (error) {
    NextResponse.json(
      {
        message: "An error occurred while trying to get the post.",
      },
      {
        status: 500,
      }
    );
  }

  if (!post.slug) {
    return NextResponse.json(
      {
        message: `Post with id ${slug} not found.`,
      },
      {
        status: 404,
      }
    );
  }

  return NextResponse.json({ post, assets });
}
