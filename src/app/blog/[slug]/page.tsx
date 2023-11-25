import React from "react";
import styles from "./page.module.css";
import { getPostBySlug } from "@/lib/api";

const Detail = async () => {
  const slug = "nexttypescript";
  const post = await getPostBySlug(slug);
  console.log(post);

  return (
    <div className="mainBlock">
      <div className={styles.inner}>
        <h1>{post.title}</h1>
      </div>
    </div>
  );
};

export default Detail;
