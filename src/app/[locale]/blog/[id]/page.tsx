import data from "./test.json";
import styles from "./styles.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link } from "@/navigation";
import { GoArrowLeft } from "react-icons/go";
import Image from "next/image";
import { formatDate } from "@/utils/dateUtils";

export default function Page() {
  const documentParseOptions = {
    renderNode: {
      paragraph: (_: any, children: any) => {
        if (
          children.length === 0 ||
          (children.length === 1 && children[0] === "")
        ) {
          return <br />;
        }

        return <p>{children}</p>;
      },
      hr: () => {
        return <hr className={styles.hr} />;
      },
    },
  };

  return (
    <main className={styles.main}>
      <article className={styles.blogContainer}>
        <Link href="/blog" className={styles.back}>
          <GoArrowLeft size={14} /> Back to blog
        </Link>
        <a
          className={styles.author}
          href="https://www.linkedin.com/in/oscar-kemuel/"
          target="_blank"
          rel="noreferrer"
        >
          <div className={styles.imageContainer}>
            <figure>
              <Image
                src="https://avatars.githubusercontent.com/u/34771800?s=96&v=4"
                alt="Foto do autor Oscar Kemuel"
                fill={true}
                className={styles.image}
              />
            </figure>
          </div>
          <div className={styles.authorInfo}>
            <span>Oscar Kemuel</span>
            <span>@oscarkemuel</span>
          </div>
        </a>
        <p className={styles.date}>{formatDate(`${new Date}`)}</p>

        <div>
          {documentToReactComponents(
            JSON.parse(JSON.stringify(data)).fields.data,
            documentParseOptions
          )}
        </div>
      </article>
    </main>
  );
}
