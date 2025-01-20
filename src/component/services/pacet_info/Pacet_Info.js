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
import { AnimatePresence, motion } from "framer-motion";

function Pacet_Info({ pacet, setPacet }) {
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

  const handleClose = () => {
    setPacet([]);
  };

  const onSubmit = (e) => {
    console.log(e);
    reset();
  };

  console.log(window.outerHeight);
  
  
  return (
    <AnimatePresence>
      {pacet.length > 0 && (
        <motion.div
          className={styles.container_block}
          animate={{ top: window.outerHeight / 2 }}
          exit={{ top: 1000 }}
          transition={{ duration: 0.5 }}
        >
          {pacet.map((item) => {
            return (
              <div key={item.id} className={styles.pacet_block}>
                <div className={styles.pacet_text_block}>
                  <MdOutlineClose
                    onClick={handleClose}
                    className={styles.media_close}
                  />
                  <img src={item.img} />
                  <h1 className={styles.pacet_title}>{item.title}</h1>
                  <p className={styles.pacet_description}>{item.description}</p>

                  <ul className={styles.pacet_ul_box}>
                    {item.info.map((el) => {
                      return <li key={el.id}>{el.name}</li>;
                    })}
                  </ul>
                </div>

                <div className={styles.container_reg}>
                  <MdOutlineClose
                    onClick={handleClose}
                    className={styles.close}
                  />
                  <div className={styles.container_reg_title}>
                    <button className={styles.reg_btn}>Contact Us</button>
                    <p>Select how do you want us to contact you</p>
                    <h2 className={styles.media_text_form}>
                      Let’s contact and
                      <br /> discuss your project
                    </h2>
                  </div>

                  <form
                    className={styles.container_form_box}
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className={styles.call_and_massage}>
                      <div className={styles.call_box}>
                        <input
                          type="radio"
                          checked={call}
                          onClick={handleCallShow}
                        />
                      </div>
                      <div className={styles.massage_box}>
                        <input
                          type="radio"
                          checked={massage}
                          onClick={handleMassageShow}
                        />
                      </div>
                    </div>

                    <div>
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
                      <div>
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
                      <div>
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

                    <input
                      className={styles.submit_inp}
                      type="submit"
                      value={"Submit"}
                    ></input>
                  </form>
                </div>
              </div>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Pacet_Info;
