import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { getEntries } from "@/services/contentful";
import { useLocale } from "next-intl";
import { Projects } from "./types";
import { getFileUrl } from "@/utils/getFileUrl";
import styles from "./projects.module.scss";

async function getProjects(locale: string) {
  const response = await getEntries({
    contentType: "project",
    locale,
    revalidateInHours: 12
  });

  return response;
}

export default async function Project() {
  const locale = useLocale();
  const projects = await getProjects(locale);

  const fields = projects.items as Projects[];

  return (
    <main>
      <Section>
        <div className={styles.projects}>
          {fields.map(({ fields: project }) => {
            const image = getFileUrl({
              id: project.image.sys.id,
              includes: projects.includes!,
            });

            return (
              <Card
                key={project.title}
                description={project.description}
                imageUrl={image!}
                title={project.title}
                githubSlug={project.githubSlug}
                url={project.url}
                updatedAt={project.updatedAt}
              />
            );
          })}
        </div>
      </Section>
    </main>
  );
}
