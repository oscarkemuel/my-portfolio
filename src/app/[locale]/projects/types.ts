export type Project = {
  title: string;
  description: string;
  image: {
    sys: {
      id: string;
    };
  };
  githubSlug?: string;
  url?: string;
  updatedAt: string;
};

export interface Projects {
  fields: Project;
}