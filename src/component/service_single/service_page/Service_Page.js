import styles from "./style.module.css";
import { serviceData } from "../../../json/service_packages/Service.Packages";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function Service_Page() {
  const [t] = useTranslation();
  const params = useParams();
  const [vizualShow, setVizualShow] = useState(false);

  return (
    <div className={styles.container_block}>
      {serviceData.map((item) => {
        if (item.id == params.id) {
          return (
            <div key={item.id} className={styles.info_blog}>
              <div className={styles.info_blog_text}>
                <button className={styles.info_blog_btn}>{t(item.btn)}</button>
                <h1 className={styles.info_blog_title}>{t(item.title)}</h1>
                <p className={styles.info_blog_description}>
                  {t(item.description)}
                </p>
              </div>
              <img src={item.img} className={styles.info_blog_img} />
            </div>
          );
        }
      })}

      {serviceData.map((item) => {
        if (item.id == params.id) {
          return item.pricing.map((el) => {
            return (
              <div key={el.id} className={styles.service_pricing}>
                <button className={styles.service_btn}>{t(el.btn)}</button>
                <p className={styles.service_text}>{t(el.description)}</p>
              </div>
            );
          });
        }
      })}

      {serviceData.map((servis) => {
        if (servis.id == params.id) {
          return servis.vizual.map((el) => {
            return (
              <div key={el.id} className={styles.vizual_block}>
                <button className={styles.vizual_btn}>{t(el.btn)}</button>
                <div className={styles.vizula_text_block}>
                  <h1 className={styles.vizual_title}>{t(el.title)}</h1>
                  <ul
                    className={styles.vizual_ul}
                    style={{ height: vizualShow && "auto" }}
                  >
                    {el.composition.map((comp) => {
                      return <li key={comp.id}>{t(comp.text)}</li>;
                    })}
                  </ul>
                  <button
                    className={styles.visual_btn_show}
                    onClick={() => setVizualShow(!vizualShow)}
                  >
                    {vizualShow
                      ? t("services.showservice.commerical.vizual.viewless")
                      : t("services.showservice.commerical.vizual.alllist")}
                  </button>
                </div>

                <img className={styles.vizual_img} src={el.img} />
              </div>
            );
          });
        }
      })}

      {serviceData.map((servis) => {
        if (servis.id == params.id) {
          return servis.need_design.map((item) => {
            return (
              <div key={item.id} className={styles.need_design}>
                <button className={styles.need_btn}>{t(item.btn)}</button>
                <div className={styles.need_text_box}>
                  <h1 className={styles.need_title}>{t(item.title)}</h1>
                  <p className={styles.need_description}>
                    {t(item.description)}
                  </p>
                </div>
              </div>
            );
          });
        }
      })}
    </div>
  );
}

export default Service_Page;
