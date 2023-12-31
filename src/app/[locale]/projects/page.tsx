import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { getAllProjects } from "@/services/contentful";
import { useLocale } from "next-intl";
import styles from "./projects.module.scss";
import { generateMetadata } from "@/utils/generateMetadata";

export const metadata = {
  ...generateMetadata({
    title: "Projetos",
    routePathName: "projects",
  }),
};

async function getProjects(locale: string) {
  const response = await getAllProjects({
    locale,
    revalidateInHours: 12,
  });

  return response;
}

export default async function Project() {
  const locale = useLocale();
  const { projects } = await getProjects(locale);

  return (
    <main>
      <Section>
        <div className={styles.projects}>
          {projects.map((project) => {
            const { description, image, title, updatedAt, githubSlug, url } =
              project;

            return (
              <Card
                key={title}
                description={description}
                imageUrl={image}
                title={title}
                githubSlug={githubSlug}
                url={url}
                updatedAt={updatedAt}
              />
            );
          })}
        </div>
      </Section>
    </main>
  );
}
