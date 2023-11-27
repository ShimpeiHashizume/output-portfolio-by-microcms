import PageTitle from "@/component/PageTitle/PageTitle";
import { getAllCategories, getAllPosts } from "@/lib/api";
import React from "react";
import AllCategories from "@/component/AllCategories/AllCategories";
import PostList from "@/component/PostList/PostList";

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

export default Blog;
