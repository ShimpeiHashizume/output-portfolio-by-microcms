import React from "react";
import styles from "./PageTitle.module.css";
import { pageTitleProps } from "@/type/type";

const PageTitle = ({ title, desc }: pageTitleProps) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.desc}>{desc}</p>
    </div>
  );
};

export default PageTitle;
