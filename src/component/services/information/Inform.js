import styles from "./style.module.css";
import { useEffect, useState } from "react";
import GetTouch from "../../../get_in_touch/GetTouch";
import { selectClass } from "../../../json/service_packages/Service.Packages";

import { MdArrowOutward } from "react-icons/md";
import Pacet_Info from "../pacet_info/Pacet_Info";

function Inform() {
  const [pacet, setPacet] = useState([]);
  const [contact, setContact] = useState(false);

  if (pacet.length > 0) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "scroll";
  }

  const handleOpen = () => {
    setContact(true);
  };

  const handleShowPacket = (item) => {
    setPacet([item]);
  };

  return (
    <div className={styles.container_block}>
      <div className={styles.container_select_block}>
        {selectClass.map((item) => {
          return (
            <div
              key={item.id}
              className={styles.info_select_box}
              onClick={() => handleShowPacket(item)}
            >
              <img src={item.img} className={styles.img_select} />
              <div className={styles.info_text_box}>
                <h1 className={styles.info_title}>{item.title}</h1>
                <ul className={styles.ul_box}>
                  {item.info.map((el) => {
                    return (
                      <li key={el.id} className={styles.info_li}>
                        {el.name}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <MdArrowOutward className={styles.arrows_inform} />
            </div>
          );
        })}
      </div>

      <button className={styles.container_btn} onClick={handleOpen}>
        GET IN TOUCH <MdArrowOutward />
      </button>

      <Pacet_Info pacet={pacet} setPacet={setPacet} />

      {contact ? <GetTouch setContact={setContact} /> : null}
    </div>
  );
}

export default Inform;
