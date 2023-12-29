"use client";

import styles from "./styles.module.scss";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "@/navigation";

interface Props {
  open: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  background?: string;
  title?: string;
  width?: string;
  linkTitle?: string;
}

export function Drawer({ open, onClose, children, background, title, width = '100vw', linkTitle }: Props) {
  const { back } = useRouter();

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
        <h1>{linkTitle ? <Link href={linkTitle} onClick={onClose || back}>{title}</Link> : title}</h1>

        <button type="button" onClick={onClose || back}>
          <IoClose size={20} />
        </button>
      </div>

      <div className={styles.content}>{children}</div>
    </div>
  );
}

