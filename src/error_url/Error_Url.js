import { useTranslation } from "react-i18next";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import error from "../assets/img/errors/404.png";

function Error_Url() {
  const [t] = useTranslation();
  return (
    <div className={styles.errors_block}>
      <p className={styles.errors_oops}>{t("errorsurl.text")}</p>
      <img src={error} className={styles.errors_img} />
      <h1 className={styles.errors_title_text}>{t("errorsurl.title")}</h1>
      <Link to={"/"} className={styles.link_home}>
        {t("errorsurl.linkname")}
      </Link>
    </div>
  );
}

export default Error_Url;
