import { useEffect, useState, useRef } from "react";
import styles from "./style.module.css";

import before_one from "../../../assets/img/home_image/before_one.png";
import after_one from "../../../assets/img/home_image/after_one.png";

import before_two from "../../../assets/img/home_image/before_two.png";
import after_two from "../../../assets/img/home_image/after_two.png";

import before_three from "../../../assets/img/home_image/before_three.png";
import after_three from "../../../assets/img/home_image/after_three.png";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useTranslation } from "react-i18next";

const images = [
  { id: 1, before: before_one, after: after_one },
  { id: 2, before: before_two, after: after_two },
  { id: 3, before: before_three, after: after_three },
];

function Before_After() {
  const [t] = useTranslation();
  const [draggingId, setDraggingId] = useState(null);
  const [dragPositions, setDragPositions] = useState({
    1: 50,
    2: 50,
    3: 50,
  });
  const containerRef = useRef(null);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (draggingId !== null && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        console.log(rect);

        const relativeX = e.clientX - rect.left;

        let newDragPosition = (relativeX / rect.width) * 100;

        newDragPosition = Math.min(Math.max(newDragPosition, 10), 90);

        setDragPositions((prevPositions) => ({
          ...prevPositions,
          [draggingId]: newDragPosition,
        }));
      }
    };

    const handleMouseUp = () => {
      setDraggingId(null);
    };

    if (draggingId !== null) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [draggingId]);

  return (
    <div className={styles.befor_after_block} ref={containerRef}>
      {images.map((item) => {
        const dragPosition = dragPositions[item.id];
        const beforeSize = dragPosition;
        const afterSize = 100 - dragPosition;

        return (
          <div key={item.id} className={styles.images_box}>
            <div
              className={styles.before_img}
              style={{ width: `${beforeSize}%` }}
            >
              <img src={item.before} className={styles.test_img} />
            </div>
            <div
              className={styles.after_img}
              style={{ width: `${afterSize}%` }}
            >
              <img src={item.after} className={styles.test_img} />
            </div>

            <div
              className={styles.nav_box}
              style={{ left: `${dragPosition}%` }}
            >
              <div className={styles.before_box}>
                <p className={styles.before_text}>{t("before")}</p>
              </div>

              <button
                className={styles.round_box}
                onMouseDown={() => setDraggingId(item.id)}
              >
                <IoIosArrowBack className={styles.raund_arrow} />
                <IoIosArrowForward className={styles.raund_arrow} />
              </button>

              <div className={styles.after_box}>
                <p className={styles.after_text}>{t("after")}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Before_After;
