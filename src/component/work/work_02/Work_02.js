import styles from "./style.module.css";

function Work_02() {
  return (
    <div className={styles.container_block}>
      <div className={styles.container_image}></div>

      <div className={styles.container_about_block}>
        <button className={styles.container_btn}>02</button>

        <div className={styles.container_text_block}>
          <h1 className={styles.container_name}>Room measurements</h1>
          <p className={styles.container_text}>
            Each design project begins with detailed measurements carried out by
            professionals. Plan from developer is not enough. We need to
            independently carry out measurements, measure, among other things,
            outlets of sewer pipes, water supply, the height of door.
          </p>
        </div>
      </div>

    </div>
  );
}

export default Work_02;
