import { Link } from "react-router-dom";
import styles from "./style.module.css";

import { MdArrowOutward } from "react-icons/md";
import { serviceData } from "../../../json/service_packages/Service.Packages";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function View_Services() {
  const [t] = useTranslation();
  const [id, setId] = useState(0);

  return (
    <div className={styles.view_servis_block}>
      <div className={styles.view_servis_boxes}>
        {serviceData.map((item) => {
          if (
            t(item.btn) != "Packages" &&
            t(item.btn) !== "Փաթեթներ" &&
            t(item.btn) !== "Пакеты" &&
            t(item.btn) !== "Balíčky"
          ) {
            return (
              <Link
                key={item.id}
                to={"/service"}
                className={styles.view_servis}
                onMouseOver={() => setId(item.id)}
                onMouseLeave={() => setId(0)}
              >
                <img
                  src={
                    id == item.id
                      ? item.img_Calculate_Active
                      : item.img_Calculate
                  }
                />
                <div className={styles.servis_text_box}>
                  <h1>{t(item.btn)}</h1>
                  <p>{t(item.description)}</p>
                </div>
              </Link>
            );
          }
          return;
        })}
      </div>

      <Link to={"/service"} className={styles.servis_btn}>
        {t("home.servicelink")}
        <MdArrowOutward className={styles.servis_arrow} />
      </Link>
    </div>
  );
}

export default View_Services;
