import styles from "./style.module.css";

function What_Service({ setChooseObject, setWhatServis }) {
  const handleBackCLick = () => {
    setChooseObject(true);
    setWhatServis(false);
  };
  return (
    <div className={styles.what_service_box}>
      <h1 className={styles.what_service_name}>What Services do you need?</h1>
      <div className={styles.service_choose_box}></div>

      <div className={styles.service_next_box}>
        <button className={styles.back_btn} onClick={handleBackCLick}>
          Back
        </button>
        <button className={styles.next_btn}>Next</button>
      </div>
    </div>
  );
}

export default What_Service;
