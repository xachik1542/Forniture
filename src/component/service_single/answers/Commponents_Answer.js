import styles from "./style.module.css";
import { useTranslation } from "react-i18next";

function Commponents_Answer({ item, setId, isShow }) {
  const [t] = useTranslation();
  const handleShowAnswer = (item) => {
    setId(item.id);
  };

  return (
    <div
      className={isShow ? styles.open : styles.close}
      onClick={() => handleShowAnswer(item)}
    >
      <h1 className={styles.question_name}>{t(item.title)}</h1>
      {isShow ? (
        <p className={styles.question_text}>{t(item.description)}</p>
      ) : null}
      <h1 className={styles.plus_minus}>{isShow ? "-" : "+"}</h1>
    </div>
  );
}

export default Commponents_Answer;
