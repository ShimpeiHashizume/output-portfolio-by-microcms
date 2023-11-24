import styles from "./page.module.css";
import PageTitle from "@/component/PageTitle/PageTitle";
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

const postData = [
  {
    title: "こちらは記事タイトルになります",
    date: "2023/11/24",
    category: "Next.js",
    url: "hoge",
  },
  {
    title: "こちらは記事タイトルになります",
    date: "2023/11/25",
    category: "React",
    url: "piyo",
  },
  {
    title: "こちらは記事タイトルになります",
    date: "2023/11/28",
    category: "TypeScript",
    url: "fuga",
  },
];

export default function Home() {
  const articleSort = postData.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

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
        {articleSort.map((item) => (
          <article key={item.url} className={styles.postItem}>
            <div className={styles.postMain}>
              <div className={styles.postHead}>
                <time className={styles.date}>{item.date}</time>
                <div className={styles.categoryContainer}>
                  <Link href={`/${item.category.toLowerCase()}`} className={styles.categoryLink}>
                    <span className={styles.categoryItem}>{item.category}</span>
                  </Link>
                </div>
              </div>
              <Link href={`/${item.url}`} className={styles.postTitleLink}>
                <h2 className={styles.postTitle}>{item.title}</h2>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
