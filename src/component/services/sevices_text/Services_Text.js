import styles from "./style.module.css";

function Services_Text() {
  return (
    <div className={styles.container_block}>
      <div className={styles.container_text_block}>
        <button className={styles.container_btn}>Services & Packages</button>
        <h1 className={styles.container_name}>SERVICES</h1>
        <p className={styles.container_text}>
          Lorem ipsum dolor sit amet
          <br className={styles.media_br} /> consectetur. Integer sit vel
          quisque
          <br className={styles.media_br} /> laoreet lacus at.
        </p>
      </div>
    </div>
  );
}

export default Services_Text;
