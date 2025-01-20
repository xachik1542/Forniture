import styles from "./style.module.css";

import { IoIosClose } from "react-icons/io";

function Contact({setContact}) {


  const handleClose = () => {
    setContact(false)
  }

  return (
    <div className={styles.reg_block}>
      <div className={styles.image_block}></div>

      <div className={styles.contact_reg}>
      <IoIosClose className={styles.close_icon} onClick={handleClose}/>
        <button>Contact us</button>
        <h1>
          Lorem ipsum dolor sit amet consectetur.</h1>

        <form action="#" className={styles.reg_form}>
          <input type="text" placeholder="Name" className={styles.reg_name} />
          <input type="tel" placeholder="Phone" className={styles.reg_tell} />
          <input
            type="email"
            placeholder="Email"
            className={styles.reg_email}
          />
          <textarea
            type="text"
            placeholder="Massage"
            className={styles.reg_massage}
          ></textarea>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
