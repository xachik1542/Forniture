import styles from "./style.module.css";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { HiOutlineArrowSmRight } from "react-icons/hi";

function Project_Pagination({ projects }) {  
  return (
    <div className={styles.pagination_block}>
      <button className={styles.back_btn}>
        <HiOutlineArrowSmLeft className={styles.pagin_arrows} />
        <p className={styles.prev_text}>Previous</p>
      </button>

      <div className={styles.btn_box}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </div>

      <button className={styles.next_btn}>
        <p className={styles.next_text}>Next </p>
        <HiOutlineArrowSmRight className={styles.pagin_arrows} />
      </button>
    </div>
  );
}

export default Project_Pagination;
