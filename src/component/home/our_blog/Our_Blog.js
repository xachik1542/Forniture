import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { blog } from "../../../json/blog_service/blog.service";
import { MdArrowOutward } from "react-icons/md";
import { useTranslation } from "react-i18next";

function Our_Blog() {
  const [t] = useTranslation();
  return (
    <div className={styles.our_blog}>
      <button className={styles.blog_btn}>{t("home.blog.btnname")}</button>

      <div className={styles.blog_box}>
        {blog.map((item) => {
          if (item.id == 1) {
            return (
              <Link
                key={item.id}
                to={`/blog/${item.id}`}
                className={styles.box}
              >
                <img src={item.img} />
                <div className={styles.size_box}>{t(item.size)}</div>
                <h1>{t(item.name)}</h1>
                <p>{t(item.text)}</p>
              </Link>
            );
          }
        })}
      </div>

      <Link to={"/blog?page=1"} className={styles.blog_link}>
        {t("home.blog.linkbtn")} <MdArrowOutward />
      </Link>
    </div>
  );
}

export default Our_Blog;
