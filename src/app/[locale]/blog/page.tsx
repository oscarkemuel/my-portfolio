import { Card } from "./Card";
import { getAllPosts } from "@/services/contentful";
import { useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import styles from "./styles.module.scss";
import { generateMetadata } from "@/utils/generateMetadata";

export const metadata = {
  ...generateMetadata({
    title: "Blog",
    routePathName: "blog",
  }),
};

async function getPosts(locale: string) {
  const response = await getAllPosts({
    locale,
    revalidateInHours: 12,
  });

  return response;
}

export default async function Blog() {
  const t = await getTranslations("Blog");
  const locale = useLocale();
  const { posts } = await getPosts(locale);

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1>{t("blog-title")}</h1>

        <div className={styles.articles}>
          {posts.map((posts) => {
            const { description, title, updatedAt, id } = posts;

            return (
              <Card
                key={title}
                data={{
                  id,
                  description,
                  title,
                  updatedAt,
                }}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
