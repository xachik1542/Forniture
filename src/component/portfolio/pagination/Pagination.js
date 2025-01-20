import styles from "./style.module.css";

import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { data } from "../../../json/portfolio/project";
import { useEffect, useState } from "react";

function Pagination() {
  const [count, setCount] = useState(1);

  return (
    <div className={styles.pagin_blog_block}>
      <div className={styles.pagination_block}>
        <button className={styles.back_btn}>
          <HiOutlineArrowSmLeft className={styles.pagin_arrows} />
          <p className={styles.prev_text}>Previous</p>
        </button>

        <div className={styles.btn_box}>{data.map((item, index) => {
            
        })}</div>

        <button className={styles.next_btn}>
          <p className={styles.next_text}>Next </p>
          <HiOutlineArrowSmRight className={styles.pagin_arrows} />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
