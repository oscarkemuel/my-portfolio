"use client";

import { usePathname, useRouter } from "@/navigation";
import styles from "./styles.module.scss";
import flag_br from "../../../public/flag_br.svg";
import flag_us from "../../../public/flag_us.svg";
import Image from "next/image";

interface Props {
  locale: string;
}

export function ChangeLangButton({ locale }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const getNewLocale = () => {
    if (locale === "pt-BR") {
      return {
        locale: "en-US",
        icon: flag_us,
      };
    }

    return {
      locale: "pt-BR",
      icon: flag_br,
    };
  };

  const newLocale = getNewLocale();

  return (
    <div className={styles.container}>
      <button
        key={newLocale.locale}
        onClick={() => {
          router.push(pathname, {
            locale: newLocale.locale,
          });
          router.refresh();
        }}
      >
        <Image
          src={newLocale.icon}
          alt="flag to change language"
          width={35}
          height={45}
        />
      </button>
    </div>
  );
}
