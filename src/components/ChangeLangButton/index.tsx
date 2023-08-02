'use client'
 
import { usePathname } from 'next/navigation'
import Link from "next-intl/link";
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

  const getNewPath = () => {
    if (getNewLocale() === "en-US") return `${pathname}`
    if (getNewLocale() === "pt-BR") return pathname.replace("en-US/", "")

    return pathname
  }

  return (
    <div className={styles.container}>
      <Link href={`${getNewPath()}`} locale={getNewLocale()} hrefLang={getNewLocale()}>
        {getNewLocale() === "pt-BR" ? "🇧🇷" : "🇺🇸"}
      </Link>
    </div>
  );
}
