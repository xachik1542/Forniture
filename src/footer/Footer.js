import styles from "./footer.module.css";

import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { Link } from "react-router-dom";
import Footer_Validation from "./Footer_Validation";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t, i18n } = useTranslation();
  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const locales = {
    cz: { title: t("footer.lang.czech") },
    en: { title: t("footer.lang.english") },
    am: { title: t("footer.lang.armenia") },
    ru: { title: t("footer.lang.russia") },
  };

  const handleChange = (locale) => {
    i18n.changeLanguage(locale);
    document.documentElement.lang = locale;
  };

  return (
    <div className={styles.footer_block}>
      <div className={styles.footer_one_box}>
        <div className={styles.footer_text_box}>
          <h1>{t("footer.title")}</h1>
          <div className={styles.footer_icon_box}>
            <Link
              to={"https://www.whatsapp.com/"}
              target="_blank"
              className={styles.footer_icon}
            >
              <svg
                className={styles.icon}
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M27.3083 13.2135C26.855 5.48018 19.8283 -0.479807 11.735 0.853527C6.16168 1.77353 1.69503 6.2935 0.828359 11.8668C0.321692 15.0935 0.988388 18.1468 2.44172 20.6668L1.25504 25.0802C0.988369 26.0802 1.90834 26.9868 2.89501 26.7068L7.24169 25.5068C9.21502 26.6668 11.5217 27.3335 13.9884 27.3335C21.5084 27.3335 27.7483 20.7068 27.3083 13.2135ZM20.5084 18.9602C20.3884 19.2002 20.2417 19.4269 20.055 19.6402C19.7217 20.0002 19.3617 20.2668 18.9617 20.4268C18.5617 20.6002 18.1217 20.6802 17.655 20.6802C16.975 20.6802 16.2417 20.5202 15.4817 20.1869C14.7083 19.8535 13.9484 19.4135 13.1884 18.8668C12.4151 18.3068 11.695 17.6802 11.0017 17.0002C10.3084 16.3068 9.695 15.5735 9.135 14.8135C8.58833 14.0535 8.14836 13.2935 7.82836 12.5335C7.50836 11.7735 7.34838 11.0402 7.34838 10.3469C7.34838 9.89352 7.42837 9.45352 7.58837 9.05352C7.74837 8.64018 8.00172 8.26686 8.36172 7.93352C8.78839 7.50686 9.25503 7.30685 9.74836 7.30685C9.93503 7.30685 10.1217 7.34685 10.295 7.42685C10.4683 7.50685 10.6284 7.62685 10.7484 7.80018L12.295 9.98683C12.415 10.1602 12.5083 10.3068 12.5617 10.4535C12.6283 10.6002 12.655 10.7335 12.655 10.8668C12.655 11.0268 12.6017 11.1869 12.5084 11.3469C12.415 11.5069 12.295 11.6668 12.135 11.8268L11.6283 12.3602C11.5483 12.4402 11.5217 12.5202 11.5217 12.6268C11.5217 12.6802 11.535 12.7335 11.5483 12.7868C11.575 12.8402 11.5884 12.8802 11.6017 12.9202C11.7217 13.1468 11.935 13.4268 12.2283 13.7735C12.535 14.1202 12.8551 14.4802 13.2017 14.8268C13.5617 15.1868 13.9084 15.5068 14.2684 15.8135C14.615 16.1068 14.9083 16.3068 15.135 16.4268C15.175 16.4402 15.215 16.4668 15.255 16.4802C15.3084 16.5068 15.3617 16.5068 15.4284 16.5068C15.5484 16.5068 15.6284 16.4669 15.7084 16.3869L16.215 15.8802C16.3883 15.7068 16.5484 15.5868 16.6951 15.5068C16.8551 15.4135 17.0017 15.3602 17.175 15.3602C17.3084 15.3602 17.4417 15.3868 17.5884 15.4535C17.735 15.5202 17.895 15.6002 18.055 15.7202L20.2684 17.2935C20.4417 17.4135 20.5617 17.5602 20.6417 17.7202C20.7083 17.8935 20.7484 18.0535 20.7484 18.2402C20.6684 18.4668 20.615 18.7202 20.5084 18.9602Z" />
              </svg>
            </Link>
            <Link
              to={"https://www.instagram.com/"}
              target="_blank"
              className={styles.footer_icon}
            >
              <svg
                className={styles.icon}
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_136_7117)">
                  <path
                    d="M23.0946 1.80957H8.90392C4.98528 1.80957 1.80859 4.98626 1.80859 8.9049V23.0956C1.80859 27.0142 4.98528 30.1909 8.90392 30.1909H23.0946C27.0132 30.1909 30.1899 27.0142 30.1899 23.0956V8.9049C30.1899 4.98626 27.0132 1.80957 23.0946 1.80957Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21.6779 15.1063C21.853 16.2874 21.6513 17.4935 21.1014 18.5533C20.5515 19.613 19.6814 20.4724 18.615 21.0092C17.5485 21.546 16.34 21.7328 15.1612 21.5431C13.9824 21.3535 12.8935 20.7969 12.0493 19.9527C11.205 19.1085 10.6485 18.0195 10.4588 16.8408C10.2691 15.662 10.456 14.4534 10.9928 13.387C11.5295 12.3205 12.3889 11.4505 13.4487 10.9006C14.5084 10.3507 15.7146 10.149 16.8956 10.3241C18.1003 10.5027 19.2156 11.0641 20.0767 11.9252C20.9379 12.7864 21.4992 13.9017 21.6779 15.1063Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="23.5" cy="8.5" r="1.5" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_136_7117">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
            <Link
              to={"https://www.flaticon.com/ru/"}
              target="_blank"
              className={styles.footer_icon}
            >
              <svg
                className={styles.icon}
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.174 27.8935C21.214 28.1068 21.0939 28.3335 20.8939 28.4135C19.3873 29.0135 17.734 29.3335 16.0273 29.3335C13.0806 29.3335 10.3606 28.3868 8.16061 26.7602C7.97394 26.6268 7.92065 26.3601 8.04065 26.1601C8.77398 24.8535 11.6406 20.6535 17.9739 18.3068C18.2139 18.2135 18.4806 18.3335 18.5606 18.5735C20.1473 22.8268 20.894 26.4268 21.174 27.8935Z"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M29.0916 18.52C28.4783 21.8 26.6382 24.6533 24.0649 26.6C23.7849 26.8133 23.3849 26.6533 23.3182 26.3199C23.0382 24.8799 22.3582 21.7733 21.0515 18.08C20.9582 17.8 21.1449 17.4933 21.4383 17.4533C24.7583 17.0533 27.6649 17.6933 28.7583 17.9866C28.9849 18.0666 29.1316 18.2933 29.0916 18.52Z"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M28.7857 15.7598C27.4257 15.5198 23.959 15.0131 20.4123 15.3998C20.199 15.4264 20.0123 15.3064 19.919 15.1064C19.8657 14.9864 19.8257 14.8664 19.7723 14.7464C19.559 14.2531 19.3323 13.7465 19.1057 13.2531C18.9857 13.0131 19.1057 12.7198 19.3457 12.6131C23.079 10.9998 25.159 8.91977 25.9723 7.98644C26.1723 7.75977 26.519 7.77313 26.7057 8.01313C28.239 10.0531 29.1856 12.5464 29.3323 15.2398C29.3456 15.5731 29.079 15.8131 28.7857 15.7598Z"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24.5866 6.3866C23.8933 7.2266 21.9466 9.22657 18.2533 10.6932C18.0399 10.7866 17.7866 10.6932 17.6666 10.4799C15.9599 7.38657 14.1466 4.78657 13.3066 3.61324C13.1066 3.33324 13.2666 2.93326 13.6 2.87992C14.3733 2.74659 15.1866 2.67993 16.0133 2.67993C19.24 2.67993 22.2133 3.82658 24.52 5.74658C24.72 5.89325 24.7466 6.1866 24.5866 6.3866Z"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.6943 11.7865C9.64101 13.0531 5.17428 13.2265 3.54761 13.2531C3.24094 13.2531 3.01432 12.9598 3.09432 12.6665C4.05432 8.93314 6.6143 5.81315 9.98763 4.09315C10.1876 3.98648 10.441 4.05313 10.5743 4.23979C11.2676 5.19979 13.1476 7.90648 14.9876 11.0931C15.1343 11.3598 15.001 11.7065 14.6943 11.7865Z"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.2263 15.4669C17.3463 15.7202 17.1997 16.0269 16.933 16.1202C11.0264 18.0269 7.49302 22.7602 6.42635 24.3869C6.25302 24.6536 5.87969 24.6669 5.67969 24.4269C3.81302 22.1336 2.67969 19.5069 2.67969 16.3202V16.0802C2.67969 15.8136 2.893 15.6002 3.15967 15.6135C4.83967 15.6802 10.3197 15.4535 16.013 13.8135C16.2264 13.7469 16.4663 13.8536 16.5597 14.0536C16.7863 14.5202 17.013 14.9869 17.2263 15.4669Z"
                />
              </svg>
            </Link>
            <Link
              to={"https://www.flaticon.com/ru/"}
              target="_blank"
              className={styles.footer_icon}
            >
              <svg
                className={styles.icon}
                width="32"
                height="21"
                viewBox="0 0 32 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M29.3333 3.33366H20V0.666992H29.3333V3.33366ZM31.6347 16.667C31.0453 18.3963 28.9293 20.667 24.8333 20.667C20.7347 20.667 17.4147 18.3617 17.4147 13.1003C17.4147 7.88699 20.5147 5.20699 24.7027 5.20699C28.812 5.20699 31.3213 7.58299 31.8693 11.1083C31.9733 11.783 32.0147 12.6923 31.996 13.9617H21.2933C21.4667 18.243 25.9373 18.3777 27.4107 16.667H31.6347ZM21.3867 11.3337H28.0067C27.8667 9.27099 26.492 8.37499 24.704 8.37499C22.7493 8.37499 21.668 9.39899 21.3867 11.3337ZM8.62133 20.651H0V0.694992H9.27067C16.572 0.802992 16.7107 7.95366 12.8973 9.90299C17.512 11.583 17.6667 20.651 8.62133 20.651ZM4 8.66699H8.77867C12.1227 8.66699 12.6533 4.66699 8.36267 4.66699H4V8.66699ZM8.52133 12.667H4V16.6883H8.45467C12.528 16.6883 12.2787 12.667 8.52133 12.667Z" />
              </svg>
            </Link>
          </div>
        </div>
        <Footer_Validation />
      </div>

      <div className={styles.footer_two_box}>
        <Link to={"/"} className={styles.media_logo_footer}>
          logo
        </Link>
        <div className={styles.footer_for_armenia}>
          <p>{t("footer.forarmenia.title")}</p>
          <p>+374 12-34-56-78</p>
          <p>example@email.com</p>
          <p>{t("footer.forarmenia.text")}</p>
        </div>

        <div className={styles.footer_for_czech}>
          <p>{t("footer.forczech.title")}</p>
          <p>+420 123-4567-90</p>
          <p>example@email.com</p>
          <p>{t("footer.forczech.text")}</p>
        </div>

        <div className={styles.footer_explore_box}>
          <p>{t("footer.menu.title")}</p>
          <Link to={"/"} className={styles.media_none}>
            {t("footer.menu.home")}
          </Link>
          <Link to={"/portfolio?page=1"}>{t("footer.menu.portfolio")}</Link>
          <Link to={"/service"} className={styles.media_none}>
            {t("footer.menu.services")}
          </Link>
          <Link to={"/work"} className={styles.media_none}>
            {t("footer.menu.work")}
          </Link>
          <Link to={"/about"}>{t("footer.menu.about")}</Link>
          <Link to={"/blog?page=1"}>{t("footer.menu.blog")}</Link>
        </div>

        <div className={styles.footer_services_box}>
          <p>{t("footer.services.title")}</p>
          <Link to={"/service/page/1"}>{t("footer.services.commerical")}</Link>
          <Link to={"/service/page/2"}>{t("footer.services.residential")}</Link>
          <Link to={"/service/page/3"}>
            {t("footer.services.architechtural")}
          </Link>
        </div>

        <div className={styles.footer_languages}>
          <p>{t("footer.lang.title")}</p>
          {Object.keys(locales).map((locale) => (
            <p key={locale} onClick={() => handleChange(locale)}>
              {locales[locale].title}
            </p>
          ))}
        </div>
      </div>

      <div className={styles.box_top} onClick={handleTop}>
        <MdOutlineKeyboardDoubleArrowUp className={styles.arrow_top} />
      </div>
    </div>
  );
}

export default Footer;
