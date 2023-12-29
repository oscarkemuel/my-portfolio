"use client";

import { usePathname, useRouter } from "@/navigation";
import styles from "./styles.module.scss";

export function ChangeLangButton() {
  const pathname = usePathname();
  const router = useRouter();

  const langs = [
    {
      icon: "🇧🇷",
      locale: "pt-BR",
    },
    {
      icon: "🇺🇸",
      locale: "en-US",
    },
  ];

  return (
    <div className={styles.container}>
      {langs.map((lang, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              router.push(pathname, {
                locale: lang.locale,
              });
              router.refresh();
            }}
          >
            {lang.icon}
          </button>
        );
      })}
    </div>
  );
}
