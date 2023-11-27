import React from "react";
import styles from "./page.module.css";
import { getAllSlugs, getPostBySlug } from "@/lib/api";
import PostHeader from "@/component/PostHeader/PostHeader";
import ConvertBody from "@/component/ConvertBody/ConvertBody";
import PostBody from "@/component/PostBody/PostBody";

const Detail = async ({ params }: { params: { slug: string } }) => {
  // console.log(params);
  const slug = params.slug;
  const post = await getPostBySlug(slug);

  return (
    <div className="mainBlock">
      <div className={styles.inner}>
        <PostHeader title={post.title} publish={post.publishDate} />
        <PostBody>
          <ConvertBody contentHTML={post.contents} />
        </PostBody>
      </div>
    </div>
  );
};

export const generateStaticParams = async () => {
  const allSlugs = await getAllSlugs();

  return allSlugs.map(({ slug }: { slug: string }) => {
    return { slug: slug };
  });
};

export default Detail;
