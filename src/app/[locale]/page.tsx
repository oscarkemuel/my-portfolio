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

      <Hr width="80%" fullWidthInMobile />

      <Section title={t('projects')} id="projects">
        <div></div>
      </Section>

      <Hr width="80%" fullWidthInMobile />

      <Section title={t('skills')} id="skills">
        <div></div>
      </Section>
      
      <Hr width="80%" fullWidthInMobile />

      <Section title={t('contact')} id="contact">
        <div></div>
      </Section>
    </main>
  );
}
