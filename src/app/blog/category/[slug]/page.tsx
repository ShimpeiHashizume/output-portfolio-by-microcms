import AllCategories from "@/component/AllCategories/AllCategories";
import PageTitle from "@/component/PageTitle/PageTitle";
import PostList from "@/component/PostList/PostList";
import { getAllCategories, getAllPostsByCategories } from "@/lib/api";
import React from "react";

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

export default Category;
