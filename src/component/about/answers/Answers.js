import styles from "./style.module.css";
import { AnswerComponent } from "../../../json/about/about.inform";
import { useState } from "react";
import Commponents_Answer from "./Commponents_Answer";
import { useTranslation } from "react-i18next";
function Answers() {
  const [t] = useTranslation();
  const [id, setId] = useState(-1);

  const getId = (getId) => {
    console.log(getId);

    if (getId == id) {
      setId(-1);
    } else {
      setId(getId);
    }
  };

  return (
    <div className={styles.container_block}>
      <button className={styles.container_btn}>{t("about.answers.comname")}</button>
      {AnswerComponent().map((el) => {
        return (
          <Commponents_Answer
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
