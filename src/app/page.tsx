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

export default function Home() {
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
    </div>
  );
}
