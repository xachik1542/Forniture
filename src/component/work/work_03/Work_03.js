import { useTranslation } from "react-i18next";
import styles from "./style.module.css";

function Work_03() {
  const [t] = useTranslation();

  return (
    <div className={styles.container_block}>
      <div className={styles.container_about_block}>
        <button className={styles.container_btn}>03</button>

        <div className={styles.container_text_block}>
          <h1 className={styles.container_name}>{t("work.03.name")}</h1>
          <p className={styles.container_text}>{t("work.03.description")}</p>
        </div>
      </div>

      <div className={styles.container_image}></div>
    </div>
  );
}

export default Work_03;
