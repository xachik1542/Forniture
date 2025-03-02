import { useState } from "react";
import styles from "./style.module.css";
import { useTranslation } from "react-i18next";

function First_Category({ select }) {
  const [t] = useTranslation();
  const [id, setId] = useState(0);
  const ShowAll = () => {
    select.setFirstId(0);
    select.setSubid(0);
    select.setTypeId(0);
    select.setSubCategories([]);
    select.setTypes([]);
  };

  const handleShow = (el) => {
    if (id != el.id) {
      select.setFirstId(el.id);
      select.setSubCategories(el.sub_Category ? el.sub_Category : []);
      setId(el.id);
    } else {
      setId(0);
      select.setFirstId(0);
      select.setSubCategories([]);
    }
  };

  
  
  return (
    <ul className={styles.first_ul}>
      <h1 className={styles.first_name}>{t("portfolio.navigation.media.filter")}</h1>
      <li
        className={
          select.firstId == 0 ? styles.first_li_hover : styles.first_li
        }
        onClick={ShowAll}
      >
        {t("portfolio.all")}
      </li>

      {select.category.map((el) => (
        <li
          key={el.id}
          className={
            el.id == select.firstId ? styles.first_li_hover : styles.first_li
          }
          onClick={() => handleShow(el)}
        >
          {t(el.name)}
        </li>
      ))}
    </ul>
  );
}

export default First_Category;
