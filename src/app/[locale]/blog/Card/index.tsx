import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";
import { DateFormat } from "../../projects/Card/DateFormat";
import { Link } from "@/navigation";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  githubSlug?: string;
  url?: string;
  updatedAt?: string;
}

interface IProps {
  data: CardProps;
}

export function Card({
  data: { title, description, githubSlug, url, updatedAt },
}: IProps) {
  const t = useTranslations("Projects");

  return (
    <article className={styles.container}>
      <div className={styles.content}>
        <div className={styles.headerContent}>
          <DateFormat date={updatedAt!} className={styles.date} />
          <div className={styles.imageContainer} aria-label="Foto do autor Oscar Kemuel">
            <figure>
              <Image
                src="https://avatars.githubusercontent.com/u/34771800?s=96&v=4"
                alt="Foto do autor Oscar Kemuel"
                fill={true}
                className={styles.image}
              />
            </figure>
          </div>
        </div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.footer}>
        <Link href={`/blog/${githubSlug}`}>Read more</Link>
      </div>
    </article>
  );
}
