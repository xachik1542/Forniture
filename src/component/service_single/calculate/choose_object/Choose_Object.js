import styles from "./style.module.css";
import { service } from "../../../../json/home/home.service";
import { useState } from "react";

function Choose_Object({ setChooseObject,setWhatServis }) {
  const [id, setId] = useState(0);

  const handleNextClick = () => {
    setChooseObject(false)
    setWhatServis(true)
  };

  return (
    <div className={styles.calculate_block}>
      <div className={styles.choose_block}>
        <h1 className={styles.choose_name}>Choose Object Type</h1>

        <div className={styles.servis_object_box}>
          {service.map((item) => (
            <div
              key={item.id}
              className={
                item.id == id ? styles.serive_obj_active : styles.service_obj
              }
              onClick={() => setId(item.id)}
            >
              <img className={styles.service_img} src={item.img} />
              <h1 className={styles.service_name}>{item.name}</h1>
            </div>
          ))}
        </div>
        <button className={styles.next_btn} onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Choose_Object;
