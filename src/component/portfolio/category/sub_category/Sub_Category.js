import styles from './style.module.css'
import { data } from "../../../../json/portfolio/project";

function Sub_Category({ select }) {
  const handleSubCategory = (el) => {
    select.setSubid(el.id);
    const find = data.find((item) => item.categoryId == select.firstId && item.subCategoryId == el.id);
    select.setTypes(find ? el.types : []);
  };
  

  return select.subCategories.length > 0 ? (
    <ul className={styles.sub_category}>
      <h1 className={styles.sub_name}>Rooms</h1>
      {select.subCategories.map((el) => {
        return (
          <li
            key={el.id}
            className={     
              el.id == select.subId
                ? styles.sub_li_change
                : styles.sub_li
            }
            onClick={() => handleSubCategory(el)}
          >
            {el.name}
          </li>
        );
      })}
    </ul>
  ) : null;
}

export default Sub_Category;
