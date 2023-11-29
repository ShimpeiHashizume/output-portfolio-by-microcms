import PageTitle from "@/component/PageTitle/PageTitle";
import { getAllCategories, getAllPosts } from "@/lib/api";
import React from "react";
import AllCategories from "@/component/AllCategories/AllCategories";
import PostList from "@/component/PostList/PostList";

import { siteMeta } from "@/lib/constants";
const { siteTitle, siteUrl } = siteMeta;

import { openGraphMetadata, twitterMetadata } from "@/lib/baseMetadata";

const Blog = async () => {
  const posts = await getAllPosts(10);
  const categories = await getAllCategories();

  return (
    <div className="mainBlock">
      <PageTitle title="Blog" desc="ブログ" />
      <AllCategories categories={categories} />
      <PostList posts={posts} />
    </div>
  );
};

const pageTitle = "Blog";
const pageDesc = "Shimpei Hashizumeのブログ一覧ページになります";
const ogpTitle = `${pageTitle} | ${siteTitle}`;
const ogpUrl = new URL("/blog", siteUrl).toString();

export const metadata = {
  title: pageTitle,
  description: pageDesc,

  openGraph: {
    ...openGraphMetadata,
    title: ogpTitle,
    description: pageDesc,
    url: ogpUrl,
  },
  twitter: {
    ...twitterMetadata,
    title: ogpTitle,
    description: pageDesc,
  },
};

export default Blog;
