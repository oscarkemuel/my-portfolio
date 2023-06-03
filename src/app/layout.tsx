import { Navbar } from "@/components/Navbar";
import { courier_prime, inter, montserrat } from "./fonts";
import "./globals.scss";

export const metadata = {
  title: "Oscar Kemuel - React Developer",
  description: "React Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${courier_prime.variable} ${inter.variable} ${montserrat.variable}`}
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
