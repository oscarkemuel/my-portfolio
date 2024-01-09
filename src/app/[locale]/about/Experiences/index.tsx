import { getAllExperiences } from "@/services/contentful";
import styles from "./experiences.module.scss";

interface IProps {
  locale: string;
}

async function getExperiences(locale: string) {
  const response = await getAllExperiences({
    locale,
    revalidateInHours: 12,
  });

  return response;
}

export default async function Experiences({ locale }: IProps) {
  const { experiences } = await getExperiences(locale);

  return <div className={styles.container}></div>;
}
