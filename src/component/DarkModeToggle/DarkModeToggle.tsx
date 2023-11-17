"use client";

import React, { useContext } from "react";
import styles from "./DarkModeToggle.module.css";
import { ThemeContext } from "@/context/ThemeContext";

const DarkModeToggle: React.FC = () => {
  const contextValue = useContext(ThemeContext);

  const { toggle, mode } = contextValue as { toggle: () => void; mode: string };

  return (
    <button className={styles.button} onClick={toggle}>
      <span className={styles.icon}>🌙</span>
      <span className={styles.icon}>🌞</span>
      <span className={styles.circle} style={mode === "light" ? { left: "5px" } : { right: "5px" }}></span>
    </button>
  );
};

export default DarkModeToggle;
