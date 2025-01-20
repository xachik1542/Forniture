import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { blog } from '../../../json/home/home.service';
import { MdArrowOutward } from "react-icons/md";


function Our_Blog() {
  return (
    <div className={styles.our_blog}>
      <button className={styles.blog_btn}>Our Blog</button>

      <div className={styles.blog_box}>
        {blog.map((item) => {
          return (
            <Link key={item.id} to={`/blog/page/${item.id}`} className={styles.box}>
              <img src={item.img} />
              <div className={styles.size_box}>{item.size}</div>
              <h1>{item.name}</h1>
              <p>{item.text}</p>
            </Link>
          );
        })}
      </div>

      <Link to={"/blog"} className={styles.blog_link}>
        SEE ALL BLOG <MdArrowOutward />
      </Link>
    </div>
  );
}

export default Our_Blog;
