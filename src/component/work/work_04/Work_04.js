import styles from "./style.module.css";

function Work_04() {
  return (
    <div className={styles.container_block}>
      <div className={styles.container_image}></div>

      <div className={styles.container_about_block}>
        <button className={styles.container_btn}>04</button>

        <div className={styles.container_text_block}>
          <h1 className={styles.container_name}>Visualization</h1>
          <p className={styles.container_text}>
            After agreeing on main plan, we begin work on drawing up the concept
            of the future interior. To do this, we develop a detailed 3D
            visualization a three-dimensional image of each room from several
            angles so that you can fully experience the atmosphere of the
            future interior.
          </p>
        </div>
      </div>

    </div>
  );
}

export default Work_04;
