import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { useTranslation } from "react-i18next";

function Timeline() {
  const [t] = useTranslation();
  return (
    <div className={styles.container_block}>
      <div className={styles.container_pair_block}>
        <div className={styles.container_timeline_block}>
          <button className={styles.container_timeline_btn}>
            {t("services.timeline.btnname")}
          </button>

          <ul className={styles.container_timeline_ul}>
            <li>{t("services.timeline.planone")}</li>
            <li>{t("services.timeline.plantwo")}</li>
            <li>{t("services.timeline.planthree")}</li>
            <li>{t("services.timeline.planfour")}</li>
          </ul>

          <h1>{t("services.timeline.prize")}</h1>
        </div>

        <div className={styles.container_timeline_img}></div>
      </div>

      <Link to={"/calculate"} className={styles.container_link}>
      {t("services.timeline.linktimeline")} <MdArrowOutward />
      </Link>
    </div>
  );
}

export default Timeline;
