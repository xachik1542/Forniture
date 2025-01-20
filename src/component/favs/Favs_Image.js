import styles from "./style.module.css";
import ReactPaginate from "react-paginate";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { data } from "../../json/portfolio/project";
import { IconContext } from "react-icons";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

function Favs_Image() {
  
  let navigate = useNavigate();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("page"));

  const [favs, setFavs] = useState([]);
  const [filterData, setFilterData] = useState();
  const [page, setPage] = useState(0);
  const n = 2;
  

  useEffect(() => {
    setFavs(data.filter((item) => item.isFavorite == true));
  }, [data]);

  useEffect(() => {
    setFilterData(
      favs.filter((item, index) => {
        return (index >= page * n) & (index < (page + 1) * n);
      })
    );
    navigate(`/favs?page=${page + 1}`);
  }, [page, favs]);

  return (
    <div className={styles.favs_image_block}>
      {filterData &&
        filterData.map((item, index) => {
          return (
            <div key={item.id} className={styles.favs_img_box}>
              <img className={styles.favs_img} src={item.img} />
              <h1 className={styles.media_img_name}>Residential</h1>
              <p className={styles.media_img_text}>
                Minimalist Interior
                <br /> Design
              </p>
              <div className={styles.heard_box}>
                <FaRegHeart className={styles.heard} />
              </div>
            </div>
          );
        })}

      <ReactPaginate
        previousLabel={
          <button className={styles.back_btn}>
            <IconContext.Provider value={{ color: "#B8C1CC", size: "36px" }}>
              <HiOutlineArrowSmLeft className={styles.pagin_arrows} />
              Previous
            </IconContext.Provider>
          </button>
        }
        containerClassName={styles.favs_pagination}
        pageClassName={styles.favs_page_li}
        activeClassName={styles.active_page}
        onPageChange={() => setPage(searchParams.get('page'))}
        pageCount={Math.ceil(favs.length / n)}
        breakLabel="..."
        pageRangeDisplayed={2}
        nextLabel={
          <button className={styles.next_btn}>
            <IconContext.Provider value={{ color: "#B8C1CC", size: "36px" }}>
              Next
              <HiOutlineArrowSmRight className={styles.pagin_arrows} />
            </IconContext.Provider>
          </button>
        }
      />
    </div>
  );
}

export default Favs_Image;
