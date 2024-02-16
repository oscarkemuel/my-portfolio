import { MdOutlineLaunch } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import styles from "./styles.module.scss";
import { DateFormat } from "./DateFormat";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { constants } from "@/utils/constants";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  githubSlug?: string;
  url?: string;
  updatedAt?: string;
}

interface IProps {
  data: CardProps;
}

export function Card({
  data: { title, description, imageUrl, githubSlug, url, updatedAt },
}: IProps) {
  const t = useTranslations("Projects");

  return (
    <div className={styles.container}>
      <figure className={styles.imageContainer}>
        <Image
          alt={t("card-image-alt", { title })}
          src={imageUrl}
          fill={true}
          className={styles.image}
        />
      </figure>

      <div className={styles.content}>
        <div className="title">
          <p>
            <b>{title}</b>
          </p>
        </div>

        <p className={styles.description}>{description || "Sem descrição"}</p>

        <div className={styles.footer}>
          <div className={styles.about}>
            <div className="date">
              <p>{<DateFormat date={updatedAt!} />}</p>
            </div>
          </div>

          <div className={styles.icons}>
            <a
              href={`${constants.githubUrl}/${githubSlug}`}
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub size={22} />
            </a>
            {url && (
              <a href={url} target="_blank" rel="noreferrer">
                <MdOutlineLaunch size={22} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
