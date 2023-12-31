interface IGetGeneric {
  revalidateInHours?: number;
  locale?: string;
}

export type IProject = {
  title: string;
  description: string;
  image: string;
  githubSlug?: string;
  url?: string;
  updatedAt: string;
};
export interface IGetAllProjects extends IGetGeneric {}
export interface IGetAllProjectsResponse {
  projects: IProject[];
}