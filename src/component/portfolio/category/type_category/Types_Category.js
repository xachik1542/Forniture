import { useState } from "react";
import styles from "./style.module.css";
import { useTranslation } from "react-i18next";

function Types_Category({ select }) {
  const [t] = useTranslation();
  const [id, setId] = useState(0);

  const handleTypes = (el) => {
    if (id != el.id) {
      select.setTypeId(el.id);
      setId(el.id);
    } else {
      select.setTypeId(0);
      setId(0);
    }
  };

  return select.types.length > 0 ? (
    <ul className={styles.type_ul}>
      <h1 className={styles.type_name}>{t("portfolio.navigation.media.style")}</h1>
      {select.types.map((el) => {
        return (
          <li
            key={el.id}
            className={
              el.id == select.typeId ? styles.type_li_change : styles.type_li
            }
            onClick={() => handleTypes(el)}
          >
            {t(el.name)}
          </li>
        );
      })}
    </ul>
  ) : null;
}

export default Types_Category;
