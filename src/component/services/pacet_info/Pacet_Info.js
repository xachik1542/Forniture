import styles from "./style.module.css";
import {
  Email_Validation,
  Name_Validatation,
  Phone_Validation,
  Textarea_Validation,
} from "../../../validate/Validatation";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

function Pacet_Info({ pacet, setPacet, setOpen }) {
  const [t] = useTranslation();
  const [call, setCall] = useState(false);
  const [massage, setMassage] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleCallShow = () => {
    setCall(!call);
    setMassage(false);
  };

  const handleMassageShow = () => {
    setMassage(!massage);
    setCall(false);
  };

  const onSubmit = (e) => {
    reset();
  };

  const handleClose = () => {
    setPacet([]);
    setOpen(false);
  };

  return (
    <div className={styles.container_block}>
      <div className={styles.pacet_block}>
        {pacet.map((item) => {
          return (
            <div key={item.id} className={styles.pacet_box}>
              <MdOutlineClose
                onClick={handleClose}
                className={styles.icon_close}
              />
              <div className={styles.pacet_text_block}>
                <img src={item.img} />
                <h1 className={styles.pacet_title}>{t(item.title)}</h1>
                <p className={styles.pacet_description}>
                  {t(item.description)}
                </p>

                <ul className={styles.pacet_ul_box}>
                  {item.info.map((el) => {
                    return <li key={el.id}>{t(el.name)}</li>;
                  })}
                </ul>
              </div>

              <div className={styles.container_reg}>
                <div className={styles.container_reg_title}>
                  <button className={styles.reg_btn}>
                    {t("services.pacet.contact.btnname")}
                  </button>
                  <p>{t("services.pacet.contact.text")}</p>
                </div>

                <form
                  className={styles.container_form_box}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className={styles.call_and_massage}>
                    <div
                      className={styles.call_box}
                      style={{ backgroundColor: call ? "#764AF1" : "white" }}
                    >
                      <input
                        type="radio"
                        checked={call}
                        onClick={handleCallShow}
                      />
                      <span
                        className={styles.call_span}
                        style={{ color: call ? "white" : "#2E2E2E" }}
                      >
                        {t("services.pacet.contact.call")}
                      </span>
                    </div>
                    <div
                      className={styles.massage_box}
                      style={{ backgroundColor: massage ? "#764AF1" : "white" }}
                    >
                      <input
                        type="radio"
                        checked={massage}
                        onClick={handleMassageShow}
                      />
                      <span
                        className={styles.message_span}
                        style={{ color: massage ? "white" : "#2E2E2E" }}
                      >
                        {t("services.pacet.contact.message")}
                      </span>
                    </div>
                  </div>

                  <div className={styles.input_box}>
                    <input
                      className={styles.name_inp}
                      type="text"
                      placeholder="Name"
                      {...register("name", Name_Validatation)}
                    />
                    <p className={styles.errors_message}>
                      {errors?.name?.message}
                    </p>
                  </div>

                  {call ? (
                    <div className={styles.input_box}>
                      <input
                        type="tel"
                        className={styles.tel_inp}
                        placeholder="Phone"
                        {...register("phone", Phone_Validation)}
                      />
                      <p className={styles.errors_message}>
                        {errors?.phone?.message}
                      </p>
                    </div>
                  ) : null}

                  {massage ? (
                    <div className={styles.input_box}>
                      <input
                        type="text"
                        className={styles.email_inp}
                        placeholder="Email"
                        {...register("email", Email_Validation)}
                      />
                      <p className={styles.errors_message}>
                        {errors?.email?.message}
                      </p>
                    </div>
                  ) : null}

                  <textarea
                    className={styles.textarea_text}
                    type="text"
                    placeholder="Message"
                    {...register("message", Textarea_Validation)}
                  ></textarea>

                  <button className={styles.button_submit}>
                    {t("services.pacet.contact.submit")}
                  </button>
                </form>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Pacet_Info;
