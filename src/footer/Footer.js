import styles from "./footer.module.css";

import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { IoIosBasketball } from "react-icons/io";
import { FaBehance } from "react-icons/fa6";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { Link } from "react-router-dom";
import Footer_Validation from "./Footer_Validation";

function Footer() {
  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className={styles.footer_block}>
      <div className={styles.footer_one_box}>
        <div className={styles.footer_text_box}>
          <h1>
            Let’s DISCUSS
            <br /> YOUR PROJECT
          </h1>
          <div className={styles.footer_icon_box}>
            <div className={styles.footer_icon}>
              <IoLogoWhatsapp className={styles.icon} />
            </div>
            <div className={styles.footer_icon}>
              <AiFillInstagram className={styles.icon} />
            </div>
            <div className={styles.footer_icon}>
              <IoIosBasketball className={styles.icon} />
            </div>
            <div className={styles.footer_icon}>
              <FaBehance className={styles.icon} />
            </div>
          </div>
        </div>
        <Footer_Validation />
      </div>

      <div className={styles.footer_two_box}>
        <h1 className={styles.media_logo_footer}>logo</h1>
        <div className={styles.footer_for_armenia}>
          <p>for Armenia</p>
          <p>+374 12-34-56-78</p>
          <p>example@email.com</p>
          <p>Yerevan, Armenia</p>
        </div>

        <div className={styles.footer_for_czech}>
          <p>for Czech Republic</p>
          <p>+420 123-4567-90</p>
          <p>example@email.com</p>
          <p>Prague, Czech Republic</p>
        </div>

        <div className={styles.footer_explore_box}>
          <p>Explore in site</p>
          <Link to={"/"} className={styles.media_none}>
            Home
          </Link>
          <Link to={"/portfolio"}>Portfolio</Link>
          <Link to={"/services"} className={styles.media_none}>
            Services & Packages
          </Link>
          <Link to={"/work"} className={styles.media_none}>
            Work Stages
          </Link>
          <Link to={"/about"}>About Us</Link>
          <Link to={"/blog"}>Our Blog</Link>
        </div>

        <div className={styles.footer_services_box}>
          <p>Services</p>
          <Link>Commerical</Link>
          <Link>Residential</Link>
          <Link>Architechtural</Link>
        </div>

        <div className={styles.footer_languages}>
          <p>Languages</p>
          <p>Czech</p>
          <p>English</p>
          {/* <p onClick={LanguageArmenian}>Armenian</p> */}
          <p>Rushian</p>
        </div>
      </div>

      <div className={styles.box_top} onClick={handleTop}>
        <MdOutlineKeyboardDoubleArrowUp className={styles.arrow_top} />
      </div>
    </div>
  );
}

export default Footer;
