import styles from "./style.module.css";

function Inform() {
  return (
    <div className={styles.inform_block}>
      <div className={styles.using_box}>
        <h1 className={styles.using_name}>Using<br/> Eco-Materials</h1>
        <p className={styles.using_text}>
          co-friendly materials bring sustainability and health benefits to your
          space. We prioritize natural, renewable, and low-emission materials
          like reclaimed wood, bamboo, recycled metals, and non-toxic finishes,
          ensuring designs that are both beautiful and environmentally
          responsible.
        </p>
      </div>
      <div className={styles.personal_box}>
        <h1 className={styles.personal_name}>Personalized<br/> Solutions</h1>
        <p className={styles.personal_text}>
          Our team takes into account all aspects of the space, client
          preferences, and style to create designs that emphasize individuality
          and comfort. Each solution is tailored to specific needs, ensuring an
          interior that will bring joy for years to come.
        </p>
      </div>
      <div className={styles.servis_one}>
        <h1 className={styles.servis_one_name}>Full-Service<br/> Process</h1>
        <p className={styles.servis_one_text}>
          Our team takes into account all aspects of the space, client
          preferences, and style to create designs that emphasize individuality
          and comfort. Each solution is tailored to specific needs, ensuring an
          interior that will bring joy for years to come.
        </p>
      </div>
      <div className={styles.servis_two}>
        <h1 className={styles.servis_two_name}>Full-Service<br/> Process</h1>
        <p className={styles.servis_two_text}>
          Our team takes into account all aspects of the space, client
          preferences, and style to create designs that emphasize individuality
          and comfort. Each solution is tailored to specific needs, ensuring an
          interior that will bring joy for years to come.
        </p>
      </div>
    </div>
  );
}

export default Inform;
