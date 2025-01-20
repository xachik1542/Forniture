import styles from "./style.module.css";

function Types_Category({ select }) {
  const handleTypes = (el) => {
    select.setTypeId(el.id);
  };

  return select.types.length > 0 ? (
    <ul className={styles.type_ul}>
      <h1 className={styles.type_name}>Style</h1>
      {select.types.map((el) => {
        return (
          <li
            key={el.id}
            className={
              el.id == select.typeId
                ? styles.type_li_change
                : styles.type_li
            }
            onClick={() => handleTypes(el)}
          >
            {el.name}
          </li>
        );
      })}
    </ul>
  ) : null;
}

export default Types_Category;
