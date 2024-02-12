import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

export default function NotFoundPage() {
  const t = useTranslations("404");

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        width: "100vw",
        flexDirection: "column",
      }}
    >
      <h1>{t("title")}</h1>
      <Link
        href="/"
        style={{
          marginTop: "1rem",
          color: "var(--blue)",
        }}
      >
        {t("back")}
      </Link>
    </main>
  );
}
