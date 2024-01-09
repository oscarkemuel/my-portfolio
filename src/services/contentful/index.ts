import {
  IGetAllExperiences,
  IGetAllExperiencesResponse,
  IGetAllProjects,
  IGetAllProjectsResponse,
} from "./types";

const NEXT_PUBLIC_BFF_URL = process.env.NEXT_PUBLIC_BFF_URL;

export const getAllProjects = async ({
  revalidateInHours,
  locale,
}: IGetAllProjects) => {
  const route = `${NEXT_PUBLIC_BFF_URL}/projects?locale=${locale || "pt-BR"}`;
  const response = await fetch(route, {
    next: {
      revalidate: revalidateInHours
        ? 60 * 60 * Number(revalidateInHours)
        : false,
    },
  });

  const data = await response.json();

  return data as IGetAllProjectsResponse;
};

export const getAllExperiences = async ({
  revalidateInHours,
  locale,
}: IGetAllExperiences) => {
  const route = `${NEXT_PUBLIC_BFF_URL}/experiences?locale=${
    locale || "pt-BR"
  }`;
  const response = await fetch(route, {
    next: {
      revalidate: revalidateInHours
        ? 60 * 60 * Number(revalidateInHours)
        : false,
    },
  });

  const data = await response.json();

  return data as IGetAllExperiencesResponse;
};
