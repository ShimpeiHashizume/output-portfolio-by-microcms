import React from "react";
import styles from "./PostHeader.module.css";
import ConvertDate from "../ConvertDate/ConvertDate";

const PostHeader = ({ title, publish }: { title: string; publish: string }) => {
  return (
    <>
      <div className={styles.head}>
        <h1 className={styles.title}>{title}</h1>
        <ConvertDate dateISO={publish} />
      </div>
    </>
  );
};

export default PostHeader;
