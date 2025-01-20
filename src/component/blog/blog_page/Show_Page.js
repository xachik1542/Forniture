import styles from "./style.module.css";
import { blog } from "../../../json/blog_service/blog.service";
import GetTouch from "../../../get_in_touch/GetTouch";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { MdArrowOutward } from "react-icons/md";

function Show_Page() {
  const params = useParams();
  const [info, setInfo] = useState([]);
  const [paramsId, setParamsId] = useState(params);
  const [contact, setContact] = useState(false);

  useEffect(() => {
    setInfo(blog);
  }, []);

  const handleNextPage = () => {
    setParamsId(+paramsId + 1);
  };


  const handleShowTouch = () => {
    setContact(true)
  }

  return (
    <div className={styles.container_block}>
      {info.map((el) => {
        if (el.id == params.id) {
          return (
            <div
              key={el.id}
              className={styles.project_block}
              style={{ backgroundImage: `url(${el.img})` }}
            >
              <button className={styles.project_btn}>{el.size}</button>
              <h1 className={styles.project_name}>{el.name}</h1>
              <p className={styles.project_text}>{el.text}</p>
            </div>
          );
        }
      })}

      {info.length > 0 ? (
        <div className={styles.container_read}>
          <div className={styles.read_title_box}>
            <button className={styles.read_btn}>Read Blog</button>
            <p className={styles.interier_text}>
              Interior design is more than just decorating a room—it’s about
              creating a space that reflects your personality, enhances comfort,
              and serves a functional purpose. Whether you're redesigning your
              living room or starting from scratch in a new home, here are five
              key tips to elevate your space.
            </p>
          </div>

          {info.map((item) => {
            if (item.id == params.id && item.read) {
              return (
                <div key={item.id} className={styles.info_boxes}>
                  {item.read.map((el) => (
                    <div key={el.id} className={styles.info_boxes}>
                      <h1 className={styles.info_name}>{el.name}</h1>
                      {el.images ? (
                        <div className={styles.info_img_box}>
                          {el.images.map((img) => (
                            <img key={img.id} src={img.img} />
                          ))}
                        </div>
                      ) : null}
                      <p className={styles.info_title}>{el.title}</p>
                      <p className={styles.info_description}>
                        {el.description}
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
            <button>
              <HiOutlineArrowSmLeft className={styles.read_icon} />
              Previous
            </button>
            <button onClick={handleNextPage}>
              Next
              <HiOutlineArrowSmRight className={styles.read_icon} />
            </button>
          </div>
        </div>
      ) : null}

      <div className={styles.right_block}>
        <div className={styles.popular_block}>
          <div className={styles.pop_box_name}>Popular</div>
          {info.map((item) => {
            if (item.isPopular == true) {
              return (
                <div className={styles.popular_box}>
                  <img src={item.img} />
                  <div className={styles.popular_size_box}>{item.size}</div>
                  <h1 className={styles.popular_name}>{item.name}</h1>
                  <p className={styles.popular_text}>{item.text}</p>
                </div>
              );
            }
          })}
        </div>

        {info.map((item) => {
          if (item.id == params.id) {
            return (
              <div key={item.id} className={styles.sale_block}>
                <div className={styles.sale_box}>Sale</div>
                {item.sale.map((el) => (
                  <div
                    key={el.id}
                    className={styles.sale_img_box}
                    style={{ backgroundImage: `url(${el.img})` }}
                  >
                    <h1>{el.name}</h1>
                    <p>{el.title}</p>
                  </div>
                ))}
                <Link className={styles.sale_link} onClick={handleShowTouch}>
                  GET IN TOUCH <MdArrowOutward className={styles.sale_icon} />
                </Link>
              </div>
            );
          } else {
            return;
          }
        })}

        {info.map((item) => {
          if (item.id == params.id) {
            return (
              <div key={item.id} className={styles.visit_block}>
                <div className={styles.visit_box}>Visit Our Instagram</div>
                {item.visit.map((el) => (
                  <div
                    key={el.id}
                    className={styles.visit_img_block}
                    style={{ backgroundImage: `url(${el.img})` }}
                  ></div>
                ))}
                <Link className={styles.visit_link} onClick={handleShowTouch}>
                  VISIT <MdArrowOutward className={styles.visit_icon} />
                </Link>
              </div>
            );
          } else {
            return;
          }
        })}

        {contact ? <GetTouch setContact={setContact}/> : null}
      </div>
    </div>
  );
}

export default Show_Page;
