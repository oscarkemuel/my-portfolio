import styles from "./page.module.scss";
import { Apresentation } from "@/components/Apresentation";
import { Section } from "@/components/Section";

export default function Home() {
  return (
    <main className={styles.main}>
      <Section id="about">
        <Apresentation />
      </Section>
    </main>
  );
}
