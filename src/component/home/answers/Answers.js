import { useState } from "react";
import styles from "./style.module.css";
import Commponents_Answer from "./Components_Answer";
import { useTranslation } from "react-i18next";

function Answers() {
  const [t] = useTranslation();
  const [id, setId] = useState(0);

  const answer = [
    {
      id: 1,
      name: t("home.answers.one.name"),
      text: t("home.answers.one.description"),
    },
    {
      id: 2,
      name: t("home.answers.two.name"),
      text: t("home.answers.two.description"),
    },
    {
      id: 3,
      name: t("home.answers.three.name"),
      text: t("home.answers.three.description"),
    },
    {
      id: 4,
      name: t("home.answers.four.name"),
      text: t("home.answers.four.description"),
    },
  ];

  const getId = (getId) => {
    if (getId == id) {
      setId(-1);
    } else {
      setId(getId);
    }
  };

  return (
    <div className={styles.container_block}>
      <button className={styles.container_btn}>{t("home.answers.btnname")}</button>
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
  );
}

export default Answers;
