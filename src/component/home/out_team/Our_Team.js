import styles from "./style.module.css";
import { team } from "../../../json/about/about.inform";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

function Our_Team() {
  const [t] = useTranslation();
  const [mouseId, setMouseId] = useState(0);

  return (
    <div className={styles.team_block}>
      <button className={styles.team_btn}>{t("home.team.btnname")}</button>
      <div className={styles.parent_block}>
        {team.map((item) => {
          if (item.id == 1 || item.id == 2 || item.id == 3 || item.id == 4) {
            return (
              <div
                key={item.id}
                className={styles.person_box}
                onMouseOver={() => setMouseId(item.id)}
                onMouseLeave={() => setMouseId(0)}
              >
                <img src={item.img} className={styles.team_img} />
                <AnimatePresence>
                  {item.id == mouseId ? (
                    <motion.div
                      className={styles.mouse_box}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, duraction: 0.7 }}
                      exit={{ opacity: 0, duraction: 0.7 }}
                    >
                      <motion.h1
                        className={styles.mouse_name}
                        initial={{ y: 50 }}
                        animate={{ y: 0, duraction: 0.7 }}
                        exit={{ y: 50, duraction: 0.7 }}
                      >
                        {t(item.name)}
                      </motion.h1>

                      <motion.p
                        className={styles.mouse_title}
                        initial={{ y: 50 }}
                        animate={{ y: 0, duraction: 0.7 }}
                        exit={{ y: 50, duraction: 0.7 }}
                      >
                        {t(item.description)}
                      </motion.p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          }
        })}
      </div>
      <Link to={"/about"} className={styles.team_link}>
        {t("home.team.linkbtn")}
      </Link>
    </div>
  );
}

export default Our_Team;
