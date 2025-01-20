import styles from "./style.module.css";
import { useForm } from "react-hook-form";
import { IoIosClose } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import {
  Name_Validatation,
  Phone_Validation,
  Email_Validation,
  Textarea_Validation,
} from "../validate/Validatation";
function GetTouch({ open, setOpen }) {
  if (open == true) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "scroll";
  }

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
    <AnimatePresence>
      {open && (
        <motion.div
          className={styles.reg_block}
          animate={{ top: window.innerHeight / 2 }}
          exit={{ top: 1000 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.image_block}></div>

          <div className={styles.contact_reg}>
            <IoIosClose
              className={styles.close_icon}
              onClick={() => setOpen(false)}
            />
            <button>Contact us</button>
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>

            <form
              className={styles.form_block}
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default GetTouch;
