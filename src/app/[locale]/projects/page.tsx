import { Section } from "@/components/Section";
import { Card } from "./Card";
import { getAllProjects } from "@/services/contentful";
import { useLocale } from "next-intl";
import styles from "./projects.module.scss";
import { generateNewMetadata } from "@/utils/generateMetadata";
import { getTranslations } from "next-intl/server";

interface IProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params: { locale } }: IProps) {
  const t = await getTranslations({ locale, namespace: "Navbar" });

  return {
    ...generateNewMetadata({
      title: t("projects"),
      routePathName: "projects",
    }),
  };
}

async function getProjects(locale: string) {
  const response = await getAllProjects({
    locale,
    revalidateInHours: 12,
  });

  return response;
}

export default async function Project() {
  const t = await getTranslations("Projects");
  const locale = useLocale();
  const { projects } = await getProjects(locale);

  return (
    <main>
      <Section className={styles.content}>
        <div className={styles.header}>
          <h1>{t("projects-title")}</h1>
          <h2>{t("projects-description")}</h2>
        </div>
        
        <div className={styles.projects}>
          {projects.map((project) => {
            const { description, image, title, updatedAt, githubSlug, url } =
              project;

            return (
              <Card
                key={title}
                data={{
                  description,
                  imageUrl: image,
                  title,
                  updatedAt,
                  githubSlug,
                  url,
                }}
              />
            );
          })}
        </div>
      </Section>
    </main>
  );
}
