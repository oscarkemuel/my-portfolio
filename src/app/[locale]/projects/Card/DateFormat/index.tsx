import { formatDate } from "@/utils/dateUtils";
import { useLocale } from "next-intl";

interface DateFormatProps {
  date: string;
  className?: string;
}

export const DateFormat = ({ date, className }: DateFormatProps) => {
  const locale = useLocale();

  return <span className={className}>{formatDate(date, locale)}</span>;
};
