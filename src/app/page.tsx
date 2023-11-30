import { getAllCategories, getAllPosts } from "@/lib/api";
import PageTitle from "@/component/PageTitle/PageTitle";
import AllCategories from "@/component/AllCategories/AllCategories";
import PostList from "@/component/PostList/PostList";

export default async function Home() {
  const posts = await getAllPosts(4);
  const categories = await getAllCategories();

  return (
    <div className="mainBlock">
      <PageTitle title="Saving Knowledge Code" desc="アウトプット用のポートフォリオサイト" />
      <AllCategories categories={categories} />
      <PostList posts={posts} detailButtonOn />
    </div>
  );
}
