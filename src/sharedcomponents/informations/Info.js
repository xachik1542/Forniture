import { useTranslation } from "react-i18next";
import styles from "./style.module.css";

function Informations() {
  const [t] = useTranslation();
  return (
    <div className={styles.inform_block}>
      <div className={styles.using_box}>
        <h1 className={styles.using_name}>{t("home.inform.one.title")}</h1>
        <p className={styles.using_text}>{t("home.inform.one.description")}</p>
      </div>
      <div className={styles.personal_box}>
        <h1 className={styles.personal_name}>{t("home.inform.two.title")}</h1>
        <p className={styles.personal_text}>
          {t("home.inform.two.description")}
        </p>
      </div>
      <div className={styles.servis_one}>
        <h1 className={styles.servis_one_name}>
          {t("home.inform.three.title")}
        </h1>
        <p className={styles.servis_one_text}>
          {t("home.inform.three.description")}
        </p>
      </div>
      <div className={styles.servis_two}>
        <h1 className={styles.servis_two_name}>
          {t("home.inform.four.title")}
        </h1>
        <p className={styles.servis_two_text}>
          {t("home.inform.four.description")}
        </p>
      </div>
    </div>
  );
}

export default Informations;
