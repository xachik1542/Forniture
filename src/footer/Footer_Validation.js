import {
  Email_Validation,
  Name_Validatation,
  Phone_Validation,
  Textarea_Validation,
} from "../validate/Validatation";
import styles from "./footer_validation.module.css";
import { useForm } from "react-hook-form";

function Footer_Validation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (e) => {
    console.log(e);
    reset();
  };

  return (
    <form
      className={styles.form_block}
      action="#"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={styles.name_inp_box}>
        <input
          className={styles.inp}
          type="text"
          placeholder="Name"
          {...register("name", Name_Validatation)}
        />
        <p className={styles.error_message}>{errors?.name?.message}</p>
      </div>

      <div className={styles.tel_inp_box}>
        <input
          className={styles.inp}
          type="tel"
          placeholder="Phone"
          {...register("phone", Phone_Validation)}
        />
        <p className={styles.error_message}>{errors?.phone?.message}</p>
      </div>
      <div className={styles.email_inp_box}>
        <input
          className={styles.inp}
          type="email"
          placeholder="Email"
          {...register("email", Email_Validation)}
        />
        <p className={styles.error_message}>{errors?.email?.message}</p>
      </div>

      <div className={styles.textarea_box}>
        <textarea
          className={styles.textarea_inp}
          type="text"
          placeholder="Message"
          {...register("message", Textarea_Validation)}
        />
      </div>
      <p className={styles.form_one_text}>
        By clicking “Submit” you agree to the procedure for processing
        <br /> personal data
      </p>
      <button className={styles.submit_btn}>Submit</button>
    </form>
  );
}

export default Footer_Validation;
