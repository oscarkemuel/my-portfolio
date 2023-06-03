"use client";
import styles from "./styles.module.scss";

export function Navbar() {
  const sections = [
    { name: "Sobre", id: "about" },
    { name: "Projetos", id: "projects" },
    { name: "Tecnologias", id: "skills" },
    { name: "Contato", id: "contact" },
  ];

  return (
    <>
      <nav className={styles.container}>
        <a href="#home">
          <h1>Oscar Kemuel</h1>
        </a>

        <ul className={styles.links}>
          {sections.map((section, index) => {
            return (
              <li key={index}>
                <a href={`#${section.id}`}>{section.name}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      <hr
        style={{
          width: "100%",
          margin: "0",
          marginTop: "-2.9px",
          borderRadius: "0",
        }}
      />
    </>
  );
}
