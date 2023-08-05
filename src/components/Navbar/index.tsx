"use client";
import { useState } from "react";
import { Drawer } from "../Drawer";
import styles from "./styles.module.scss";
import { FaBars } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { Hr } from "../Hr";
import Link from "next/link";

export function Navbar() {
  const t = useTranslations("Navbar");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleShow = () => {
    setIsDrawerOpen(true);
  };

  const handleClose = () => {
    setIsDrawerOpen(false);
  };

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
                    <Link href={`${section.href}`} id={`To #${section.href}`}>
                      {section.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button type="button" onClick={handleShow}>
            <FaBars size={20} />
          </button>
        </div>

        <Hr margin="-2.9px 0 0 0" radius="0" />
      </header>

      <Drawer
        open={isDrawerOpen}
        onClose={handleClose}
        background="var(--background-reverse)"
        title="Oscar Kemuel"
        linkTitle="/"
      >
        <nav>
          <ul className={styles.contentDrawer}>
            {sections.map((section, index) => {
              return (
                <li key={index}>
                  <Link
                    href={`${section.href}`}
                    id={`To #${section.href}`}
                    onClick={handleClose}
                  >
                    {section.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </Drawer>
    </>
  );
}
