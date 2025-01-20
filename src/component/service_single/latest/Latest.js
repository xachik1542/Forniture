import styles from "./style.module.css";
import { MdArrowOutward } from "react-icons/md";
// import single_json from "../../../json/service_single/Service_Single.json";
import { Link } from "react-router-dom";

function Latest() {
  return (
    <div >
      {/* {single_json.map((el) => {
        if (el.id === 6) {
          return (
            <div key={el} className={styles.latest_btn_box}>
              <button>{el.btn}</button>

              <div className={styles.latest_many_img}>
                {el.imgages.map((el) => {
                  if (el.key === "small") {
                    return <img src={el.img} className={styles.small_img}/>;
                  }else if(el.key === "big") {
                    return <img src={el.img} className={styles.big_img_two}/>;;
                  }else if(el.key === "small_two") {
                    return  (
                      <div className={styles.small_two_box}>
                        <img src={el.img} className={styles.small_img_two}/>
                        <Link to={'/portfolio'}>VIEW ALL PROJECTS <MdArrowOutward/></Link>
                      </div>
                    )
                  }else {
                    return <img src={el.img} className={styles.big_img}/>;
                  }
                })}
              </div>
            </div>
          );
        }
      })} */}
    </div>
  );
}

export default Latest;
