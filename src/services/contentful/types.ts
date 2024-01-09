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

export interface IExperience {
  office: string;
  company: string;
  companyImage: string;
  description: string;
  location: string;
  startDate: string;
  finalDate?: string;
  skills?: string[];
}

export interface IGetAllExperiences extends IGetGeneric {}
export interface IGetAllExperiencesResponse {
  experiences: IExperience[];
}