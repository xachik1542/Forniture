import { useTranslation } from "react-i18next";
import styles from "./style.module.css";

function Calculate_Name() {
  const [t] = useTranslation();
  return (
    <div className={styles.calculate_name}>
      <div className={styles.calculate_title_box}>
        {t("services.calculate.calculatename.btnname")}
      </div>
      <h1 className={styles.calculate_title}>
        {t("services.calculate.calculatename.title")}
      </h1>
      <p className={styles.description}>
        {t("services.calculate.calculatename.description")}
      </p>
      <p className={styles.description_media}>
        {t("services.calculate.calculatename.descriptionmedia")}
      </p>
    </div>
  );
}

export default Calculate_Name;
