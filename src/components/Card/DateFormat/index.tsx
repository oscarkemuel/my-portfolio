import { formatDate } from "@/utils/dateUtils";
import { useLocale } from "next-intl";

interface DateFormatProps {
  date: string;
}

export const DateFormat = ({ date }: DateFormatProps) => {
  const locale = useLocale();

  return <span>{formatDate(date, locale)}</span>;
};
