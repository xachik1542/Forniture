import { Link } from "react-router-dom";
import styles from "./style.module.css";

import { MdArrowOutward } from "react-icons/md";
import { service } from "../../../json/home/home.service";

function View_Services() {
  return (
    <div className={styles.view_servis_block}>
      <div className={styles.view_servis_boxes}>
        {service.map((item) => {
          console.log(item);

          return (
            <Link key={item.id} to={"/service"} className={styles.view_servis}>
              <img src={item.img} />
              <div className={styles.servis_text_box}>
                <h1>{item.name}</h1>
                <p>{item.text}</p>
              </div>
            </Link>
          );
        })}
      </div>

      <Link to={"/service"} className={styles.servis_btn}>
        VIEW SERVICES <MdArrowOutward className={styles.servis_arrow} />
      </Link>
    </div>
  );
}

export default View_Services;
