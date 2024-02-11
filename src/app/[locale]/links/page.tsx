import { Drawer } from "@/components/Drawer";

import styles from "./styles.module.scss";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

function NavbarDrawerPage() {
  const t = useTranslations("Navbar");

  const sections = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "/about" },
    { name: t("projects"), href: "/projects" },
    { name: t("contact"), href: "/contact" },
    { name: t("blog"), href: "/blog" },
  ];

  return (
    <Drawer
      open={true}
      background="var(--background-reverse)"
      title="Oscar Kemuel"
      linkTitle="/"
    >
      <nav>
        <ul className={styles.contentDrawer}>
          {sections.map((section, index) => {
            return (
              <li key={index}>
                <Link href={`${section.href}`} id={`To #${section.href}`}>
                  {section.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </Drawer>
  );
}

export default NavbarDrawerPage;
