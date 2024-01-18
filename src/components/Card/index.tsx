import { FaLocationArrow } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import styles from "./styles.module.scss";
import { DateFormat } from "./DateFormat";
import Image from "next/image";

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
  return (
    <div className={styles.container}>
      <figure className={styles.imageContainer}>
        <Image
          alt="Imagem do projeto"
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

          <div className="icons">
            <a
              href={`https://github.com/oscarkemuel/${githubSlug}`}
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub />
            </a>
            {url && (
              <a href={url} target="_blank" rel="noreferrer">
                <FaLocationArrow size={22} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
