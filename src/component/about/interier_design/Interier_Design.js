import styles from "./style.module.css";

function Interier_Design() {
  return (
    <div className={styles.container_block}>
      <div className={styles.container_text_block}>
        <button className={styles.container_btn}>About us</button>
        <h1 className={styles.container_name}>WE ARE THE BEST INTERIOR DESIGN AGENCY</h1>
        <p className={styles.container_text}>
          Lorem ipsum dolor sit amet consectetur. Integer sit vel quisque
          laoreet lacus at. Adipiscing lacinia sit platea a nunc libero. In ut
          adipiscing urna pellentesque amet varius posuere quis.
        </p>
      </div>
      <div className={styles.container_img_box}></div>
    </div>
  );
}

export default Interier_Design;
