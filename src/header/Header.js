import { Link, useLocation } from "react-router-dom";
import { routes } from "../services/routs.service";
import styles from "./style.module.css";
import {motion, AnimatePresence} from "framer-motion";

import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

function Header() {
  let location = useLocation();
  const [pathname, setPathname] = useState("");
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    setPathname(location.pathname);
  },[location.pathname]);


  return (
    <div className={menu ? styles.header_open : styles.header_close}>
      <div className={styles.navigation_block}>
        <div className={styles.logo_block}><h1>logo</h1></div>

    
        <div className={styles.nav_block}>
              <ul className={styles.nav_ul_box}>
                {routes.map((rout) => {
                  if (rout.id > 6) {
                    return;
                  }
                  return (
                    <li key={rout.id} className={pathname === rout.path ? styles.nav_li_active : styles.nav_li}>
                    <Link to={rout.path} className={styles.nav_link}>
                      {rout.name}
                    </Link>
                    </li>
                  );
                })}
              </ul> 
        </div>



      <div className={styles.menu_burger_box} onClick={() => setMenu(!menu)}>
        <div className={styles.menu_pair_box}>
          <div className={menu ? styles.active_one : styles.menu_one_box}></div>
          <div className={menu ? styles.active_two : styles.menu_two_box}></div>
        </div>
        <div className={menu ? styles.active_three : styles.menu_three_box}></div>
      </div>

      <AnimatePresence>
          {menu && 
            <ul className={styles.burger_ul}>
                {routes.map((rout) => {
                  if (rout.id === 7) {
                    return;
                  }
                  return (
                    <motion.li
                    key={rout.id} 
                    className={styles.burger_li}
                    initial={{y: 500, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.7, delay: 0.3}}
                    >
                    <Link to={rout.path} className={styles.burger_link}>
                      {rout.name}
                      <HiOutlineArrowUpRight className={styles.media_small_arrow}/>
                    </Link>
                    </motion.li>
                  );
                })}
            </ul> 
          }
      </AnimatePresence>
         

        <div className={styles.like_contact_block}>
          {routes.map((rout) => {
            if (rout.id < 7) {
              return
            }
            else if (rout.id == 7) {
              return (
                <Link key={rout.id} to={rout.path} className={styles.heard_box}>
                  <FaHeart className={styles.heard} />
                </Link>
              );
            } 
            else if (rout.id == 8) {
              return (
                <Link key={rout.id} to={rout.path} className={styles.contact_link}>
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
