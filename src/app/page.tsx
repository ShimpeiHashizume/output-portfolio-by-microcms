import styles from "./page.module.css";
import PageTitle from "@/component/PageTitle/PageTitle";
import { getAllPosts } from "@/lib/api";
import Link from "next/link";

const tagData = [
  {
    name: "JavaScript",
    url: "javascript",
  },
  {
    name: "React",
    url: "react",
  },
  {
    name: "Next.js",
    url: "next.js",
  },
  {
    name: "Tailwindcss",
    url: "tailwindcss",
  },
  {
    name: "Storybook",
    url: "storybook",
  },
];

// const postData = [
//   {
//     title: "こちらは記事タイトルになります",
//     date: "2023/11/24",
//     category: "Next.js",
//     url: "hoge",
//   },
//   {
//     title: "こちらは記事タイトルになります",
//     date: "2023/11/25",
//     category: "React",
//     url: "piyo",
//   },
//   {
//     title: "こちらは記事タイトルになります",
//     date: "2023/11/28",
//     category: "TypeScript",
//     url: "fuga",
//   },
// ];

export default async function Home() {
  const posts = await getAllPosts(4);
  console.log(posts);
  // const articleSort = postData.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

  return (
    <div className="mainBlock">
      <PageTitle title="Output Code" desc="アウトプット用のポートフォリオサイト" />
      <ul className={styles.tagList}>
        {tagData.map((tag) => (
          <li key={tag.url} className={styles.tagItem}>
            <Link href={tag.url} className={styles.tagItemLink}>
              {tag.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.postBlock}>
        {posts.map((post: any) => (
          <article key={post.slug} className={styles.postItem}>
            <div className={styles.postMain}>
              <div className={styles.postHead}>
                <time className={styles.date}>{post.publishDate}</time>
                <div className={styles.categoryContainer}>
                  <Link href={`${post.slug.toLowerCase()}`} className={styles.categoryLink}>
                    <span className={styles.categoryItem}>{post.slug}</span>
                  </Link>
                </div>
              </div>
              <Link href={`/blog/${post.slug.toLowerCase()}`} className={styles.postTitleLink}>
                <h2 className={styles.postTitle}>{post.title}</h2>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
