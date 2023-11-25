import styles from "./page.module.css";
import PageTitle from "@/component/PageTitle/PageTitle";
import { getAllPosts } from "@/lib/api";
import { postProps } from "@/type/type";
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

export default async function Home() {
  const posts = await getAllPosts(4);
  console.log(posts);
  const articleSort = posts.sort((a: { publishDate: string }, b: { publishDate: string }) => Date.parse(b.publishDate) - Date.parse(a.publishDate));

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
        {articleSort.map((post: postProps) => (
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
