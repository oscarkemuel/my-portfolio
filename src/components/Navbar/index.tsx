"use client";
import { useState } from "react";
import { Drawer } from "../Drawer";
import styles from "./styles.module.scss";
import { FaBars } from "react-icons/fa";
import { useTranslations } from "next-intl";

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
    { name: t("about"), id: "about" },
    { name: t("projects"), id: "projects" },
    { name: t("skills"), id: "skills" },
    { name: t("contact"), id: "contact" },
  ];

  return (
    <>
      <header className={styles.container}>
        <a href="#home">
          <h1>Oscar Kemuel</h1>
        </a>

        <nav>
          <ul className={styles.links}>
            {sections.map((section, index) => {
              return (
                <li key={index}>
                  <a href={`#${section.id}`} id={`To #${section.id}`}>
                    {section.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <button type="button" onClick={handleShow}>
          <FaBars size={20} />
        </button>
      </header>

      <hr
        style={{
          width: "100%",
          margin: "0",
          marginTop: "-2.9px",
          borderRadius: "0",
        }}
      />

      <Drawer
        open={isDrawerOpen}
        onClose={handleClose}
        background="var(--background-reverse)"
        title="Oscar Kemuel"
      >
        <nav>
          <ul className={styles.contentDrawer}>
            {sections.map((section, index) => {
              return (
                <li key={index}>
                  <a
                    href={`#${section.id}`}
                    id={`To #${section.id}`}
                    onClick={handleClose}
                  >
                    {section.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </Drawer>
    </>
  );
}
