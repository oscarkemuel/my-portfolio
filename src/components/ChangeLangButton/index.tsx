import Link from "next-intl/link";
import styles from "./styles.module.scss";

interface Props {
  locale: string;
}

export function ChangeLangButton({ locale }: Props) {
  const getNewLocale = () => {
    if (locale === "pt-BR") return "en-US"
    if (locale === "en-US") return "pt-BR"
  };

  return (
    <div className={styles.container}>
      <Link href='/' locale={getNewLocale()}>
        {getNewLocale()}
      </Link>
    </div>
  );
}
