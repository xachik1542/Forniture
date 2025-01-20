import styles from "./style.module.css";

import { FaQuoteLeft } from "react-icons/fa";
import review_img from "../../../assets/img/home_image/review_img.png";

function Reviews() {
  const review = [
    { id: 1, img: review_img, name: "Bella Maria", work: "Manager of Xvelt" },
    { id: 2, img: review_img, name: "Bella Maria", work: "Manager of Xvelt" },
    { id: 3, img: review_img, name: "Bella Maria", work: "Manager of Xvelt" },
    { id: 4, img: review_img, name: "Bella Maria", work: "Manager of Xvelt" },
    { id: 5, img: review_img, name: "Bella Maria", work: "Manager of Xvelt" },
    { id: 6, img: review_img, name: "Bella Maria", work: "Manager of Xvelt" },
    { id: 7, img: review_img, name: "Bella Maria", work: "Manager of Xvelt" },
    { id: 8, img: review_img, name: "Bella Maria", work: "Manager of Xvelt" },
  ];

  return (
    <div className={styles.review_block}>
      <button>Reviews</button>

      <div className={styles.many_blocks}>
        {review.map((item) => {
          return (
            <div key={item.id} className={styles.review_box}>
              <FaQuoteLeft className={styles.review_icon} />
              <p>
                Lorem ipsum dolor sit amet consectetur. Euismod commodo ut mus
                urna justo vel doler ipsum dolor sit amet justo vel. Lorem ipsum
                dolor sit amet consectetur. Euismod commodo ut mus urna justo
                vel doler ipsum dolor sit amet justo vel.
              </p>

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
