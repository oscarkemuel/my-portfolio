"use client";
import styles from "./styles.module.scss";

export function Navbar() {
  return (
    <>
      <nav className={styles.container}>
        <h1>Oscar Kemuel</h1>
      </nav>
      <hr style={{
        width: "100%",
        margin: "0",
        marginTop: "-2.9px",
        borderRadius: "0",
      }} />
    </>
  );
}
