import styles from "./styles.module.css";

function Policy_Text() {
  return (
    <div className={styles.container_block}>
      <button className={styles.container_btn}>Privacy Policy</button>

      <div className={styles.container_text_box}>
        <p className={styles.text_date}>Effective Date: 12.09.2024</p>
        <h1 className={styles.text_name}>
          We are committed to protecting your privacy. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information
          when you visit our website or engage our interior design services.
        </h1>
        <p className={styles.text}>
          Please read this privacy policy carefully. By using our services, you
          agree to the<br/> collection and use of information as outlined in this
          policy.
        </p>
      </div>
    </div>
  );
}

export default Policy_Text;
