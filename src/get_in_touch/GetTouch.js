import styles from "./style.module.css";
import { useForm } from "react-hook-form";
import { IoIosClose } from "react-icons/io";
import {
  Name_Validatation,
  Phone_Validation,
  Email_Validation,
  Textarea_Validation,
} from "../validate/Validatation";
import { useTranslation } from "react-i18next";

function GetTouch({ setTouchOpen }) {
  
  const [t] = useTranslation();
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
      <div className={styles.image_block}></div>

      <div className={styles.contact_reg}>
        <IoIosClose
          className={styles.close_icon}
          onClick={() => setTouchOpen(false)}
        />
        <button>{t("gettouch.btnname")}</button>
        <h1>{t("gettouch.text")}</h1>

        <form className={styles.form_block} onSubmit={handleSubmit(onSubmit)}>
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
          <button className={styles.submit_btn}>{t("gettouch.submit")}</button>
        </form>
      </div>
    </div>
  );
}

export default GetTouch;
