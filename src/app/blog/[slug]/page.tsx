import React from "react";
import styles from "./page.module.css";
import { getPostBySlug } from "@/lib/api";
import PostHeader from "@/component/PostHeader/PostHeader";

const Detail = async () => {
  const slug = "nexttypescript";
  const post = await getPostBySlug(slug);
  console.log(post);

  return (
    <div className="mainBlock">
      <div className={styles.inner}>
        <PostHeader title={post.title} publish={post.publishDate} />
      </div>
    </div>
  );
};

export default Detail;
