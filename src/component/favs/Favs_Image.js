import styles from "./style.module.css";
import { FaRegHeart } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { data } from "../../json/portfolio/project";

import { Pagination, Stack } from "@mui/material";
import { useSearchParams } from "react-router-dom";

function Favs_Image() {
  const [favsData, setFavsData] = useState([]);
  const itemsPerPage = 2;
  const pageCount = Math.ceil(favsData.length / itemsPerPage);
  const [searchParams, setSearchParams] = useSearchParams();
  let urlPage = +searchParams.get("page");
  const [currentPage, setCurrentPage] = useState(urlPage);

  useEffect(() => {
    setFavsData(data.filter((item) => item.isFavorite == true));
  }, [data]);

  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return favsData.slice(startIndex, endIndex);
  };

  const handlePageChange = (event, page) => {
    setSearchParams({ page: page });
  };

  useEffect(() => {
    setCurrentPage(urlPage);
  }, [urlPage]);

  return (
    <div className={styles.container_block}>
      <div className={styles.images_block}>
        {getPaginatedData().map((item) => {
          return (
            <div key={item.id} className={styles.favs_box}>
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
      </div>

      <Stack>
        <Pagination
          count={pageCount}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          size="large"
        />
      </Stack>
    </div>
  );
}

export default Favs_Image;
