import styles from "./style.module.css";
import { answer } from "../../../json/about/about.inform";
import { useState } from "react";
import Question from "./Question";
function Answers() {
  const [id, setId] = useState(-1);

  const getId = (getId) => {
    if (getId == id) {
      setId(-1);
    } else {
      setId(getId);
    }
  };

  return (
    <div className={styles.container_block}>
      <button className={styles.container_btn}>Answers to Questions</button>
      {answer.map((el) => {
        return (
          <Question
            key={el.id}
            item={el}
            setId={getId}
            isShow={el.id == id ? true : false}
          />
        );
      })}
    </div>
  );
}

export default Answers;
