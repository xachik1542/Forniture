import styles from "./style.module.css";
import { data } from "../../../json/portfolio/project";
import { useParams } from "react-router-dom";

function Interier_Design() {
  let params = useParams();

  const handleSvg = (item) => {
    return {...item, isFavorite: true}
  }

  return (
    <div className={styles.container_block}>
      {data.map((item) => {
        if(params.id == item.id) {
          return (
            <div key={item.id} className={styles.container_about_block}>
              <img src={item.img} className={styles.container_img} />
              <div className={styles.container_inform_box}>
                <button className={styles.inform_btn}>
                  <p className={styles.inform_text}>Service</p>
                  <p className={styles.inform_text}>{}</p>
                </button>
                <button className={styles.inform_btn}>
                  <p className={styles.inform_text}>Location</p>
                  <p className={styles.inform_text}>{item.location}</p>
                </button>
                <button className={styles.inform_btn}>
                  <p className={styles.inform_text}>Object</p>
                  <p className={styles.inform_text}>{item.size}</p>
                </button>
                <button className={styles.inform_btn}>
                  <p className={styles.inform_text}>Date</p>
                  <p className={styles.inform_text}>{item.date}</p>
                </button>
              </div>
            </div>
          )
        }
      })}

      {data.map((item) => {
        if(params.id == item.id) {
          return (
            <div key={item.id} className={styles.container_title_block}>
              <button className={styles.title_btn}>{item.title}</button>
              <div
                className={styles.container_like_box}
                // style={{ backgroundColor: "#764AF1" : "white" }}
                onClick={() => handleSvg(item)}
              >
                <svg
                  width="22"
                  height="19"
                  viewBox="0 0 22 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.3036 1.67974C19.766 1.14721 19.1278 0.724775 18.4253 0.43656C17.7228 0.148345 16.9699 0 16.2095 0C15.4491 0 14.6961 0.148345 13.9936 0.43656C13.2912 0.724775 12.6529 1.14721 12.1153 1.67974L11.7033 2.08771C11.3136 2.47359 10.6858 2.47359 10.2961 2.08771L9.8841 1.67974C8.79827 0.604577 7.32556 0.000557293 5.78997 0.000557305C4.25437 0.000557316 2.78167 0.604577 1.69584 1.67974C0.610013 2.7549 1.14411e-08 4.21313 0 5.73364C-1.14411e-08 7.25415 0.610013 8.71238 1.69584 9.78754L2.81147 10.8922L10.2961 18.3033C10.6858 18.6892 11.3136 18.6892 11.7033 18.3033L19.188 10.8922L20.3036 9.78754C20.8414 9.25526 21.268 8.62328 21.5591 7.9277C21.8502 7.23212 22 6.48657 22 5.73364C22 4.98071 21.8502 4.23516 21.5591 3.53958C21.268 2.84399 20.8414 2.21201 20.3036 1.67974Z"
                    fill={item.isFavorite ? "white" : "#764AF1"}
                  />
                </svg>
              </div>
            </div>
          )
        }
      })}
    </div>
  );
}

export default Interier_Design;
