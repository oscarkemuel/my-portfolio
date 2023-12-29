import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["pt-BR", "en-US"] as const;
export const localePrefix = "never" as const;

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({
    locales,
    localePrefix,
  });
