import styles from "./style.module.css";
import Show_Project from "../show_project/Show_Project.js";
import First_Category from "../category/first_category/First_Category.js";
import Sub_Category from "../category/sub_category/Sub_Category.js";
import Types_Category from "../category/type_category/Types_Category.js";
import Media from "../media/Media.js";
import { useEffect, useState } from "react";
import { nav, data } from "../../../json/portfolio/project.js";

function Category() {
  const [firstId, setFirstId] = useState(0);
  const [subId, setSubid] = useState(0);
  const [typeId, setTypeId] = useState(0);
  const [category, setCategory] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [types, setTypes] = useState([]);
  const [menu, setMenu] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const select = {
    firstId,
    setFirstId,
    subId,
    setSubid,
    typeId,
    setTypeId,
    category,
    setCategory,
    subCategories,
    setSubCategories,
    types,
    setTypes,
    menu,
    setMenu,
  };

  useEffect(() => {
    setCategory(nav);
  }, []);

  return (
    <div className={styles.category_block}>
      <div className={styles.category_box}>
        <First_Category select={select} />
        <Sub_Category select={select} />
        <Types_Category select={select} />
      </div>

      <div className={styles.media_category_box}>
        <Media select={select} />
      </div>

      <Show_Project
        categoryId={firstId}
        subCategoryId={subId}
        typeId={typeId}
        setSubCategories={setSubCategories}
        setTypes={setTypes}
      />
    </div>
  );
}

export default Category;
