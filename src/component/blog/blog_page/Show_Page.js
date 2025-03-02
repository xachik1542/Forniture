import styles from "./style.module.css";
import { blog } from "../../../json/blog_service/blog.service";
import * as React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { MdArrowOutward } from "react-icons/md";
import { Dialog } from "@mui/material";
import Slide from "@mui/material/Slide";
import GetTouch from "../../../get_in_touch/GetTouch";
import { useTranslation } from "react-i18next";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Show_Page() {
  const [t] = useTranslation();
  const [info, setInfo] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  const urlBlog = +params.id;
  const [touchOpen, setTouchOpen] = useState(false);

  useEffect(() => {
    setInfo(blog);
  }, []);

  const handleNextInfo = () => {
    if (urlBlog < info.length) {
      navigate(`/blog/${urlBlog + 1}`);
    }
  };

  const handlePrevInfo = () => {
    if (urlBlog > 1) {
      navigate(`/blog/${urlBlog - 1}`);
    }
  };

  return (
    <div className={styles.container_block}>
      {info.map((el) => {
        if (el.id == urlBlog) {
          return (
            <div
              key={el.id}
              className={styles.project_block}
              style={{ backgroundImage: `url(${el.img})` }}
            >
              <button className={styles.project_btn}>{t(el.size)}</button>
              <h1 className={styles.project_name}>{t(el.name)}</h1>
              <p className={styles.project_text}>{t(el.text)}</p>
            </div>
          );
        }
      })}
      {info.length > 0 ? (
        <div className={styles.container_read}>
          <div className={styles.read_title_box}>
            <button className={styles.read_btn}>
              {t("blog.one.read.btnname")}
            </button>
            <p className={styles.interier_text}>
              {t("blog.one.read.description")}
            </p>
          </div>

          {info.map((item) => {
            if (item.id == urlBlog && item.read) {
              return (
                <div key={item.id} className={styles.info_boxes}>
                  {item.read.map((el) => (
                    <div key={el.id} className={styles.info_boxes}>
                      <h1 className={styles.info_name}>{t(el.name)}</h1>
                      {el.images ? (
                        <div className={styles.info_img_box}>
                          {el.images.map((img) => (
                            <img key={img.id} src={img.img} />
                          ))}
                        </div>
                      ) : null}
                      <p className={styles.info_title}>{t(el.title)}</p>
                      <p className={styles.info_description}>
                        {t(el.description)}
                      </p>
                    </div>
                  ))}
                </div>
              );
            } else {
              return;
            }
          })}

          <div className={styles.read_pagination}>
            <button onClick={handlePrevInfo}>
              <HiOutlineArrowSmLeft className={styles.read_icon} />
              {t("previous")}
            </button>
            <button onClick={handleNextInfo}>
              {t("next")}
              <HiOutlineArrowSmRight className={styles.read_icon} />
            </button>
          </div>
        </div>
      ) : null}
      <div className={styles.right_block}>
        <div className={styles.popular_block}>
          <div className={styles.pop_box_name}>{t("blog.btnpopular")}</div>
          {info.map((item) => {
            if (item.isPopular == true) {
              return (
                <div key={item.id} className={styles.popular_box}>
                  <img src={item.img} />
                  <div className={styles.popular_size_box}>{t(item.size)}</div>
                  <h1 className={styles.popular_name}>{t(item.name)}</h1>
                  <p className={styles.popular_text}>{t(item.text)}</p>
                </div>
              );
            }
          })}
        </div>

        {info.map((item) => {
          if (item.id == urlBlog) {
            return (
              <div key={item.id} className={styles.sale_block}>
                <div className={styles.sale_box}>
                  {t("blog.one.sale.btnname")}
                </div>
                {item.sale.map((el) => (
                  <div
                    key={el.id}
                    className={styles.sale_img_box}
                    style={{ backgroundImage: `url(${el.img})` }}
                  >
                    <h1>{t(el.name)}</h1>
                    <p>{t(el.title)}</p>
                  </div>
                ))}
                <button
                  className={styles.sale_link}
                  onClick={() => setTouchOpen(true)}
                >
                  {t("getintouch")}
                  <MdArrowOutward className={styles.sale_icon} />
                </button>
              </div>
            );
          } else {
            return;
          }
        })}

        {info.map((item) => {
          if (item.id == urlBlog) {
            return (
              <div key={item.id} className={styles.visit_block}>
                <div className={styles.visit_box}>
                  {t("blog.one.visit.btnname")}
                </div>
                {item.visit.map((el) => (
                  <div
                    key={el.id}
                    className={styles.visit_img_block}
                    style={{ backgroundImage: `url(${el.img})` }}
                  ></div>
                ))}
                <Link
                  to={"https://www.instagram.com/"}
                  target="_blank"
                  className={styles.visit_link}
                >
                  {t("blog.one.visit.linkname")}
                  <MdArrowOutward className={styles.visit_icon} />
                </Link>
              </div>
            );
          }
        })}
      </div>
      <React.Fragment>
        <Dialog
          open={touchOpen}
          maxWidth={false}
          TransitionComponent={Transition}
          keepMounted
          aria-describedby="alert-dialog-slide-description"
          PaperProps={{ sx: { borderRadius: "24px" } }}
        >
          <GetTouch setTouchOpen={setTouchOpen} />
        </Dialog>
      </React.Fragment>
      ;
    </div>
  );
}

export default Show_Page;
