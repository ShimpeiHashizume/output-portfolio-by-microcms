"use client";

import { createContext, useState, ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext({});

export const ThemeProider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState("dark");

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
