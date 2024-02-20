import styles from "./styles.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link } from "@/navigation";
import { GoArrowLeft } from "react-icons/go";
import Image from "next/image";
import { formatDate } from "@/utils/dateUtils";
import { getPost } from "@/services/contentful";
import { useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { generateNewMetadata } from "@/utils/generateMetadata";
import { constants } from "@/utils/constants";

interface IProps {
  params: {
    slug: string;
    locale: string;
  };
}

export async function generateMetadata({ params }: IProps): Promise<Metadata> {
  const { slug, locale } = params;

  const { post } = await getPost({ slug, locale, revalidateInHours: 12 });

  return {
    ...generateNewMetadata({
      inverseTitle: true,
      title: post.title,
      description: post.description,
      routePathName: `blog/${slug}`,
      keywords: [
        post.title
      ],
      rest: {
        type: "article",
      },
    }),
  };
}

export default async function Page({ params }: IProps) {
  const locale = useLocale();
  const t = await getTranslations("Blog");
  const { post, assets } = await getPost({ slug: params.slug, locale, revalidateInHours: 12 });

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
      "embedded-asset-block": (node: any) => {
        const asset = assets.find(
          (asset) => asset.id === node.data.target.sys.id
        );
        const url = asset?.url;

        if (!url) {
          return null;
        }

        return (
          <figure className={styles.imageOfPostContainer}>
            <Image
              src={url}
              alt={"Image of post"}
              fill={true}
              className={styles.imageOfPost}
            />
          </figure>
        );
      },
    },
  };

  return (
    <main className={styles.main}>
      <article className={styles.blogContainer}>
        <Link href="/blog" className={styles.back}>
          <GoArrowLeft size={14} /> {t("back")}
        </Link>
        <a
          className={styles.author}
          href={constants.linkedinUrl}
          target="_blank"
          rel="noreferrer"
        >
          <div className={styles.imageContainer}>
            <figure>
              <Image
                src={constants.githubProfileImage}
                alt="Foto do autor Oscar Kemuel"
                fill={true}
                className={styles.image}
              />
            </figure>
          </div>
          <div className={styles.authorInfo}>
            <span>{constants.authorName}</span>
            <span>{constants.instagram}</span>
          </div>
        </a>
        <p className={styles.date}>{formatDate(post.updatedAt, locale)}</p>

        <div>{documentToReactComponents(post.data, documentParseOptions)}</div>
      </article>
    </main>
  );
}
