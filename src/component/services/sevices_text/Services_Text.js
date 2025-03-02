import { useTranslation } from "react-i18next";
import styles from "./style.module.css";

function Services_Text() {
  const [t] = useTranslation();
  return (
    <div className={styles.container_block}>
      <div className={styles.container_text_block}>
        <button className={styles.container_btn}>{t("services.titleservice.btnname")}</button>
        <h1 className={styles.container_name}>{t("services.titleservice.title")}</h1>
        <p className={styles.container_text}>{t("services.titleservice.description")}</p>
      </div>
    </div>
  );
}

export default Services_Text;
