import { Link } from "react-router-dom";
import GetTouch from "../../../get_in_touch/GetTouch";
import styles from "./style.module.css";

import interier_img from "../../../assets/img/home_image/interier_img.png";
import { MdArrowOutward } from "react-icons/md";
import { useState } from "react";

function Interier_Design() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <div className={styles.interier_design_block}>
      <div className={styles.interier_box}>
        <div className={styles.interier_text_box}>
          <div className={styles.interier_text_title}>
            <h1>YOUR INNOVATIVE INTERIOR DESIGN</h1>
          </div>
          <div className={styles.interier_text_paragraf}>
            <p>
              Lorem ipsum dolor sit amet
              <br className={styles.s_br} /> consectetur. Integer sit vel
              quisque
              <br className={styles.s_br} />
              laoreet lacus at. Adipiscing lacinia sit
              <br className={styles.s_br} /> platea a nunc libero. In ut
              adipiscing urna
              <br className={styles.s_br} /> pellentesque amet varius posuere
              quis.
            </p>
          </div>
        </div>

        <div className={styles.interier_link_box}>
          <Link to={"/portfolio"} className={styles.portfolio_link}>
            <span>Portfolio</span>
            <MdArrowOutward className={styles.interier_arrow} />
          </Link>

          <div className={styles.interier_link_touch} onClick={handleOpen}>
            <span>Get In Touch</span>
            <MdArrowOutward className={styles.interier_arrow} />
          </div>
        </div>
      </div>

      <div className={styles.interier_image}>
        <img src={interier_img} />
      </div>

      <GetTouch open={open} setOpen={setOpen} />
    </div>
  );
}

export default Interier_Design;
