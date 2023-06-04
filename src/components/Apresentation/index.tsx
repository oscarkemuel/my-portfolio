import Image from "next/image";
import styles from "./styles.module.scss";
import { FaGithubSquare, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { useTranslations } from "next-intl";

export function Apresentation() {
  const t = useTranslations("Apresentation");
  const age = new Date().getFullYear() - 2002;

  const social = [
    {
      name: "Github",
      url: "https://github.com/oscarkemuel",
      icon: <FaGithubSquare size={35} />,
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/oscar-kemuel/",
      icon: <FaLinkedin size={35} />,
    },
    {
      name: "Currículo",
      url: "https://bit.ly/3nVlSOz",
      icon: <FaFileAlt size={30} />,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.containerMain}>
        <div className={styles.imageContainer}>
          <Image
            src="/emoji.png"
            alt="Foto do autor Oscar Kemuel"
            fill={true}
            className={styles.image}
          />
        </div>

        <div className={styles.titles}>
          <h1>{t('apresentation')}</h1>
          <h2>React Developer</h2>
          <p>{t('about', {age})}</p>
        </div>
      </div>

      <div className={styles.social}>
        {social.map((item) => {
          return (
            <a
              href={item.url}
              key={item.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          );
        })}
      </div>
    </div>
  );
}
