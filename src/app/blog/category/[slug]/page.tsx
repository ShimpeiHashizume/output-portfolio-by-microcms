import AllCategories from "@/component/AllCategories/AllCategories";
import PageTitle from "@/component/PageTitle/PageTitle";
import PostList from "@/component/PostList/PostList";
import { getAllCategories, getAllPostsByCategories } from "@/lib/api";
import React from "react";

import { siteMeta } from "@/lib/constants";
const { siteTitle, siteUrl } = siteMeta;

import { openGraphMetadata, twitterMetadata } from "@/lib/baseMetadata";

const Category = async ({ params }: { params: { slug: string } }) => {
  const catSlug = params.slug;
  const allCats = await getAllCategories();
  const cat = allCats.find(({ slug }: { slug: string }) => slug === catSlug);
  const name = cat.name;
  const posts = await getAllPostsByCategories(cat.id);
  const categories = await getAllCategories();
  return (
    <div className="mainBlock">
      <PageTitle title={name} desc="カテゴリ別記事" />
      <AllCategories categories={categories} />
      <PostList posts={posts} />
    </div>
  );
};

export const dynamicParams = false;
export async function generateStaticParams() {
  const allCats = await getAllCategories();

  return allCats.map(({ slug }: { slug: string }) => {
    return { slug: slug };
  });
}

export const generateMetadata = async ({ params }: { params: { slug: string } }) => {
  const catSlug = params.slug;

  const allCats = await getAllCategories();
  const cat = allCats.find(({ slug }: { slug: string }) => slug === catSlug);

  const pageTitle = cat.name;
  const pageDesc = `${pageTitle}に関する記事`;
  const ogpTitle = `${pageTitle} | ${siteTitle}`;
  const ogpUrl = new URL(`/blog/category/${catSlug}`, siteUrl).toString();

  const metadata = {
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
  return metadata;
};

export default Category;
