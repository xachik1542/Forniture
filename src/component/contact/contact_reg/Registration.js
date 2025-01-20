import styles from "./style.module.css";
import design_img from "../../../assets/img/contact/design.png";
import { useForm } from "react-hook-form";
import {
  Name_Validatation,
  Phone_Validation,
  Email_Validation,
  Textarea_Validation,
} from "../../../validate/Validatation";

function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onChange" });

  const onSubmit = (e) => {
    console.log(e);
    reset();
  };
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
        <h1>
          Lorem ipsum dolor sit
          <br /> amet consectetur.
        </h1>

        <form
          action="#"
          className={styles.reg_form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={styles.name_block}>
            <input
              type="text"
              placeholder="Name"
              className={styles.inp}
              {...register("name", Name_Validatation)}
            />
            <p className={styles.error_message}>{errors?.name?.message}</p>
          </div>
          <div className={styles.number_block}>
            <input
              type="tel"
              placeholder="Phone"
              className={styles.inp}
              {...register("phone", Phone_Validation)}
            />
            <p className={styles.error_message}>{errors?.phone?.message}</p>
          </div>

          <div className={styles.email_block}>
            <input
              type="email"
              placeholder="Email"
              className={styles.inp}
              {...register("email", Email_Validation)}
            />
            <p className={styles.error_message}>{errors?.email?.message}</p>
          </div>

          <div className={styles.textarea_block}>
            <textarea
              type="text"
              placeholder="Massage"
              className={styles.textarea_inp}
              {...register("message", Textarea_Validation)}
            ></textarea>
          </div>
          <input type="Submit" className={styles.submit_inp}></input>
        </form>
      </div>
    </div>
  );
}

export default Registration;
