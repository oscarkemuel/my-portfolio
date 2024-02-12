import { NextResponse } from "next/server";
import { getEntry } from "../../urls/contentful";
import { IGetEntry } from "../../urls/contentful/types";
import { IPost } from "@/services/contentful/types";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { searchParams } = new URL(req.url);
  const { id } = params;
  let post: IPost = {} as IPost;

  const locale = searchParams.get("locale") || "pt-BR";
  const configEntry: IGetEntry = {
    id,
    locale,
  };

  try {
    const { fields, sys } = await getEntry(configEntry);

    post = {
      id: sys.id,
      title: fields.title,
      description: fields.description,
      data: fields.data,
      updatedAt: fields.updateAt,
    };
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

  if (!post.id) {
    return NextResponse.json(
      {
        message: `Post with id ${id} not found.`,
      },
      {
        status: 404,
      }
    );
  }

  return NextResponse.json({ post });
}