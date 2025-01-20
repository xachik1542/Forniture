import styles from "./style.module.css";
import design_img from '../../../assets/img/contact/design.png';



function Registration() {
  return (
    <div className={styles.reg_block}>
     
     <div className={styles.text_img_box}>
      
        <div className={styles.inform_box}>
          <button>Contacts</button>

          <div className={styles.inform_pair_box}>
            <div className={styles.pair_one}>
              <h1>for Armenia</h1>
              <p>+374 12-34-56-78</p>
              <p>example@email.com</p>
              <p>Yerevan, Armenia</p>
            </div>
            <div className={styles.pair_two}>
              <h1>for Czech Republic</h1>
              <p>+420 123-4567-90</p>
              <p>example@email.com</p>
              <p>Prague, Czech Republic</p>
            </div>
          </div>
          
        </div>

       <img src={design_img} className={styles.design_img}></img>
     </div>

      <div className={styles.contact_reg}>
        <button>Contact us</button>
        <h1>Lorem ipsum dolor sit<br/> amet consectetur.</h1>

        <form action="#" className={styles.reg_form}>
            <input type="text" placeholder="Name" className={styles.reg_name}/>
            <input type="tel" placeholder="Phone" className={styles.reg_tell}/>
            <input type="email" placeholder="Email" className={styles.reg_email}/>
            <textarea type="text" placeholder="Massage" className={styles.reg_massage}></textarea>
            <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
