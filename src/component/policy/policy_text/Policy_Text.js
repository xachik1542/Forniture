import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";

function Policy_Text() {
  const [t] = useTranslation();
  return (
    <div className={styles.container_block}>
      <button className={styles.container_btn}>
        {t("policy.text.btnname")}
      </button>

      <div className={styles.container_text_box}>
        <p className={styles.text_date}>{t("policy.text.date")}</p>
        <h1 className={styles.text_name}>{t("policy.text.descriptionone")}</h1>
        <p className={styles.text}>{t("policy.text.descriptiontwo")}</p>
      </div>
    </div>
  );
}

export default Policy_Text;
