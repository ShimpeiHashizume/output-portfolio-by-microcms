import React from "react";
import styles from "./Pagination.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";

const Pagination = ({ prevText = "", prevUrl = "", nextText = "", nextUrl = "" }) => {
  return (
    <ul className={styles.pagination}>
      {prevText && prevUrl && (
        <li className={styles.prev}>
          <Link href={prevUrl}>
            <FontAwesomeIcon icon={faArrowLeft} className={styles.icon} />
            <span>{prevText}</span>
          </Link>
        </li>
      )}
      {nextText && nextUrl && (
        <li className={styles.next}>
          <Link href={nextUrl}>
            <span>{nextText}</span>
            <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
          </Link>
        </li>
      )}
    </ul>
  );
};

export default Pagination;
