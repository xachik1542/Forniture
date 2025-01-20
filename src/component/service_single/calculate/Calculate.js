import { useState } from "react";
import Calculate_Name from "./calculate_name/Calculate_Name";
import Choose_Object from "./choose_object/Choose_Object";
import styles from "./style.module.css";
import What_Service from "./what_service/What_Service";

function Calculate() {
  const [chooseObject, setChooseObject] = useState(true);
  const [whatServis, setWhatServis] = useState(false);
  return (
    <div className={styles.calculate_block}>
      <Calculate_Name />
      {chooseObject ? (
        <Choose_Object
          setChooseObject={setChooseObject}
          setWhatServis={setWhatServis}
        />
      ) : null}
      {whatServis ? (
        <What_Service
          setChooseObject={setChooseObject}
          setWhatServis={setWhatServis}
        />
      ) : null}
    </div>
  );
}

export default Calculate;
