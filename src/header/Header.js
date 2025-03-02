import { Link, useLocation } from "react-router-dom";
import useTranslatedRoutes from "../routes/useTranslatedRoutes";
import styles from "./style.module.css";
import { motion, AnimatePresence } from "framer-motion";

import { useEffect, useState } from "react";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

function Header() {
  const routes = useTranslatedRoutes();
  let location = useLocation();
  const [urlName, setUrlName] = useState("");
  const [boll, setBoll] = useState(false);

  useEffect(() => {
    setUrlName(location.pathname + location.search);
  }, [location]);

  const handlePageLike = () => {
    setBoll(false);
  };

  return (
    <div className={boll ? styles.header_open : styles.header_close}>
      <div className={styles.navigation_block}>
        <div className={styles.logo_block}>
          <Link to={"/"}>logo</Link>
        </div>

        <div className={styles.nav_block}>
          <ul className={styles.nav_ul_box}>
            {routes.map((rout) => {
              if (rout.id > 6) {
                return;
              }
              return (
                <Link
                  key={rout.id}
                  to={rout.path}
                  className={
                    urlName === rout.path ? styles.nav_li_active : styles.nav_li
                  }
                >
                  {rout.name}
                </Link>
              );
            })}
          </ul>
        </div>

        <div className={styles.menu_block}>
          {routes.map((rout) => {
            if (rout.id == 7) {
              return (
                <Link
                  onClick={handlePageLike}
                  key={rout.id}
                  to={rout.path}
                  className={
                    location.pathname == "/favs"
                      ? styles.heard_box_active
                      : styles.heard_box
                  }
                >
                  <svg
                    width="24"
                    height="20"
                    viewBox="0 0 24 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.1494 1.76815C21.5629 1.20759 20.8667 0.762921 20.1003 0.459537C19.334 0.156152 18.5126 0 17.6831 0C16.8535 0 16.0321 0.156152 15.2658 0.459537C14.4994 0.762921 13.8032 1.20759 13.2167 1.76815L12.6905 2.27093C12.304 2.64021 11.6954 2.64021 11.3089 2.27092L10.7826 1.76815C9.59811 0.636397 7.99152 0.000586625 6.31633 0.000586637C4.64114 0.000586649 3.03455 0.636397 1.85001 1.76815C0.665469 2.89989 1.24812e-08 4.43487 0 6.03541C-1.24812e-08 7.63594 0.665469 9.17092 1.85001 10.3027L3.06705 11.4655L11.3089 19.34C11.6954 19.7093 12.304 19.7093 12.6905 19.34L20.9323 11.4655L22.1494 10.3027C22.7361 9.74238 23.2015 9.07714 23.519 8.34495C23.8366 7.61276 24 6.82796 24 6.03541C24 5.24285 23.8366 4.45806 23.519 3.72587C23.2015 2.99368 22.7361 2.32844 22.1494 1.76815Z"
                      fill={location.pathname == "/favs" ? "white" : "#764af1"}
                    />
                  </svg>
                </Link>
              );
            }
            return;
          })}

          <div className={styles.menu_burger} onClick={() => setBoll(!boll)}>
            <input
              type="checkbox"
              role="button"
              aria-label="Display the menu"
              className={styles.menu}
            />
          </div>
        </div>

        <AnimatePresence>
          {boll && (
            <ul className={styles.burger_ul}>
              {routes.map((rout) => {
                if (rout.id === 7) {
                  return;
                }
                return (
                  <motion.li
                    key={rout.id}
                    className={styles.burger_li}
                    initial={{ y: 500, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                  >
                    <Link
                      onClick={() => setBoll(false)}
                      to={rout.path}
                      className={styles.burger_link}
                    >
                      {rout.name}
                      <HiOutlineArrowUpRight
                        className={styles.media_small_arrow}
                      />
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          )}
        </AnimatePresence>

        <div className={styles.like_contact_block}>
          {routes.map((rout) => {
            if (rout.id < 7) {
              return;
            } else if (rout.id == 7) {
              return (
                <Link
                  key={rout.id}
                  to={rout.path}
                  className={
                    location.pathname == "/favs"
                      ? styles.heard_box_active
                      : styles.heard_box
                  }
                >
                  <svg
                    width="24"
                    height="20"
                    viewBox="0 0 24 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.1494 1.76815C21.5629 1.20759 20.8667 0.762921 20.1003 0.459537C19.334 0.156152 18.5126 0 17.6831 0C16.8535 0 16.0321 0.156152 15.2658 0.459537C14.4994 0.762921 13.8032 1.20759 13.2167 1.76815L12.6905 2.27093C12.304 2.64021 11.6954 2.64021 11.3089 2.27092L10.7826 1.76815C9.59811 0.636397 7.99152 0.000586625 6.31633 0.000586637C4.64114 0.000586649 3.03455 0.636397 1.85001 1.76815C0.665469 2.89989 1.24812e-08 4.43487 0 6.03541C-1.24812e-08 7.63594 0.665469 9.17092 1.85001 10.3027L3.06705 11.4655L11.3089 19.34C11.6954 19.7093 12.304 19.7093 12.6905 19.34L20.9323 11.4655L22.1494 10.3027C22.7361 9.74238 23.2015 9.07714 23.519 8.34495C23.8366 7.61276 24 6.82796 24 6.03541C24 5.24285 23.8366 4.45806 23.519 3.72587C23.2015 2.99368 22.7361 2.32844 22.1494 1.76815Z"
                      fill={location.pathname == "/favs" ? "white" : "#764af1"}
                    />
                  </svg>
                </Link>
              );
            } else if (rout.id == 8) {
              return (
                <Link
                  key={rout.id}
                  to={rout.path}
                  className={
                    location.pathname == "/contact"
                      ? styles.contact_link_active
                      : styles.contact_link
                  }
                >
                  {rout.name}
                </Link>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
