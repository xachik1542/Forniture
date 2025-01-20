import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { answer } from "../../../json/service_packages/Service.Packages";
import { MdArrowOutward } from "react-icons/md";
import { useState } from "react";

function Answers() {
  const [id, setId] = useState(0);
  const [num, setNum] = useState(false);

  const handleOpen = (id) => {
    answer.map((el) => {
      if (el.id == id) {
        setId(id);
        setNum(!num);
      } 
    });
  };

  return (
    <div className={styles.container_block}>
      <div className={styles.container_pair}>
        <button className={styles.container_btn}>Answers to Questions</button>
        {answer.map((el) => {
          return (
            <div
              key={el.id}
              className={el.id === id && num ? styles.open : styles.close}
              onClick={() => handleOpen(el.id)}
            >
              <h1 className={styles.container_name}>{el.title}</h1>

              {el.id == id && num ? (
                <p className={styles.container_text}>{el.description}</p>
              ) : null}

              <h1 className={styles.plus_minus}>
                {el.id == id && num ? "-" : "+"}
              </h1>
            </div>
          );
        })}
      </div>

      <Link className={styles.container_link} to={"/work"}>
        SEE WORK STAGES
        <MdArrowOutward />
      </Link>
    </div>
  );
}

export default Answers;
