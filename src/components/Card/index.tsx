import { FaLocationArrow } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import styles from "./styles.module.scss";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  githubSlug?: string;
  url?: string;
}

export function Card({
  title,
  description,
  imageUrl,
  githubSlug,
  url,
}: CardProps) {
  return (
    <div className={styles.container}>
      <img src={imageUrl} alt="" srcSet="" />

      <div className="content">
        <div className="title">
          <p>
            <b>{title}</b>
          </p>
        </div>

        <p className="description">{description || "Sem descrição"}</p>

        <div className="footer">
          <div className="about">
            {/* <img src={imageUrl} alt="" /> */}

            <div className="date">
              <p>{"owner.name"}</p>
              <p>{"dateString"}</p>
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
