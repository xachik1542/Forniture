import styles from "./style.module.css";
import { useEffect, useState } from "react";
import filter from "../../../assets/img/portfolio/filter.png";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import First_Category from "../category/first_category/First_Category";
import Sub_Category from "../category/sub_category/Sub_Category";
import Types_Category from "../category/type_category/Types_Category";
import { useTranslation } from "react-i18next";

function Media({ select }) {
  const [t] = useTranslation();
  useEffect(() => {
    if (select.menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [select.menu]);

  const handleBackFilter = () => {
    select.setFirstId(0);
    select.setSubid(0);
    select.setTypeId(0);
    select.setMenu(false);
    select.setSubCategories([]);
    select.setTypes([]);
  };

  const handleReset = () => {
    select.setFirstId(0);
    select.setSubid(0);
    select.setTypeId(0);
    select.setSubCategories([]);
    select.setTypes([]);
  };

  return (
    <div className={styles.media_block}>
      <div className={styles.media_filter_box}>
        <button className={styles.all_btn}>{t("portfolio.all")}</button>
        <div className={styles.filter_img} onClick={() => select.setMenu(true)}>
          <img src={filter} />
        </div>
      </div>

      {select.menu ? (
        <div className={styles.container_open_category}>
          <div className={styles.media_nav_filter}>
            <HiOutlineArrowSmLeft
              className={styles.arrow_media_filter}
              onClick={handleBackFilter}
            />
            <h1>{t("portfolio.navigation.media.filter")}</h1>
            <p onClick={handleReset}>{t("portfolio.navigation.media.reset")}</p>
          </div>
          <div className={styles.category_box}>
            <First_Category select={select} />
            <Sub_Category select={select} />
            <Types_Category select={select} />
            <button
              className={styles.save_btn}
              onClick={() => select.setMenu(false)}
            >
              {t("portfolio.navigation.media.save")}
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Media;
