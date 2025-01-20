import styles from "./style.module.css";

function Work_05() {
  return (
    <div className={styles.container_block}>

      <div className={styles.container_about_block}>
        <button className={styles.container_btn}>05</button>

        <div className={styles.container_text_block}>
          <h1 className={styles.container_name}>Working drawings</h1>
          <p className={styles.container_text}>
            In order for your interior to fully comply with the project, we
            prepare a complete set of working drawings (35-45 sheets) which
            includes: all necessary drawings, wall layouts, electrical,
            technical drawings, drawings for built-in furniture, etc. That's all
            you need to start implementing the project. Prepared drawings will
            allow you to carry out repairs easily and avoid unnecessary
            questions from builders and contractors.
          </p>
        </div>
      </div>

      <div className={styles.container_image}></div>
    </div>
  );
}

export default Work_05;
