import Link from "next/link";
import { getAllCategories, getAllPosts } from "@/lib/api";
import { categoriesProps, postProps } from "@/type/type";
import PageTitle from "@/component/PageTitle/PageTitle";
import styles from "./page.module.css";
import ConvertDate from "@/component/ConvertDate/ConvertDate";

export default async function Home() {
  const posts = await getAllPosts(4);
  const categories = await getAllCategories();

  return (
    <div className="mainBlock">
      <PageTitle title="Output Code" desc="アウトプット用のポートフォリオサイト" />
      <ul className={styles.tagList}>
        {categories.map((category: categoriesProps) => (
          <li key={category.id} className={styles.tagItem}>
            <Link href={`/category/${category.slug}`} className={styles.tagItemLink}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.postBlock}>
        {posts.map((post: postProps) => (
          <article key={post.slug} className={styles.postItem}>
            <div className={styles.postMain}>
              <div className={styles.postHead}>
                <div className={styles.date}>
                  <ConvertDate dateISO={post.publishDate} />
                </div>
                <div className={styles.categoryContainer}>
                  {post.categories.map((category: categoriesProps) => (
                    <Link key={category.id} href={`/category/${category.slug}`} className={styles.categoryLink}>
                      <span className={styles.categoryItem}>{category.name}</span>
                    </Link>
                  ))}
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
