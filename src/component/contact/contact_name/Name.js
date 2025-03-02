import styles from "./style.module.css";
import { useTranslation } from "react-i18next";

function Name() {
  const [t] = useTranslation();
  return (
    <div className={styles.name_block}>
      <button className={styles.name_btn}>{t("contact.btnname")}</button>

      <div className={styles.text_box}>
        <h1>{t("contact.bigname")}</h1>
        <p>{t("contact.description")}</p>
      </div>
    </div>
  );
}

export default Name;
