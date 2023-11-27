import Link from "next/link";
import { getAllCategories, getAllPosts } from "@/lib/api";
import { categoriesProps, postProps } from "@/type/type";
import PageTitle from "@/component/PageTitle/PageTitle";
import styles from "./page.module.css";
import ConvertDate from "@/component/ConvertDate/ConvertDate";
import PrimaryButton from "@/component/PrimaryButton/PrimaryButton";
import AllCategories from "@/component/AllCategories/AllCategories";
import PostList from "@/component/PostList/PostList";

export default async function Home() {
  const posts = await getAllPosts(4);
  const categories = await getAllCategories();

  return (
    <div className="mainBlock">
      <PageTitle title="Output Code" desc="アウトプット用のポートフォリオサイト" />
      <AllCategories categories={categories} />
      <PostList posts={posts} detailButtonOn />
    </div>
  );
}
