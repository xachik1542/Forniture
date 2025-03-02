import styles from "./style.module.css";
import * as React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import GetTouch from "../../../get_in_touch/GetTouch";

import interier_img from "../../../assets/img/home_image/interier_img.png";
import { MdArrowOutward } from "react-icons/md";
import { Dialog } from "@mui/material";
import Slide from "@mui/material/Slide";
import { useTranslation } from "react-i18next";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Interier_Design() {
  const [t] = useTranslation();
  const [touchOpen, setTouchOpen] = useState(false);

  return (
    <div className={styles.interier_design_block}>
      <div className={styles.interier_box}>
        <div className={styles.interier_text_box}>
          <div className={styles.interier_text_title}>
            <h1>{t("home.interier_design.title")}</h1>
          </div>
          <div className={styles.interier_text_paragraf}>
            <p>{t("home.interier_design.text")}</p>
          </div>
        </div>

        <div className={styles.interier_link_box}>
          <Link to={"/portfolio?page=1"} className={styles.portfolio_link}>
            <span>{t("home.interier_design.linkportfolio")}</span>
            <MdArrowOutward className={styles.interier_arrow} />
          </Link>

          <div
            className={styles.interier_link_touch}
            onClick={() => setTouchOpen(true)}
          >
            <span>{t("home.interier_design.touch")}</span>
            <MdArrowOutward className={styles.interier_arrow} />
          </div>
        </div>
      </div>

      <div className={styles.interier_image}>
        <img src={interier_img} />
      </div>

      <React.Fragment>
        <Dialog
          open={touchOpen}
          maxWidth={false}
          TransitionComponent={Transition}
          keepMounted
          aria-describedby="alert-dialog-slide-description"
          PaperProps={{ sx: { borderRadius: "24px", overflow: "hidden" } }}
        >
          <GetTouch setTouchOpen={setTouchOpen} />
        </Dialog>
      </React.Fragment>
    </div>
  );
}

export default Interier_Design;
