import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { useTranslation } from "react-i18next";

function Logo() {
  const [t] = useTranslation();
  return (
    <div className={styles.container_block}>
      <div className={styles.container_logo_box}>
        <Link to={"/"}>logo</Link>
      </div>
      <div className={styles.container_title_box}>
        <Link to={"/policy"} className={styles.text_policy}>
          {t("footerlogo.name")}
        </Link>
        <h2 className={styles.text1_date}>@2024 {t("footerlogo.text")}</h2>
      </div>
    </div>
  );
}

export default Logo;
