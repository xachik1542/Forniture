import styles from "./style.module.css";

function Work_06() {
  return (
    <div className={styles.container_block}>
      <div className={styles.container_image}></div>
      <div className={styles.container_about_block}>
        <button className={styles.container_btn}>06</button>

        <div className={styles.container_text_block}>
          <h1 className={styles.container_name}>Interior equipment<br/> specification</h1>
          <p className={styles.container_text}>
            We will select materials, furniture, plumbing and everything
            necessary to bring the project to life exactly as in visualizations.
            We will provide specifications that contain articles, quantity,
            delivery time, cost and name of the supplier. All you have to do is
            enjoy implementation of the project.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Work_06;
