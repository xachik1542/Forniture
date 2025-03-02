import styles from "./style.module.css";
import { projects } from "../../../json/portfolio/project";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

function About_Project() {
  const [t] = useTranslation();
  let params = useParams();

  return (
    <div className={styles.container_block}>
      {projects.map((item) => {
        if(params.id == item.id) {
          return (
            <div key={item.id} className={styles.container_title}>
            <button className={styles.container_btn}>{t("portfolio.project.aboutproject")}</button>
            <h1 className={styles.container_h1}>{t(item.subTitle)}</h1>
            <p className={styles.container_p}>{t(item.description)}</p>
          </div>
          )
        }
      })}
    </div>
  );
}

export default About_Project;
