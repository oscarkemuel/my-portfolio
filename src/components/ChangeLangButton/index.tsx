'use client'
 
import { Link, usePathname } from "@/navigation";
import styles from "./styles.module.scss";

interface Props {
  locale: string;
}

export function ChangeLangButton({ locale }: Props) {
  const pathname = usePathname()

  const getNewLocale = () => {
    if (locale === "pt-BR") return "en-US"
    if (locale === "en-US") return "pt-BR"
  };

  return (
    <div className={styles.container}>
      <Link href={pathname} locale={getNewLocale()}>
        {getNewLocale() === "pt-BR" ? "🇧🇷" : "🇺🇸"}
      </Link>
    </div>
  );
}
