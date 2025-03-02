import styles from "./style.module.css";
import { blog } from "../../../json/blog_service/blog.service";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Pagination from "../../../pagination/Pagination";
import { useTranslation } from "react-i18next";

function Show_Project() {
  const [t] = useTranslation();
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  let urlPage = +searchParams.get("page");
  const itemsPerPage = 2;
  let totalPages = Math.ceil(data.length / itemsPerPage);

  useEffect(() => {
    setData(blog);
  }, [blog]);

  const getPaginationItems = () => {
    const lastIndex = urlPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    return data.slice(firstIndex, lastIndex);
  };

  return (
    <div className={styles.container_block}>
      <div className={styles.container_title_box}>
        <button className={styles.title_btn}>
          <p className={styles.work_text}>{t("blog.btnname")}</p>
          <p className={styles.title_name}>{t("blog.mediabtnname")}</p>
        </button>
        <div className={styles.title_text_box}>
          <h1 className={styles.blog_big_name}>{t("blog.title")}</h1>
        </div>
          <p className={styles.title_description}>{t("blog.description")}</p>
      </div>

      <div className={styles.project_block}>
        {getPaginationItems().map((el) => (
          <Link
            key={el.id}
            to={`/blog/${el.id}?`}
            className={styles.project_link}
          >
            <img src={el.img} />
            <h2>{t(el.name)}</h2>
            <p>{t(el.text)}</p>
          </Link>
        ))}
      </div>

      <Pagination totalPages={totalPages} itemsPerPage={itemsPerPage} />
    </div>
  );
}

export default Show_Project;
