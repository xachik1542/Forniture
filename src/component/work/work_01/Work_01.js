import styles from "./style.module.css";

function Work_01() {

  return (
    <div className={styles.container_block}>

      <div className={styles.container_about_block}>
        <button className={styles.container_btn}>01</button>
        <div className={styles.container_text_block}>
          <h1 className={styles.container_name}>Acquaintance</h1>
          <p className={styles.container_text}>
            Before concluding contract and starting work, we hold a meeting
            where we get to know each other, tell you in detail how our work is
            structured, discuss the budget and write down your wishes in the
            form of brief.
          </p>
        </div>
      </div>

      <div className={styles.container_image}></div>
    </div>
  );
}

export default Work_01;
