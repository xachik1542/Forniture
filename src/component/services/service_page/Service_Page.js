import styles from "./style.module.css";
import { service } from "../../../json/service_packages/Service.Packages";
import { useParams } from "react-router-dom";
import { useState } from "react";

function Service_Page() {
  const params = useParams();
  const [vizualShow, setVizualShow] = useState(false);

  return (
    <div className={styles.container_block}>
      {service.map((item) => {
        if (item.id == params.id) {
          return (
            <div key={item.id} className={styles.info_blog}>
              <div className={styles.info_blog_text}>
                <button className={styles.info_blog_btn}>{item.btn}</button>
                <h1 className={styles.info_blog_title}>{item.title}</h1>
                <p className={styles.info_blog_description}>
                  {item.description}
                </p>
              </div>
              <img src={item.img} className={styles.info_blog_img} />
            </div>
          );
        }
      })}

      {service.map((item) => {
        if (item.id == params.id) {
          return item.pricing.map((el) => {
            return (
              <div key={el.id} className={styles.service_pricing}>
                <button className={styles.service_btn}>{el.btn}</button>
                <p className={styles.service_text}>{el.description}</p>
              </div>
            );
          });
        }
      })}

      {service.map((servis) => {
        if (servis.id == params.id) {
          return servis.vizual.map((el) => {
            return (
              <div key={el.id} className={styles.vizual_block}>
                <button className={styles.vizual_btn}>{el.btn}</button>
                <div className={styles.vizula_text_block}>
                  <h1 className={styles.vizual_title}>{el.title}</h1>
                  <ul
                    className={styles.vizual_ul}
                    style={{ height: vizualShow && "auto" }}
                  >
                    {el.composition.map((comp) => {
                      return <li key={comp.id}>{comp.text}</li>;
                    })}
                  </ul>
                  <button
                    className={styles.visual_btn_show}
                    onClick={() => setVizualShow(!vizualShow)}
                  >
                    {vizualShow ? "View Less" : "All List"}
                  </button>
                </div>

                <img className={styles.vizual_img} src={el.img} />
              </div>
            );
          });
        }
      })}

      {service.map((servis) => {
        if (servis.id == params.id) {
          return servis.need_design.map((item) => {
            return (
              <div key={item.id} className={styles.need_design}>
                <button className={styles.need_btn}>{item.btn}</button>
                <h1 className={styles.need_title}>{item.title}</h1>
                <p className={styles.need_description}>{item.description}</p>
              </div>
            );
          });
        }
      })}
    </div>
  );
}

export default Service_Page;
