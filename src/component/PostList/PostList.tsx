import Link from "next/link";
import React from "react";
import styles from "./PostList.module.css";
import { categoriesProps, postProps } from "@/type/type";
import ConvertDate from "../ConvertDate/ConvertDate";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const PostList = ({ posts, detailButtonOn }: { posts: postProps[]; detailButtonOn?: boolean }) => {
  console.log(posts);
  return (
    <div className={styles.postBlock}>
      {posts.map((post: postProps) => (
        <article key={post.slug} className={styles.postItem}>
          <div className={styles.postMain}>
            <div className={styles.postHead}>
              <div className={styles.date}>
                <ConvertDate dateISO={post.publishDate} />
              </div>
              <div className={styles.categoryContainer}>
                {post.categories.map((category: categoriesProps) => (
                  <Link key={category.id} href={`/category/${category.slug}`} className={styles.categoryLink}>
                    <span className={styles.categoryItem}>{category.name}</span>
                  </Link>
                ))}
              </div>
            </div>
            <Link href={`/blog/${post.slug.toLowerCase()}`} className={styles.postTitleLink}>
              <h2 className={styles.postTitle}>{post.title}</h2>
            </Link>
          </div>
        </article>
      ))}
      {detailButtonOn && (
        <div className={styles.moreButtonWrap}>
          <PrimaryButton href="/blog">記事をもっとみる</PrimaryButton>
        </div>
      )}
    </div>
  );
};

export default PostList;
