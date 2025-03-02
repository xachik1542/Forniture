import styles from "./style.module.css";
function Stages_Project() {
  return (
    <div className={styles.container_block}>
      <button className={styles.container_btn}>Work Satges</button>
      <button className={styles.media_btn}>Stages of Project Design</button>
      <img src={process} className={styles.container_img} />
      <p className={styles.container_text}>
        Lorem ipsum dolor sit amet consectetur. Integer sit vel quisque laoreet
        lacus at.
      </p>
      <p className={styles.media_text}>
        Lorem ipsum dolor sit amet<br/> consectetur. Integer sit vel quisque laoreet
        lacus at.
      </p>
    </div>
  );
}

export default Stages_Project;
