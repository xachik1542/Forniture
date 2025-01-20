import styles from "./style.module.css";

function First_Category({ select }) {
  const ShowAll = () => {
    select.setFirstId(0);
    select.setSubid(0);
    select.setTypeId(0);
    select.setSubCategories([]);
    select.setTypes([]);
  };

  const First_Category = (el) => {
    select.setFirstId(el.id);
    select.setSubCategories(el.sub_Category ? el.sub_Category : []);
  };

  return (
    <ul className={styles.first_ul}>
      <h1 className={styles.first_name}>Service</h1>
      <li
        className={
          select.firstId == 0 ? styles.first_li_hover : styles.first_li
        }
        onClick={ShowAll}
      >
        ALL Project
      </li>

      {select.category.map((el) => (
        <li
          key={el.id}
          className={
            el.id == select.firstId
              ? styles.first_li_hover
              : styles.first_li
          }
          onClick={() => First_Category(el)}
        >
          {el.name}
        </li>
      ))}
    </ul>
  );
}

export default First_Category;
