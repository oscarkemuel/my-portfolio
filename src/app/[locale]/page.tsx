import styles from "./page.module.scss";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Section");

  return (
    <main className={styles.main}>
    </main>
  );
}
