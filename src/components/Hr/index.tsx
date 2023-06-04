import styles from "./styles.module.scss";
interface Props {
  width?: string;
  margin?: string;
  height?: string;
  radius?: string;
  fullWidthInMobile?: boolean;
}

export function Hr({
  width,
  margin,
  height,
  radius,
  fullWidthInMobile,
}: Props) {
  return (
    <hr
      style={{
        width,
        margin,
        height,
        borderRadius: radius,
      }}
      className={`${styles.container} ${
        fullWidthInMobile && styles.fullWidthInMobile
      }`}
    />
  );
}
