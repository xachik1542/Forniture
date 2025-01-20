import styles from "./style.module.css";

function Work_03() {
  return (
    <div className={styles.container_block}>

      <div className={styles.container_about_block}>
        <button className={styles.container_btn}>03</button>

        <div className={styles.container_text_block}>
          <h1 className={styles.container_name}>Layouts</h1>
          <p className={styles.container_text}>
            Based on completed measurement plan, we develop at least three
            options for planning solutions that suit your lifestyle. When
            working on layout, we rely on brief, filled out together with you,
            and ergonomic standards in order to create a functional, thoughtful
            space.
          </p>
        </div>
      </div>
      
      <div className={styles.container_image}></div>
    </div>
  );
}

export default Work_03;
