import styles from "./style.module.css";

import { FaQuoteLeft } from "react-icons/fa";
import review_img from "../../../assets/img/home_image/review_img.png";
import { useTranslation } from "react-i18next";

function Reviews() {
  const [t] = useTranslation();

  const review = [
    {
      id: 1,
      img: review_img,
      description: t("home.reviews.one.description"),
      name: t("home.reviews.one.name"),
      work: t("home.reviews.one.work"),
    },
    {
      id: 2,
      img: review_img,
      description: t("home.reviews.two.description"),
      name: t("home.reviews.two.name"),
      work: t("home.reviews.two.work"),
    },
    {
      id: 3,
      img: review_img,
      description: t("home.reviews.one.description"),
      name: t("home.reviews.three.name"),
      work: t("home.reviews.three.work"),
    },
    {
      id: 4,
      img: review_img,
      description: t("home.reviews.one.description"),
      name: t("home.reviews.four.name"),
      work: t("home.reviews.four.work"),
    },
    {
      id: 5,
      img: review_img,
      description: t("home.reviews.one.description"),
      name: t("home.reviews.five.name"),
      work: t("home.reviews.five.work"),
    },
    {
      id: 6,
      img: review_img,
      description: t("home.reviews.one.description"),
      name: t("home.reviews.six.name"),
      work: t("home.reviews.six.work"),
    },
    {
      id: 7,
      img: review_img,
      description: t("home.reviews.one.description"),
      name: t("home.reviews.seven.name"),
      work: t("home.reviews.seven.work"),
    },
  ];

  return (
    <div className={styles.review_block}>
      <button>{t("home.reviews.namebox")}</button>

      <div className={styles.many_blocks}>
        {review.map((item) => {
          return (
            <div key={item.id} className={styles.review_box}>
              <div className={styles.review_text_box}>
                <FaQuoteLeft className={styles.review_icon} />
                <p>{item.description}</p>
              </div>

              <div className={styles.small_box}>
                <img className={styles.small_img} src={item.img} />
                <h2 className={styles.small_name}>
                  {item.name} <br />
                  <p className={styles.small_text}>{item.work}</p>
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Reviews;
