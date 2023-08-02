import { FaLocationArrow } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import styles from "./styles.module.scss";
import { DateFormat } from "./DateFormat";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  githubSlug?: string;
  url?: string;
  updatedAt?: string;
}

export function Card({
  title,
  description,
  imageUrl,
  githubSlug,
  url,
  updatedAt,
}: CardProps) {

  return (
    <div className={styles.container}>
      <img src={imageUrl} alt="" srcSet="" />

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
