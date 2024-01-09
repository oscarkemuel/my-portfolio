import { NextResponse } from "next/server";
import { getEntries } from "../urls/contentful";
import { IGetEntries, IGetEntriesResponse } from "../urls/contentful/types";
import { getFileUrl } from "../utils/getFileUrl";
import { IExperience } from "./types";

export async function GET(req: Request) {
  let experiences: IExperience[] = [];
  let responseExperiences: IGetEntriesResponse = {} as IGetEntriesResponse;
  const { searchParams } = new URL(req.url);

  const locale = searchParams.get("locale") || "pt-BR";
  const configEntries: IGetEntries = {
    contentType: "experience",
    locale,
  };

  try {
    const { items, includes } = await getEntries(configEntries);
    responseExperiences = { items, includes };
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

  experiences = responseExperiences.items.map((item) => {
    const { fields } = item;
    const {
      office,
      company,
      companyImage,
      description,
      location,
      startDate,
      finalDate,
      skills,
    } = fields;

    const imageUrl = getFileUrl({
      id: companyImage.sys.id,
      includes: responseExperiences.includes!,
    });

    return {
      office,
      company,
      companyImage: imageUrl,
      description: description.content[0].content[0].value,
      location,
      startDate,
      finalDate,
      skills,
    } as IExperience;
  });

  return NextResponse.json({ experiences });
}
