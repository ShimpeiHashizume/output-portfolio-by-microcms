import React from "react";
import { categoriesProps } from "@/type/type";
import styles from "./AllCategories.module.css";
import Link from "next/link";

const AllCategories = ({ categories }: { categories: categoriesProps[] }) => {
  return (
    <ul className={styles.tagList}>
      {categories.map((category: categoriesProps) => (
        <li key={category.id} className={styles.tagItem}>
          <Link href={`/blog/category/${category.slug}`} className={styles.tagItemLink}>
            {category.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default AllCategories;
