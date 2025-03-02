import { useTranslation } from "react-i18next";
import styles from "./style.module.css";

function What_We() {
  const [t] = useTranslation();

  return (
    <div className={styles.container_block}>
      <button className={styles.container_btn}>{t("about.whatWe.name")}</button>
      <p className={styles.container_text}>{t("about.whatWe.description")}</p>
    </div>
  );
}

export default What_We;
