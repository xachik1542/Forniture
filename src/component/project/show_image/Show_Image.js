import styles from "./style.module.css";
import * as React from "react";
import { projectsRoom } from "../../../json/portfolio/project";
import { projects } from "../../../json/portfolio/project";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import GetTouch from "../../../get_in_touch/GetTouch";
import { Dialog, Slide } from "@mui/material";
import { useTranslation } from "react-i18next";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Show_Image() {
  const [t] = useTranslation();
  let params = useParams();
  const [roomImage, setRoomImage] = useState();
  const [roomId, setRoomId] = useState(0);
  const [images, setImages] = useState([]);
  const [selectId, setSelectId] = useState(1);
  const [selectOpen, setSelectOpen] = useState(false);
  const [project, setProject] = useState({});
  const [touchOpen, setTouchOpen] = useState(false);

  useEffect(() => {
    projects.map((item) => {
      if (item.id == params.id) {
        setRoomImage(item);
        setImages(item.images);
        setProject(item);
      }
    });
  }, []);

  const handleRoomId = (item) => {
    setRoomId(item.id);
    setImages(project.images.filter((el) => el.roomId == item.id));
  };

  const handleSelectId = (item) => {
    setSelectId(item.id);
    setSelectOpen(false);
  };

  return (
    <div className={styles.navigation_block}>
      <div className={styles.nav_box}>
        {projectsRoom.map((item) => {
          return (
            <button
              key={item.id}
              className={
                item.id == roomId
                  ? styles.project_btn_active
                  : styles.project_btn
              }
              onClick={() => handleRoomId(item)}
            >
              {t(item.title)}
            </button>
          );
        })}
      </div>

      <div className={styles.select_block}>
        {projectsRoom.map((item) => {
          if (item.id == selectId) {
            return (
              <button
                key={item.id}
                className={styles.select_btn}
                onClick={() => setSelectOpen(!selectOpen)}
              >
                {t(item.title)}
                <IoIosArrowDown
                  className={
                    selectOpen
                      ? styles.select_arrow_up
                      : styles.select_arrow_down
                  }
                />
              </button>
            );
          }
        })}

        {selectOpen ? (
          <div className={styles.select_open}>
            {projectsRoom.map((item) => {
              if (item.id != selectId) {
                return (
                  <button
                    className={styles.select_btn}
                    onClick={() => handleSelectId(item)}
                  >
                    {t(item.title)}
                  </button>
                );
              }
            })}
          </div>
        ) : null}
      </div>

      {roomImage ? (
        <div className={styles.many_img_box}>
          {images.length > 0 ? (
            images.map((el) => {
              return (
                <div key={el.id} className={styles.images_box}>
                  <img src={el.img} className={styles.image} />
                </div>
              );
            })
          ) : (
            <div className={styles.not_found}>{t("notfound")}</div>
          )}
        </div>
      ) : null}

      <button className={styles.touch_btn} onClick={() => setTouchOpen(true)}>
        {t("getintouch")}
      </button>

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
    </div>
  );
}

export default Show_Image;
