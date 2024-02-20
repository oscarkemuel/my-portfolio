import { notFound } from "next/navigation";
import {
  IGetAllExperiences,
  IGetAllExperiencesResponse,
  IGetAllPosts,
  IGetAllPostsResponse,
  IGetAllProjects,
  IGetAllProjectsResponse,
  IGetPost,
  IGetPostResponse,
} from "./types";

const NEXT_PUBLIC_BFF_URL = process.env.NEXT_PUBLIC_BFF_URL;

export const getAllProjects = async ({
  revalidateInHours,
  locale,
}: IGetAllProjects) => {
  const route = `${NEXT_PUBLIC_BFF_URL}/projects?locale=${locale || "pt-BR"}`;
  const response = await fetch(route, {
    next: {
      revalidate: revalidateInHours ? 60 * 60 * Number(revalidateInHours) : 0,
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
      revalidate: revalidateInHours ? 60 * 60 * Number(revalidateInHours) : 0,
    },
  });

  const data = await response.json();

  return data as IGetAllExperiencesResponse;
};

export const getAllPosts = async ({
  revalidateInHours,
  locale,
}: IGetAllPosts) => {
  const route = `${NEXT_PUBLIC_BFF_URL}/blog?locale=${locale || "pt-BR"}`;
  const response = await fetch(route, {
    next: {
      revalidate: revalidateInHours ? 60 * 60 * Number(revalidateInHours) : 0,
    },
  });

  const data = await response.json();

  return data as IGetAllPostsResponse;
};

export const getPost = async ({ slug, locale, revalidateInHours }: IGetPost) => {
  const route = `${NEXT_PUBLIC_BFF_URL}/blog/${slug}?locale=${locale || "pt-BR"}`;
  const response = await fetch(route, {
    next: {
      revalidate: revalidateInHours ? 60 * 60 * Number(revalidateInHours) : 0,
    },
  });

  if (response.status === 404 || response.status === 500) {
    return notFound();
  }

  const data = await response.json();

  return data as IGetPostResponse;
};
