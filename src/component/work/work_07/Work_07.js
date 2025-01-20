import styles from "./style.module.css";

function Work_07() {
  return (
    <div className={styles.container_block}>
      <div className={styles.container_about_block}>
        <button className={styles.container_btn}>07</button>

        <div className={styles.container_text_block}>
          <h1 className={styles.container_name}>Author's supervision</h1>
          <p className={styles.container_text}>
            Author's supervision is an important stage in transforming picture
            into dream interior. As part of supervision, we prepare material
            purchase schedule, control deliveries and monitor completed work. We
            also do everything that cannot be done within the framework of a
            design project. For example, we select fabric, textiles, grout and
            decor directly on site. And of course, we make changes and prepare
            clarifying drawings if necessary.
          </p>
        </div>
      </div>
      <div className={styles.container_image}></div>
    </div>
  );
}

export default Work_07;
