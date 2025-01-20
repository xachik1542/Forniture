import styles from "./style.module.css";

function What_We() {
  return (
    <div className={styles.container_block}>
      <button className={styles.container_btn}>What We Do</button>
      <p className={styles.container_text}>
        Lorem ipsum dolor sit amet consectetur. Integer sit vel quisque laoreet
        lacus at. Adipiscing lacinia sit platea a nunc libero.<span className={styles.text_span}> In ut adipiscing
        urna pellentesque amet varius posuere quis.</span>
      </p>
    </div>
  );
}

export default What_We;
