"use client";

import React, { useContext, useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { navList } from "@/constants/NavLinks";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { usePathname } from "next/navigation";
import { ThemeContext } from "@/context/ThemeContext";

const Navbar = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [ariaExpanded, setAriaExpanded] = useState(false);
  const [ariaHidden, setAriaHidden] = useState(false);

  const toggleNav = () => {
    setNavIsOpen((prev) => !prev);
    setAriaExpanded((prev) => !prev);
    setAriaHidden((prev) => !prev);
  };

  const closeNav = () => {
    setNavIsOpen(false);
    setAriaExpanded(false);
    setAriaHidden(true);
  };

  const pathname = usePathname();

  const contextValue = useContext(ThemeContext);

  const { mode } = contextValue as { mode: string };

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <h1 className={styles.logo}>
          <Link href="/" className={styles.logoText}>
            Yeaaar
          </Link>
        </h1>
        <nav className={styles.navigation}>
          {navIsOpen && (
            <style jsx global>{`
              @media (max-width: 767px) {
                body {
                  overflow: hidden;
                  position: fixed;
                  width: 100%;
                }
              }
            `}</style>
          )}
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
        <nav
          id="drawer"
          className={`${styles.spNavigation} ${navIsOpen ? styles.navOpen : styles.navClose}`}
          style={mode === "light" ? { backgroundColor: "#fff" } : { backgroundColor: "#111" }}
          aria-hidden={ariaHidden}
        >
          <ul className={styles.navigationList}>
            {navList.map((item) => (
              <li key={item.id} className={styles.navigationItem}>
                <Link
                  href={item.url}
                  className={`${styles.navigationItemLink} ${pathname === item.url && styles.current}`}
                  style={mode === "light" ? { color: "#111" } : { color: "#bbb" }}
                  onClick={closeNav}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.spDarkModeToggle}>
          <DarkModeToggle />
        </div>
        <button onClick={toggleNav} className={`${styles.hamburgerButton} ${navIsOpen ? styles.hamburgerOpen : styles.hamburgerClose}`} aria-controls="drawer" aria-expanded={ariaExpanded}>
          <span className="visually-hidden">開く</span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
