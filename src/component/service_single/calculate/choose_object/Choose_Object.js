import styles from "./style.module.css";
import { serviceData } from "../../../../json/service_packages/Service.Packages";
import { useTranslation } from "react-i18next";

function Choose_Object({
  objectId,
  setObjectId,
  setChooseObject,
  setQuestionObject,
  setCalculatePacket,
}) {
  const [t] = useTranslation();
  console.log(objectId);

  const handleChooseObject = (item) => {
    setObjectId(item.id);
    setCalculatePacket({ id: item.id, questioned: [], square: 0 });
  };

  const handleNextClick = () => {
    if (objectId > 0) {
      setChooseObject(false);
      setQuestionObject(true);
    }
    return;
  };

  return (
    <div className={styles.calculate_block}>
      <div className={styles.choose_block}>
        <h1 className={styles.choose_name}>
          {t("services.calculate.chooseobject.name")}
        </h1>

        <div className={styles.object_block}>
          {serviceData.map((item) => {
            if (
              t(item.btn) != "Packages" &&
              t(item.btn) !== "Փաթեթներ" &&
              t(item.btn) !== "Пакеты" &&
              t(item.btn) !== "Balíčky"
            ) {
              return (
                <div
                  key={item.id}
                  className={
                    item.id == objectId
                      ? styles.serive_obj_active
                      : styles.service_obj
                  }
                  onClick={() => handleChooseObject(item)}
                >
                  <img
                    className={styles.service_img}
                    src={
                      objectId == item.id
                        ? item.img_Calculate_Active
                        : item.img_Calculate
                    }
                  />
                  <h1 className={styles.service_name}>{t(item.btn)}</h1>
                </div>
              );
            }
            return;
          })}
        </div>
        <button
          className={
            objectId > 0 ? styles.active_next_btn : styles.passive_next_btn
          }
          onClick={handleNextClick}
        >
          {t("next")}
        </button>
      </div>
    </div>
  );
}

export default Choose_Object;
