import { IGetAllProjects, IGetAllProjectsResponse } from "./types";

export const getAllProjects = async ({
  revalidateInHours,
  locale,
}: IGetAllProjects) => {
  const route = `http://localhost:3000/api/projects?locale=${locale || "pt-BR"}`;
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
