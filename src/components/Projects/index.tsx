/* eslint-disable @next/next/no-img-element */
import { contentfulApi } from "@/services/contentful";
import Contentful from "contentful";
import { useLocale } from "next-intl";
import styles from "./styles.module.scss";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  image: string;
};

type Image = {
  fields: {
    file: {
      url: string;
    };
  };
};

async function getProjects(locale: string) {
  const response = await contentfulApi.getEntries({
    locale,
  });

  const projects: Project[] = response.items.map((item) => {
    const imageReponse = item.fields.image as Image;
    const image = `https:${imageReponse.fields.file.url}`;

    return {
      title: item.fields.title as string,
      description: item.fields.description as string,
      image,
    };
  });

  return projects;
}

export async function Projects() {
  const locale = useLocale();

  const projects = await getProjects(locale);

  return (
    <div className={styles.container}>
      {[...projects, ...projects].map((project) => (
        <div key={project.title} className={styles.projectCard}>
          <div className={styles.imageContainer}>
            <Image
              src={project.image}
              alt={`${project.title}-photo`}
              fill={true}
              className={styles.image}
            />
          </div>
          <div className={styles.texts}>
            <p className={styles.title}>{project.title}</p>
            <p className={styles.description}>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
