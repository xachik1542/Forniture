import styles from "./style.module.css";

function Question({ item, setId, isShow }) {
  const handleShowAnswer = (item) => {
    setId(item.id);
  };

  return (
    <div
      className={isShow ? styles.open : styles.close}
      onClick={() => handleShowAnswer(item)}
    >
      <h1 className={styles.question_name}>{item.name}</h1>
      {isShow ? <p className={styles.question_text}>{item.text}</p> : null}
      <h1 className={styles.plus_minus}>{isShow ? "-" : "+"}</h1>
    </div>
  );
}

export default Question;
