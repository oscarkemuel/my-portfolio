import { Card } from "./Card";
import { getAllProjects } from "@/services/contentful";
import { useLocale } from "next-intl";
import styles from "./styles.module.scss";
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

export default async function Blog() {
  const locale = useLocale();
  const { projects } = await getProjects(locale);

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1>Meus artigos</h1>

        <div className={styles.articles}>
          {projects.map((project) => {
            const { description, title, updatedAt, githubSlug, url } = project;

            return (
              <Card
                key={title}
                data={{
                  description,
                  title,
                  updatedAt,
                  githubSlug,
                  url,
                }}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
