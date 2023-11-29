import React from "react";
import styles from "./PostHeader.module.css";
import ConvertDate from "../ConvertDate/ConvertDate";
import Link from "next/link";
import { categoriesProps } from "@/type/type";

const PostHeader = ({ title, publish, categories }: { title: string; publish: string; categories: categoriesProps[] }) => {
  return (
    <>
      <div className={styles.head}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.infoWrap}>
          <ConvertDate dateISO={publish} />
          <div className={styles.categoryWrap}>
            {categories.map((item: categoriesProps) => (
              <Link key={item.id} href={`/blog/category/${item.slug}`}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PostHeader;
