"use client";
import { useState } from "react";
import { Drawer } from "../Drawer";
import styles from "./styles.module.scss";
import { MdClose } from "react-icons/md";
import { useTranslations } from "next-intl";
import Image from "next/image";
import camIcon from '../../../public/cam.svg'
import micIcon from '../../../public/mic.svg'
import searchIcon from '../../../public/search.svg'
import applicationsIcon from '../../../public/applications.svg'

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
        <div className={styles.searchContainer}>
          <Image
            src="https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo.png"
            alt="Foto do autor Oscar Kemuel"
            fill={true}
            className={styles.image}
          />

          <div className={styles.search}>
            <input type="text" value={"Oscar Kemuel"} spellCheck={false} />

            <div>
              <MdClose size={20} color="#9aa0a6" />

              <span className={styles.hrVertical}></span>

              <Image
                height={24}
                width={24}
                src={micIcon}
                alt=""
              />

              <Image
                height={24}
                width={24}
                src={camIcon}
                alt=""
              />

              <Image
                height={24}
                width={24}
                src={searchIcon}
                alt=""
              />
            </div>
          </div>

          <div className={styles.buttons}>
            <Image
              height={24}
              width={24}
              src={applicationsIcon}
              alt=""
            />

            <a
              target="_top"
              className={styles.button}
            >
              <span>Contratar</span>
            </a>
          </div>
        </div>
      </header>

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
