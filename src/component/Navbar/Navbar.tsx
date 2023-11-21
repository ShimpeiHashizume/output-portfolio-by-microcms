"use client";

import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { navList } from "@/constants/NavLinks";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <h1 className={styles.logo}>
          <Link href="/" className={styles.logoText}>
            Yeaaar
          </Link>
        </h1>
        <nav className={styles.navigation}>
          <ul className={styles.navigationList}>
            {navList.map((item) => (
              <li key={item.id} className={styles.navigationItem}>
                <Link href={item.url} className={`${styles.navigationItemLink} ${pathname === item.url && styles.current}`}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <DarkModeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
