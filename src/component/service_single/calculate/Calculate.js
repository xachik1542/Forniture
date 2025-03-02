import { useEffect, useState } from "react";
import Calculate_Name from "./calculate_name/Calculate_Name";
import Choose_Object from "./choose_object/Choose_Object";
import styles from "./style.module.css";
import Question_Object from "./question_object/Question_Object";
import Enter_Footage from "./enter_footage/Enter_Footage";
import Price from "./price/Price";
function Calculate() {
  const [objectId, setObjectId] = useState(0);
  const [chooseObject, setChooseObject] = useState(true);
  const [questionObject, setQuestionObject] = useState(false);
  const [footage, setFootage] = useState(false);
  const [calculatePacet, setCalculatePacket] = useState({});

  return (
    <div className={styles.calculate_block}>
      <Calculate_Name />
      {chooseObject ? (
        <Choose_Object
          objectId={objectId}
          setObjectId={setObjectId}
          setChooseObject={setChooseObject}
          setQuestionObject={setQuestionObject}
          calculatePacet={calculatePacet}
          setCalculatePacket={setCalculatePacket}
        />
      ) : null}
      {questionObject ? (
        <Question_Object
          objectId={objectId}
          setObjectId={setObjectId}
          setChooseObject={setChooseObject}
          setQuestionObject={setQuestionObject}
          setFootage={setFootage}
          calculatePacet={calculatePacet}
          setCalculatePacket={setCalculatePacket}
        />
      ) : null}

      {footage ? (
        <Enter_Footage
          setFootage={setFootage}
          setQuestionObject={setQuestionObject}
          calculatePacet={calculatePacet}
          setCalculatePacket={setCalculatePacket}
        />
      ) : null}

      {calculatePacet.square ? (
        <Price
          setObjectId={setObjectId}
          setChooseObject={setChooseObject}
          setCalculatePacket={setCalculatePacket}
        />
      ) : null}
    </div>
  );
}

export default Calculate;
