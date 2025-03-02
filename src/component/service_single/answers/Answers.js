import { useState } from "react";
import styles from "./style.module.css";
import Commponents_Answer from "./Commponents_Answer";
import { answer } from "../../../json/service_packages/Service.Packages";
import { Link } from "react-router-dom";
import { RxArrowTopRight } from "react-icons/rx";
import { useTranslation } from "react-i18next";

function Answers() {
  const [t] = useTranslation();
  const [id, setId] = useState(0);

  const getId = (getId) => {
    if (getId == id) {
      setId(-1);
    } else {
      setId(getId);
    }
  };

  return (
    <div className={styles.container_block}>
      <div className={styles.answer_boxes}>
        <button className={styles.container_btn}>
          {t("services.answers.btnname")}
        </button>
        {answer.map((el) => {
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

      <Link to={"/work"} className={styles.link_to_work}>
        {t("services.answers.link")}
        <RxArrowTopRight className={styles.icon_arrow} />
      </Link>
    </div>
  );
}

export default Answers;
