import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

function Timeline() {
  return (
    <div className={styles.container_block}>
      <div className={styles.container_pair_block}>
        <div className={styles.container_timeline_block}>
          <button className={styles.container_timeline_btn}>Timeline & Price</button>

          <ul className={styles.container_timeline_ul}>
            <li>Measurement plan</li>
            <li>Plan of dismantled structures and partitions</li>
            <li>Plan of dismantled structures and partitions</li>
            <li>Detailing of erected structures</li>
            <li>Plan for arrangement of furniture and main interior items</li>
          </ul>

          <h1>from 2 moths<br/>from $1000
          </h1>
        </div>

        <div className={styles.container_timeline_img}></div>
      </div>

      <Link to={'/calculate'} className={styles.container_link}>
        CALCULATE YOUR PROJECT <MdArrowOutward />
      </Link>
    </div>
  );
}

export default Timeline;
