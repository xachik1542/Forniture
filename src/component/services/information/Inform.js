import styles from "./style.module.css";
import * as React from "react";
import { useState } from "react";
import GetTouch from "../../../get_in_touch/GetTouch";
import { selectClass } from "../../../json/service_packages/Service.Packages";
import Slide from "@mui/material/Slide";

import { MdArrowOutward } from "react-icons/md";
import Pacet_Info from "../pacet_info/Pacet_Info";
import { Dialog } from "@mui/material";
import { useTranslation } from "react-i18next";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Inform() {
  const [t] = useTranslation();
  const [pacet, setPacet] = useState([]);
  const [open, setOpen] = useState(false);
  const [touchOpen, setTouchOpen] = useState(false);

  const handleClickOpen = (item) => {
    setOpen(true);
    setPacet([item]);
  };

  return (
    <div className={styles.container_block}>
      <div className={styles.container_select_block}>
        {selectClass.map((item) => {
          return (
            <div
              key={item.id}
              className={styles.info_select_box}
              onClick={() => handleClickOpen(item)}
            >
              <img src={item.img} className={styles.img_select} />
              <div className={styles.info_text_box}>
                <h1 className={styles.info_title}>{t(item.title)}</h1>
                <ul className={styles.ul_box}>
                  {item.info.map((el) => {
                    return (
                      <li key={el.id} className={styles.info_li}>
                        {t(el.name)}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <MdArrowOutward className={styles.arrows_inform}/>
            </div>
          );
        })}
      </div>

      <button
        className={styles.container_btn}
        onClick={() => setTouchOpen(true)}
      >
        {t("getintouch")} <MdArrowOutward />
      </button>

      <React.Fragment>
        <Dialog
          open={open}
          maxWidth={false}
          TransitionComponent={Transition}
          keepMounted
          aria-describedby="alert-dialog-slide-description"
          PaperProps={{ sx: { borderRadius: "24px" } }}
        >
          <Pacet_Info
            pacet={pacet}
            setPacet={setPacet}
            open={open}
            setOpen={setOpen}
          />
        </Dialog>
      </React.Fragment>

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

export default Inform;
