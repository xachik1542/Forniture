import { useTranslation } from "react-i18next";
import styles from "./style.module.css";

function Inform() {
  const [t] = useTranslation();
  return (
    <div className={styles.container_block}>
      <div className={styles.container_title_box}>
        <b className={styles.bolt_text}>{t("policy.inform.title.bolt")}</b>
        <p>{t("policy.inform.title.two")}</p>
        <p>{t("policy.inform.title.three")}</p>
        <p>{t("policy.inform.title.four")}</p>
        <p>{t("policy.inform.title.five")}</p>
        <p>{t("policy.inform.title.six")}</p>
        <p>{t("policy.inform.title.seven")}</p>
        <p>{t("policy.inform.title.eight")}</p>
      </div>

      <div className={styles.container_big_inform}>
        <div className={styles.one_inform}>
          <h1 className={styles.inform_name}>{t("policy.inform.one.title")}</h1>
          <p className={styles.inform_text}>{t("policy.inform.one.text")}</p>

          <div className={styles.personal_box}>
            <ul className={styles.personal_ul}>
              <li>
                <span>{t("policy.inform.one.personal.one")}</span>
                {t("policy.inform.one.personal.two")}
              </li>
              <li>
                <span>{t("policy.inform.one.project.one")}</span>
                {t("policy.inform.one.project.two")}
              </li>
              <li>
                <span>{t("policy.inform.one.nonpersonal.one")}</span>
                {t("policy.inform.one.nonpersonal.two")}
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.two_inform}>
          <h1 className={styles.inform_name}>{t("policy.inform.two.title")}</h1>
          <p className={styles.inform_text}>{t("policy.inform.two.title")}</p>

          <div className={styles.personal_box}>
            <ul className={styles.personal_ul}>
              <li>
                <span>{t("policy.inform.two.service.one")}</span>
                {t("policy.inform.two.service.two")}
              </li>
              <li>
                <span>{t("policy.inform.two.customer.one")}</span>
                {t("policy.inform.two.customer.two")}
              </li>
              <li>
                <span>{t("policy.inform.two.personalization.one")}</span>
                {t("policy.inform.two.personalization.two")}
              </li>
              <li>
                <span>{t("policy.inform.two.marketing.one")}</span>
                {t("policy.inform.two.marketing.two")}
              </li>
              <li>
                <span>{t("policy.inform.two.improvement.one")}</span>
                {t("policy.inform.two.improvement.two")}
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.three_inform}>
          <h1 className={styles.inform_name}>
            {t("policy.inform.three.title")}
          </h1>
          <p className={styles.inform_text}>{t("policy.inform.three.text")}</p>

          <div className={styles.personal_box}>
            <ul className={styles.personal_ul}>
              <li>
                <span>{t("policy.inform.three.service.one")}</span>
                {t("policy.inform.three.service.two")}
              </li>
              <li>
                <span>{t("policy.inform.three.legal.one")}</span>
                {t("policy.inform.three.legal.two")}
              </li>
              <li>
                <span>{t("policy.inform.three.business.one")}</span>
                {t("policy.inform.three.business.two")}
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.four_inform}>
          <h1 className={styles.inform_name}>
            {t("policy.inform.four.title")}
          </h1>
          <p className={styles.inform_text}>{t("policy.inform.four.text")}</p>
        </div>

        <div className={styles.five_inform}>
          <h1 className={styles.inform_name}>
            {t("policy.inform.five.title")}
          </h1>
          <p className={styles.inform_text}>{t("policy.inform.five.text")}</p>
        </div>

        <div className={styles.six_inform}>
          <h1 className={styles.inform_name}>{t("policy.inform.six.title")}</h1>
          <p className={styles.inform_text}>{t("policy.inform.six.text")}</p>
        </div>

        <div className={styles.seven_inform}>
          <h1 className={styles.inform_name}>
            {t("policy.inform.seven.title")}
          </h1>
          <p className={styles.inform_text}>{t("policy.inform.seven.text")}</p>
        </div>

        <div className={styles.eight_inform}>
          <h1 className={styles.inform_name}>
            {t("policy.inform.eight.title")}
          </h1>
          <p className={styles.inform_text}>{t("policy.inform.eight.text")}</p>
        </div>

        <div className={styles.nine_inform}>
          <h1 className={styles.inform_name}>
            {t("policy.inform.contact.title")}
          </h1>
          <p className={styles.inform_text}>
            {t("policy.inform.contact.text")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Inform;
