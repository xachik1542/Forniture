import { useEffect, useState } from "react";
import styles from "./style.module.css";
import { useSearchParams } from "react-router-dom";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import { useTranslation } from "react-i18next";

function Pagination({ totalPages }) {
  const [t] = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  let urlPage = +searchParams.get("page");
  const [maxPagesToShow, setMaxPagesToShow] = useState(5);
  let startPage = Math.max(1, urlPage - Math.floor(maxPagesToShow / 2));
  let endPage = startPage + maxPagesToShow - 1;

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 320 && window.innerWidth < 372) {
        setMaxPagesToShow(3);
      } else if (window.innerWidth > 372 && window.innerWidth < 480) {
        setMaxPagesToShow(4);
      } else {
        setMaxPagesToShow(5);
      }
    });
  }, []);

  const handlePageChange = (page) => {
    setSearchParams({ page: page });
  };

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.pagination_block}>
      <button
        className={
          urlPage == 1 ? styles.previous_btn_active : styles.previous_btn
        }
        onClick={() => handlePageChange(urlPage - 1)}
        disabled={urlPage == 1}
      >
        <HiArrowSmLeft className={styles.pagin_arrows} />
        <span>{t("previous")}</span>
      </button>

      <ul className={styles.count_ul_block}>
        {pages.map((page, index) => {
          return (
            <li
              key={index}
              className={
                urlPage == page
                  ? styles.count_active_li
                  : styles.count_passive_li
              }
              onClick={() => handlePageChange(page)}
            >
              {page}
            </li>
          );
        })}
      </ul>

      <button
        className={
          urlPage == totalPages ? styles.next_btn_active : styles.next_btn
        }
        onClick={() => handlePageChange(urlPage + 1)}
        disabled={urlPage === totalPages}
      >
        <span>{t("next")}</span>
        <HiArrowSmRight className={styles.pagin_arrows} />
      </button>
    </div>
  );
}

export default Pagination;
