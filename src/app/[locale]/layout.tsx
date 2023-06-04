import { Navbar } from "@/components/Navbar";
import { courier_prime, inter, montserrat } from "../fonts";
import "../globals.scss";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { ChangeLangButton } from "@/components/ChangeLangButton";

export const metadata = {
  title: "Oscar Kemuel - React Developer",
  description: "React Developer",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html
      lang={locale}
      className={`${courier_prime.variable} ${inter.variable} ${montserrat.variable}`}
    >
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
          <ChangeLangButton locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
