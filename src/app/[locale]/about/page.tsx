import { Section } from "@/components/Section";
import { generateMetadata } from "@/utils/generateMetadata";
import Image from "next/image";
import styles from "./about.module.scss";
import { useTranslations } from "next-intl";
import Experiences from "./Experiences";

export const metadata = {
  ...generateMetadata({
    title: "Sobre",
    routePathName: "about",
  }),
};

export default function About() {
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

            <div>
              <h2>{t("about-title")}</h2>
              <p>{t("about-apresentation")}</p>
            </div>
          </div>

          <div className={styles.expecienceContainer}>
            <h2>{t("experiences-title")}</h2>

            <Experiences />
          </div>
        </div>
      </Section>
    </main>
  );
}
