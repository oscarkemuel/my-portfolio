import { getAllExperiences } from "@/services/contentful";
import styles from "./experiences.module.scss";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

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
  const t = await getTranslations("About.experiences");

  function formatDate(date: string, locale: string) {
    if (!Date.parse(date)) {
      throw new Error(`Invalid date: ${date}`);
    }
  
    const formattedDate = new Date(date).toLocaleDateString(locale, {
      month: "long",
      year: "numeric",
    });
  
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  }
  
  function getDatesFormated({
    startDate,
    finalDate,
  }: {
    startDate: string;
    finalDate?: string;
  }) {
    const startDateFormated = formatDate(startDate, locale);
  
    const finalDateFormated = finalDate
      ? formatDate(finalDate, locale)
      : t("present-title");
  
    return `${startDateFormated} - ${finalDateFormated}`;
  }

  return (
    <ul className={styles.itens}>
      {experiences.reverse().map((experience) => (
        <li key={experience.company} className={styles.item}>
          <div className={styles.imageContainer}>
            <figure>
              <Image
                src={experience.companyImage}
                alt="Foto do autor Oscar Kemuel"
                fill={true}
                className={styles.image}
              />
            </figure>
          </div>
          <div className="informations">
            <div className={styles.informations}>
              <h3>{experience.company}</h3>
              <h4>{experience.office}</h4>
              <p>{experience.description}</p>
              <span>{getDatesFormated(experience)}</span>
            </div>
            <ul className={styles.skills}>
              {experience.skills?.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
}
