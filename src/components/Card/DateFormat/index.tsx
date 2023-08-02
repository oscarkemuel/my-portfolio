'use client'

import { formatDate } from "@/utils/dateUtils";
import { useLocale } from "use-intl";

interface DateFormatProps {
  date: string;
}

export const DateFormat = ({date}: DateFormatProps) => {
  const locale = useLocale();

  return (
    <>{formatDate(date, locale)}</>
  )
}