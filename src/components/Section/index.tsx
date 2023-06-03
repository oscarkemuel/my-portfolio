import styles from "./styles.module.scss";

interface Props {
  id?: string;
  title?: string;
  children: React.ReactNode;
}

export function Section({ children, id, title }: Props) {
  return (
    <section
      className={title ? styles.containerWithTitle : styles.container}
      id={id}
    >
      {title && <h2>{title}</h2>}

      <div>{children}</div>
    </section>
  );
}

Section.defaultProps = {
  id: "",
  title: "",
};
