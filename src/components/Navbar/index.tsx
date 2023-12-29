import styles from "./styles.module.scss";
import { FaBars } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

export function Navbar() {
  const t = useTranslations("Navbar");

  const sections = [
    { name: t("about"), href: "about" },
    { name: t("projects"), href: "projects" },
    { name: t("skills"), href: "skills" },
    { name: t("contact"), href: "contact" },
  ];

  return (
    <>
      <header className={styles.container}>
        <div>
          <Link href={'/'}>
            <h1>Oscar Kemuel</h1>
          </Link>

          <nav>
            <ul className={styles.links}>
              {sections.map((section, index) => {
                return (
                  <li key={index}>
                    <Link href={`${section.href}`} id={`link-to-#${section.href}`}>
                      {section.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button type="button">
            <Link href="/links"><FaBars size={20} /></Link>
          </button>
        </div>
      </header>
    </>
  );
}
