import { ButtonProps } from "@/type/type";
import Link from "next/link";
import React from "react";
import styles from "./PrimaryButton.module.css";

const PrimaryButton = ({ href, onClick, children }: ButtonProps) => {
  if (href) {
    return (
      <Link href={href} className={styles.button}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};

export default PrimaryButton;
