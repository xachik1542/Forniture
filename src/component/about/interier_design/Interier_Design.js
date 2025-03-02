import { useTranslation } from "react-i18next";
import styles from "./style.module.css";

function Interier_Design() {
  const [t] = useTranslation();

  return (
    <div className={styles.container_block}>
      <div className={styles.container_text_block}>
        <button className={styles.container_btn}>
          {t("about.interierDesign.name")}
        </button>
        <div className={styles.text_box}>
          <h1 className={styles.container_name}>
            {t("about.interierDesign.title")}
          </h1>
          <p className={styles.container_text}>
            {t("about.interierDesign.description")}
          </p>
        </div>
      </div>
      <div className={styles.container_img_box}></div>
    </div>
  );
}

export default Interier_Design;
