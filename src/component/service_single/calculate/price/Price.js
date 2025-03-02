import styles from "./style.module.css";
import * as React from "react";
import GetTouch from "../../../../get_in_touch/GetTouch";
import { Dialog } from "@mui/material";
import Slide from "@mui/material/Slide";
import { useTranslation } from "react-i18next";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Price({ setChooseObject, setCalculatePacket, setObjectId }) {
  const [t] = useTranslation();
  const [touchOpen, setTouchOpen] = React.useState(false);

  const handleAgainCalculate = () => {
    setChooseObject(true);
    setCalculatePacket({});
    setObjectId(0)
  };

  return (
    <div className={styles.price_block}>
      <h1>{t("services.calculate.price.name")}</h1>
      <div className={styles.black_box}>
        <h1>$300</h1>
        <p>{t("services.calculate.price.description")}</p>
      </div>
      <div className={styles.buttons_box}>
        <button
          className={styles.calculate_again_btn}
          onClick={handleAgainCalculate}
        >
          {t("services.calculate.price.calcagain")}
        </button>
        <button
          className={styles.gettouch_btn}
          onClick={() => setTouchOpen(true)}
        >
          {t("getintouch")}
        </button>
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
    </div>
  );
}

export default Price;
