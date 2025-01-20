import styles from "./style.module.css";
import { data, nav } from "../../../json/portfolio/project";
import { Link } from "react-router-dom";

import { MdArrowOutward } from "react-icons/md";
import { useEffect, useState } from "react";

function Show_Project({ categoryId, subCategoryId, typeId }) {
  const [id, setId] = useState(0);
  const [project, setProject] = useState([]);

  useEffect(() => {
    if (categoryId == 0) {
      setProject(data);
    }
  });

  useEffect(() => {
    return setProject(data.filter((el) => el.categoryId == categoryId));
  }, [categoryId]);

  useEffect(() => {
    return setProject(
      data.filter(
        (el) => el.categoryId == categoryId && el.subCategoryId == subCategoryId
      )
    );
  }, [subCategoryId]);

  useEffect(() => {
    return setProject(
      data.filter(
        (el) =>
          el.categoryId == categoryId &&
          el.subCategoryId == subCategoryId &&
          el.typeId == typeId
      )
    );
  }, [typeId]);

  const handleShowText = (item) => {
    setId(item.id);
  };

  return (
    <div className={styles.container_block}>
      {project.length > 0 ? (
        project.map((item) => {
          return (
            <div
              key={item.id}
              className={styles.container_prject_box}
              onMouseOver={() => handleShowText(item)}
              onMouseLeave={() => setId(0)}
            >
              <img src={item.img} className={styles.project_img} />
              {nav.map((el) => {
                if (el.id == item.categoryId) {
                  return (
                    <p key={el.id} className={styles.container_name}>
                      {el.name}
                    </p>
                  );
                }
              })}
              <h1 className={styles.media_name_img}>{item.hover_Name}</h1>
              <div className={styles.size_box}>{item.size}</div>
              {item.id == id ? (
                <Link
                  to={`/project/${item.id}`}
                  className={styles.container_mouse_text}
                >
                  <h1 className={styles.container_text}>{item.hover_Name}</h1>
                  <p className={styles.container_many_text}>
                    {item.hover_About}
                  </p>
                  <p className={styles.container_see}>
                    {item.hover_See}
                    <MdArrowOutward className={styles.arrow_content} />
                  </p>
                </Link>
              ) : null}

              <div className={styles.heart_box}>
                <svg
                  width="24"
                  height="20"
                  viewBox="0 0 24 20"
                  fill={item.isFavorite ? "white" : "none"}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.3036 2.59133C20.766 2.08683 20.1278 1.68663 19.4253 1.41358C18.7228 1.14054 17.9699 1 17.2095 1C16.4491 1 15.6961 1.14054 14.9936 1.41358C14.2912 1.68663 13.6529 2.08683 13.1153 2.59133L12.6839 2.99607C12.2992 3.35696 11.7003 3.35696 11.3156 2.99607L10.8841 2.59133C9.79827 1.57276 8.32556 1.00053 6.78997 1.00053C5.25437 1.00053 3.78167 1.57276 2.69584 2.59133C1.61001 3.6099 1 4.99139 1 6.43187C1 7.87235 1.61001 9.25383 2.69584 10.2724L3.81147 11.3189L11.3156 18.3582C11.7003 18.7191 12.2992 18.7191 12.6839 18.3582L20.188 11.3189L21.3036 10.2724C21.8414 9.76814 22.268 9.16942 22.5591 8.51045C22.8502 7.85148 23 7.14517 23 6.43187C23 5.71857 22.8502 5.01225 22.5591 4.35328C22.268 3.69431 21.8414 3.09559 21.3036 2.59133Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          );
        })
      ) : (
        <div className={styles.not_found}>Nothing is not found</div>
      )}
    </div>
  );
}
export default Show_Project;
