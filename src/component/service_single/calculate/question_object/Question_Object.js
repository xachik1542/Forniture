import styles from "./style.module.css";
import { questionObjectCalculate } from "../../../../json/service_packages/Service.Packages";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function Question_Object({
  objectId,
  setObjectId,
  setChooseObject,
  setQuestionObject,
  setFootage,
  calculatePacet,
  setCalculatePacket,
}) {
  const [t] = useTranslation();
  const [questionData, setQuestionData] = useState([]);
  useEffect(() => {
    setQuestionData(questionObjectCalculate);
  }, []);

  const SelectQuestion = (el) => {
    if (!calculatePacet.questioned.some((elem) => elem.id == el.id)) {
      setCalculatePacket({
        ...calculatePacet,
        questioned: [...calculatePacet.questioned, el],
      });
    } else {
      setCalculatePacket({
        ...calculatePacet,
        questioned: calculatePacet.questioned.filter(
          (item) => item.id != el.id
        ),
      });
    }
  };
  const handleBackClick = () => {
    setObjectId(0);
    setChooseObject(true);
    setQuestionObject(false);
    setFootage(false);
    setCalculatePacket({});
  };

  const handleOpenFootage = () => {
    if (calculatePacet.questioned.length > 0) {
      setFootage(true);
      setQuestionObject(false);
    }
    return;
  };
  return (
    <div className={styles.what_service_box}>
      <h1 className={styles.what_service_name}>{t("services.calculate.questions.btnname")}</h1>

      <div className={styles.question_block}>
        {questionData.map((item) => {
          if (item.id == objectId) {
            return item.question.map((el) => {
              return (
                <button
                  key={el.id}
                  onClick={() => SelectQuestion(el)}
                  className={
                    calculatePacet.questioned.some((elem) => elem.id == el.id)
                      ? styles.question_btn_active
                      : styles.question_btn_passive
                  }
                >
                  {t(el.question)}
                </button>
              );
            });
          }
        })}
      </div>

      <div className={styles.service_next_box}>
        <button className={styles.back_btn} onClick={handleBackClick}>
          {t("back")}
        </button>
        <button
          className={
            calculatePacet.questioned.length > 0
              ? styles.active_next_btn
              : styles.passive_next_btn
          }
          onClick={handleOpenFootage}
        >
          {t("next")}
        </button>
      </div>
    </div>
  );
}

export default Question_Object;
