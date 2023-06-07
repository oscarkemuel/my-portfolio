import { contentfulApi } from '@/services/contentful';
import Contentful from 'contentful'
import { useLocale } from 'next-intl';

type  Project = {
  contentTypeId: "project",
  fields: {
    title: Contentful.EntryFields.Text,
    description: Contentful.EntryFields.Text,
    image: Contentful.Asset,
    locale: Contentful.EntryFields.Text
  }
}

async function getProjects(locale: string) {
  const response = await contentfulApi.getEntries<Project>({
    locale
  })

  return response.items;
}

export async function Projects() {
  const locale = useLocale();

  const projects = await getProjects(locale);
  console.log(projects);

  return (
    <div>
      {projects.map(project => (
        <div key={project.sys.id}>
          <h1>{project.fields.title}</h1>
          <p>{project.fields.description}</p>
          <img src={project.fields.image} alt={'project.fields.image'} />
        </div>
      ))}
    </div>
  );
}