import { useTranslation } from "react-i18next";
import styles from "./style.module.css";

function About_us() {
  const [t] = useTranslation();
  return (
    <div className={styles.about_us_block}>
      <button>{t("home.about.name")}</button>
      <p>{t("home.about.description")}</p>
    </div>
  );
}

export default About_us;
