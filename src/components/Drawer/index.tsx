"use client";

import { useEffect } from "react";
import styles from "./styles.module.scss";
import { IoClose } from "react-icons/io5";

interface Props {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  background?: string;
  title?: string;
  width?: string;
}

export function Drawer({ open, onClose, children, background, title, width = '100vw' }: Props) {
  function staticBody() {
    document.body.style.left = "0";
    document.body.style.position = "fixed";
    document.body.style.top = "0";
    document.body.style.width = "100%";
  }

  function autoBody() {
    document.body.style.left = "auto";
    document.body.style.position = "static";
    document.body.style.top = "auto";
    document.body.style.width = "auto";
  }

  useEffect(() => {
    if (open) {
      staticBody();
    } else {
      autoBody();
    }
  }, [open]);

  return (
    <div
      className={`${styles.drawerContainer} ${
        open ? styles.drawerContainerIsOpen : null
      }`}
      style={{
        background,
        width,
      }}
    >
      <div className={styles.header}>
        <h1>{title}</h1>

        <button type="button" onClick={onClose}>
          <IoClose size={20} />
        </button>
      </div>

      <div className={styles.content}>{children}</div>
    </div>
  );
}

