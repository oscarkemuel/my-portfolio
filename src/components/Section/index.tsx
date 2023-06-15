import styles from "./styles.module.scss";

interface Props {
  id?: string;
  title?: string;
  children: React.ReactNode;
}

export function Section({ children, id, title }: Props) {
  return (
    <section
      className={`${styles.container} ${title && styles.withTitle}}`}
      id={id}
    >
      {title && <h2 className={styles.title}>{title}</h2>}

      {children}
    </section>
  );
}

Section.defaultProps = {
  id: "",
  title: "",
};
