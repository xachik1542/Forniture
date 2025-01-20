import styles from "./style.module.css";

function Karta() {
  return (
    <div className={styles.karta_block}>
      <iframe
        className={styles.map}
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d84569.62912446442!2d14.43551170624312!3d50.076236850445994!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sam!4v1730053741741!5m2!1sen!2sam"
        width="1040px"
        height="100%"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className={styles.img_block}></div>
    </div>
  );
}

export default Karta;
