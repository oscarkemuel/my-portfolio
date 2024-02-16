import "../globals.scss";
import { Navbar } from "@/components/Navbar";
import { courier_prime, inter, montserrat } from "../fonts";
import { ChangeLangButton } from "@/components/ChangeLangButton";
import { generateNewMetadata } from "@/utils/generateMetadata";

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  ...generateNewMetadata({}),
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html
      lang={locale}
      className={`${courier_prime.variable} ${inter.variable} ${montserrat.variable}`}
    >
      <body>
        <Navbar />
        {children}
        <ChangeLangButton locale={locale} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
