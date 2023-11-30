import React from "react";
import styles from "./page.module.css";
import { getAllSlugs, getPostBySlug } from "@/lib/api";
import PostHeader from "@/component/PostHeader/PostHeader";
import ConvertBody from "@/component/ConvertBody/ConvertBody";
import PostBody from "@/component/PostBody/PostBody";
import Pagination from "@/component/Pagination/Pagination";

import { eyecatchLocal, siteMeta } from "@/lib/constants";
const { siteTitle, siteUrl } = siteMeta;

import { openGraphMetadata, twitterMetadata } from "@/lib/baseMetadata";
import { extractText } from "@/lib/extractText";

const Detail = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const post = await getPostBySlug(slug);

  return (
    <div className="mainBlock">
      <div className={styles.inner}>
        <PostHeader title={post.title} publish={post.publishDate} categories={post.categories} />
        <PostBody>
          <ConvertBody contentHTML={post.contents} />
        </PostBody>
        <Pagination prevText="記事一覧に戻る" prevUrl="/blog" />
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

export const generateMetadata = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const post = await getPostBySlug(slug);
  const { title: pageTitle, publishDate: publish, contents, categories } = post;

  const pageDesc = extractText(contents);
  const eyecatch = post.eyecatch ?? eyecatchLocal;

  const ogpTitle = `${pageTitle} | ${siteTitle}`;
  const ogpUrl = new URL(`/blog/${slug}`, siteUrl).toString();

  const metadata = {
    title: pageTitle,
    description: pageDesc,

    openGraph: {
      ...openGraphMetadata,
      title: ogpTitle,
      description: pageDesc,
      url: ogpUrl,
      images: [
        {
          url: eyecatch.url,
          width: eyecatch.width,
          height: eyecatch.height,
        },
      ],
    },
    twitter: {
      ...twitterMetadata,
      title: ogpTitle,
      description: pageDesc,
      images: [eyecatch.url],
    },
  };
  return metadata;
};

export default Detail;
