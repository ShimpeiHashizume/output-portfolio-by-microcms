import React from "react";
import styles from "./page.module.css";
import { getAllSlugs, getPostBySlug } from "@/lib/api";
import PostHeader from "@/component/PostHeader/PostHeader";
import ConvertBody from "@/component/ConvertBody/ConvertBody";
import PostBody from "@/component/PostBody/PostBody";
import Pagination from "@/component/Pagination/Pagination";

const Detail = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const post = await getPostBySlug(slug);

  return (
    <div className="mainBlock">
      <div className={styles.inner}>
        <PostHeader title={post.title} publish={post.publishDate} />
        <PostBody>
          <ConvertBody contentHTML={post.contents} />
        </PostBody>
        <Pagination prevText="記事一覧に戻る" prevUrl="/blog" nextText="記事一覧に進む" nextUrl="/blog" />
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
