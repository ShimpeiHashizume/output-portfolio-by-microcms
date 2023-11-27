import React from "react";
import styles from "./Pagination.module.css";
import Link from "next/link";

const Pagination = ({ prevText = "", prevUrl = "", nextText = "", nextUrl = "" }) => {
  return (
    <ul className={styles.pagination}>
      {prevText && prevUrl && (
        <li className={styles.prev}>
          <Link href={prevUrl}>{prevText}</Link>
        </li>
      )}
      {nextText && nextUrl && (
        <li className={styles.next}>
          <Link href={nextUrl}>{nextText}</Link>
        </li>
      )}
    </ul>
  );
};

export default Pagination;
