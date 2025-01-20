import styles from "./style.module.css";
import { useEffect, useState } from "react";
import filter from "../../../assets/img/portfolio/filter.png";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import First_Category from "../category/first_category/First_Category";
import Sub_Category from "../category/sub_category/Sub_Category";
import Types_Category from "../category/type_category/Types_Category";

function Media({ select }) {
  useEffect(() => {
    if (select.menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [select.menu]);

  return (
    <div className={styles.media_block}>
      <div className={styles.media_filter_box}>
        <button className={styles.all_btn}>All Projects</button>
        <div
          className={styles.filter_img}
          onClick={() => select.setMenu(true)}
        >
          <img src={filter} />
        </div>
      </div>

      {select.menu ? (
        <div className={styles.container_open_category}>
          <div className={styles.media_nav_filter}>
            <HiOutlineArrowSmLeft
              className={styles.arrow_media_filter}
              onClick={() => select.setMenu(false)}
            />
            <h1>Filters</h1>
            <p>Reset</p>
          </div>
          <div className={styles.category_box}>
            <First_Category select={select} />
            <Sub_Category select={select} />
            <Types_Category select={select} />
            <button className={styles.save_btn}>Save Changes</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Media;
