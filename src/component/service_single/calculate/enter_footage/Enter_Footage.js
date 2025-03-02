import { useEffect, useState } from "react";
import styles from "./style.module.css";
import { useTranslation } from "react-i18next";

function Enter_Footage({
  setFootage,
  setQuestionObject,
  calculatePacet,
  setCalculatePacket,
}) {
  const [t] = useTranslation();
  const [inputValue, setInputValue] = useState(0);

  const handleBack = () => {
    setFootage(false);
    setQuestionObject(true);
  };

  const handleSquare = () => {
    setCalculatePacket({ ...calculatePacet, square: +inputValue });
    setFootage(false);
  };

  return (
    <div className={styles.footage_block}>
      <h1 className={styles.footage_name}>
        {t("services.calculate.footage.name")}
      </h1>
      <div className={styles.enter_footage_block}>
        <div className={styles.pair_footage_box}>
          <form className={styles.form_footage}>
            <label>{t("services.calculate.footage.inputname")}</label>
            <input
              type="number"
              placeholder="100"
              onChange={(e) => setInputValue(e.target.value)}
            />
          </form>

          <div className={styles.text_footage_box}>
            <h1>{t("services.calculate.footage.title")}</h1>
            <p>{t("services.calculate.footage.description")}</p>
          </div>
        </div>
      </div>

      <div className={styles.box_back_calculate}>
        <button className={styles.back_calculate} onClick={handleBack}>
          {t("back")}
        </button>

        <button
          className={
            inputValue > 0
              ? styles.active_calculate_btn
              : styles.pasive_calculate_btn
          }
          onClick={handleSquare}
        >
          {t("services.calculate.footage.linkcalculate")}
        </button>
      </div>
    </div>
  );
}

export default Enter_Footage;
