import { Hr } from "@/components/Hr";
import styles from "./page.module.scss";
import { Apresentation } from "@/components/Apresentation";
import { Section } from "@/components/Section";

export default function Home() {
  return (
    <main className={styles.main}>
      <Section>
        <Apresentation />
      </Section>

      <Hr width="85%" margin="1rem" />

      <Section title="Projetos" id="projects">
        <div>
          <h3>Project 1</h3>
          <p> teste </p>
        </div>
      </Section>
    </main>
  );
}
