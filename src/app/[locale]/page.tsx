import { Hr } from "@/components/Hr";
import styles from "./page.module.scss";
import { Apresentation } from "@/components/Apresentation";
import { Section } from "@/components/Section";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Section");

  return (
    <main className={styles.main}>
      <Section id="about">
        <Apresentation />
      </Section>

      <Hr width="85%" margin="1rem" />

      <Section title={t('projects')} id="projects">
        <div>
          <h3>Project 1</h3>
          <p> teste </p>
        </div>
      </Section>
    </main>
  );
}
