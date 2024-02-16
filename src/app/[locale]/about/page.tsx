import { Section } from "@/components/Section";
import { generateNewMetadata } from "@/utils/generateMetadata";
import Image from "next/image";
import styles from "./about.module.scss";
import { useLocale, useTranslations } from "next-intl";
import Experiences from "./Experiences";
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
      title: t('about'),
      routePathName: "about",
    }),
  };
}

export default function About() {
  const locale = useLocale();
  const t = useTranslations("About");

  return (
    <main>
      <Section>
        <div className={styles.container}>
          <div className={styles.aboutContainer}>
            <div className={styles.imageContainer}>
              <figure>
                <Image
                  src="/polaroid.png"
                  alt="Foto do autor Oscar Kemuel"
                  fill={true}
                  className={styles.image}
                />
              </figure>
            </div>

            <div className={styles.initialTexts}>
              <h2>{t("about-title")}</h2>
              <p>{t("about-apresentation")}</p>
            </div>
          </div>

          <div className={styles.expecienceContainer}>
            <h2>{t("experiences-title")}</h2>

            <Experiences locale={locale} />
          </div>
        </div>
      </Section>
    </main>
  );
}
