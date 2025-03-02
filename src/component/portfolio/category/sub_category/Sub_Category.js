import styles from "./style.module.css";
import { projects } from "../../../../json/portfolio/project";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function Sub_Category({ select }) {
  const [t] = useTranslation();
  const [id, setId] = useState(0);

  const handleSubCategory = (el) => {
    if (id != el.id) {
      select.setSubid(el.id);
      const find = projects.find(
        (item) =>
          item.categoryId == select.firstId && item.subCategoryId == el.id
      );
      select.setTypes(find ? el.types : []);
      setId(el.id);
    } else {
      select.setTypes([]);
      select.setSubid(0);
      setId(0);
    }
  };

  return select.subCategories.length > 0 ? (
    <ul className={styles.sub_category}>
      <h1 className={styles.sub_name}>{t("portfolio.navigation.media.rooms")}</h1>
      {select.subCategories.map((el) => {
        return (
          <li
            key={el.id}
            className={
              el.id == select.subId ? styles.sub_li_change : styles.sub_li
            }
            onClick={() => handleSubCategory(el)}
          >
            {t(el.name)}
          </li>
        );
      })}
    </ul>
  ) : null;
}

export default Sub_Category;
