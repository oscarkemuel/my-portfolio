/* eslint-disable @next/next/no-img-element */
import { contentfulApi } from "@/services/contentful";
import { useLocale } from "next-intl";
import { Card } from "../Card";

type Project = {
  title: string;
  description: string;
  image: {
    fields: {
      file: {
        url: string;
      };
    }
  };
  githubSlug?: string;
  url?: string;
};

interface Projects {
  fields: Project;
}

async function getProjects(locale: string) {
  const response = await contentfulApi.getEntries({
    locale,
  });

  return response.items as unknown as Projects[];
}

export async function Projects() {
  const locale = useLocale();

  const projects = await getProjects(locale);

  return (
    <div>
      {projects.map(({fields}) => {
        const project = fields;
        const image = project.image.fields.file?.url as string;

        return (
          <Card 
          key={project.title}
          description={project.description}
          imageUrl={image}
          title={project.title}
          githubSlug={project.githubSlug}
          url={project.url}
        />
        );
      })}
    </div>
  );
}
