'use client'
 
import Link from 'next-intl/link';
import styles from "./styles.module.scss";
import { usePathname } from 'next-intl/client';

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
