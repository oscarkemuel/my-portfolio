import "../globals.scss";
import { Navbar } from "@/components/Navbar";
import { courier_prime, inter, montserrat } from "../fonts";
import { ChangeLangButton } from "@/components/ChangeLangButton";
import { generateMetadata } from "@/utils/generateMetadata";

export const metadata = {
  ...generateMetadata({}),
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
        <ChangeLangButton />
      </body>
    </html>
  );
}
