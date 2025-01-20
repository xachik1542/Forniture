import styles from "./style.module.css";
import { data } from "../../../json/portfolio/project";
import { useParams } from "react-router-dom";

function About_Project() {
  let params = useParams();

  return (
    <div className={styles.container_block}>
      {data.map((item) => {
        if(params.id == item.id) {
          return (
            <div key={item.id} className={styles.container_title}>
            <button className={styles.container_btn}>About Project</button>
            <h1 className={styles.container_h1}>{item.subTitle}</h1>
            <p className={styles.container_p}>{item.description}</p>
          </div>
          )
        }
      })}
    </div>
  );
}

export default About_Project;
