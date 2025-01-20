import styles from "./style.module.css";
import { projectsRoom } from "../../../json/portfolio/project";
import { data } from "../../../json/portfolio/project";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import GetTouch from "../../../get_in_touch/GetTouch";

function Show_Image() {
  let params = useParams();
  const [roomImage, setRoomImage] = useState();
  const [roomId, setRoomId] = useState(0);
  const [images, setImages] = useState([]);
  const [selectId, setSelectId] = useState(1);
  const [selectOpen, setSelectOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [project, setProject] = useState({});

  if (open == true) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "scroll";
  }

  useEffect(() => {
    data.map((item) => {
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

  const handleOpenTouch = () => {
    setOpen(true);
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
              {item.title}
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
                {item.title}
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
                    {item.title}
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
            <div className={styles.not_found}>Nothing is not found</div>
          )}
        </div>
      ) : null}

      <button className={styles.touch_btn} onClick={handleOpenTouch}>
        GET IN TOUCH
      </button>
      <GetTouch open={open} setOpen={setOpen} />
    </div>
  );
}

export default Show_Image;
