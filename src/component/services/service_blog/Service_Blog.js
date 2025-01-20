import styles from "./style.module.css";
import { service } from "../../../json/service_packages/Service.Packages";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

function Service_Blog() {
  return (
    <div className={styles.container_block}>
      <div className={styles.container_navigate}>
        {service.map((item) => {
          return (
            <Link key={item.id} className={styles.container_link}>
              {item.btn} <MdArrowOutward className={styles.link_arrow} />
            </Link>
          );
        })}
      </div>

      {service.map((item) => {
        if (item.id % 2 == 1 && item.btn !== "Packages") {
          return (
            <Link
              key={item.id}
              to={`/service/page/${item.id}`}
              className={styles.container_project_flex}
            >
              <div className={styles.container_text_block}>
                <button className={styles.container_btn}>{item.btn}</button>
                <h1 className={styles.container_name}>{item.title}</h1>
                <p className={styles.container_text}>{item.description}</p>
                <h3 className={styles.container_know}>
                  {item.more}
                  <MdArrowOutward className={styles.container_arrow} />
                </h3>
              </div>

              <img src={item.img} className={styles.project_img} />
            </Link>
          );
        } else if (item.id % 2 == 0 && item.btn !== "Packages") {
          return (
            <Link
              key={item.id}
              to={`/service/page/${item.id}`}
              className={styles.container_project_reverse}
            >
              <div className={styles.container_text_block}>
                <button className={styles.container_btn}>{item.btn}</button>
                <h1 className={styles.container_name}>{item.title}</h1>
                <p className={styles.container_text}>{item.description}</p>
                <h3 className={styles.container_know}>
                  {item.more}
                  <MdArrowOutward className={styles.container_arrow} />
                </h3>
              </div>

              <img src={item.img} className={styles.project_img} />
            </Link>
          );
        } else {
          return (
            <div key={item.id} className={styles.container_packages_box}>
              <button className={styles.container_btn}>{item.btn}</button>
              <h1 className={styles.project_box_title}>{item.title}</h1>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Service_Blog;
