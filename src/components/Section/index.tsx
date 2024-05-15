import styles from "./styles.module.scss";

interface Props {
  id?: string;
  title?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ children, id, title, className }: Props) {
  return (
    <section
      className={`${styles.container} ${title && styles.withTitle} ${className}`}
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
