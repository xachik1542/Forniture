import styles from "./style.module.css";
import { serviceData } from "../../../json/service_packages/Service.Packages";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

function ServiceComp() {
  const [t] = useTranslation();
  const containerRef = useRef([]);

  const scrollToSection = (index) => {
    console.log(containerRef);
    if (containerRef.current[index]) {
      containerRef.current[index].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.container_block}>
      <div className={styles.container_navigate}>
        {serviceData.map((item, index) => {
          return (
            <Link
              key={item.id}
              className={styles.container_link}
              onClick={() => scrollToSection(index)}
            >
              {t(item.btn)} <MdArrowOutward className={styles.link_arrow} />
            </Link>
          );
        })}
      </div>

      {serviceData.map((item, index) => {
        if (
          item.id % 2 == 1 &&
          t(item.btn) !== "Packages" &&
          t(item.btn) !== "Փաթեթներ" &&
          t(item.btn) !== "Пакеты" &&
          t(item.btn) !== "Balíčky"
        ) {
          return (
            <Link
              key={item.id}
              to={`/service/page/${item.id}`}
              ref={(el) => (containerRef.current[index] = el)}
              className={styles.container_project_flex}
            >
              <div className={styles.container_text_block}>
                <button className={styles.container_btn}>{t(item.btn)}</button>
                <div className={styles.text_box}>
                  <h1 className={styles.container_name}>{t(item.title)}</h1>
                  <p className={styles.container_text}>{t(item.description)}</p>
                  <h3 className={styles.container_know}>
                    {t(item.more)}
                    <MdArrowOutward className={styles.container_arrow} />
                  </h3>
                </div>
              </div>

              <img src={item.img} className={styles.project_img} />
            </Link>
          );
        } else if (
          item.id % 2 == 0 &&
          t(item.btn) !== "Packages" &&
          t(item.btn) !== "Փաթեթներ" &&
          t(item.btn) !== "Пакеты" &&
          t(item.btn) !== "Balíčky"
        ) {
          return (
            <Link
              key={item.id}
              to={`/service/page/${item.id}`}
              ref={(el) => (containerRef.current[index] = el)}
              className={styles.container_project_reverse}
            >
              <div className={styles.container_text_block}>
                <button className={styles.container_btn}>{t(item.btn)}</button>
                <div className={styles.text_box}>
                  <h1 className={styles.container_name}>{t(item.title)}</h1>
                  <p className={styles.container_text}>{t(item.description)}</p>
                  <h3 className={styles.container_know}>
                    {t(item.more)}
                    <MdArrowOutward className={styles.container_arrow} />
                  </h3>
                </div>
              </div>

              <img src={item.img} className={styles.project_img} />
            </Link>
          );
        } else {
          return (
            <div
              key={item.id}
              className={styles.container_packages_box}
              ref={(el) => (containerRef.current[index] = el)}
            >
              <button className={styles.container_btn}>{t(item.btn)}</button>
              <h1 className={styles.project_box_title}>{t(item.title)}</h1>
            </div>
          );
        }
      })}
    </div>
  );
}

export default ServiceComp;
