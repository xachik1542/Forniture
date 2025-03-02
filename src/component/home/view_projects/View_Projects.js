import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { MdArrowOutward } from "react-icons/md";
import { projects } from "../../../json/portfolio/project";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function View_Projects() {
  const [t] = useTranslation();
  const [id, setId] = useState(0);
  const [show_Text, setShow_Text] = useState(false);

  const handleShow_Text = (id) => {
    setId(id);
    setShow_Text(true);
  };

  return (
    <div className={styles.container_block}>
      <button className={styles.title_container}>
        {t("home.latestproject.btnname")}
      </button>

      <div className={styles.container_link_block}>
        {projects.map((item) => {
          if (item.id == 1 || item.id == 2 || item.id == 3 || item.id == 4) {
            return (
              <Link
                key={item.id}
                to={`/project/${item.id}`}
                style={{ backgroundImage: `url(${item.img})` }}
                className={styles.link_box}
                onMouseOver={() => handleShow_Text(item.id)}
                onMouseLeave={() => setShow_Text(false)}
              >
                <div className={styles.container_size}>{t(item.size)}</div>
                <div
                  className={styles.mouse_box}
                  style={{ opacity: item.id == id && show_Text ? "1" : "0" }}
                >
                  <h1 className={styles.mouse_title}>{t(item.title)}</h1>
                  <p className={styles.mouse_description}>
                    {t(item.description)}
                  </p>
                  <h3 className={styles.mouse_see}>
                    {t(item.hover_See)}
                    <MdArrowOutward className={styles.project_arrow} />
                  </h3>
                </div>

                <div className={styles.media_text_box}>
                  <p className={styles.media_name}>Residential</p>
                  <h1 className={styles.media_title}>{t(item.title)}</h1>
                </div>
              </Link>
            );
          }
        })}
      </div>
      <Link className={styles.link_all_projects} to={"/portfolio?page=1"}>
        {t("home.latestproject.linkbtn")}
        <MdArrowOutward className={styles.project_arrow} />
      </Link>
    </div>
  );
}

export default View_Projects;
