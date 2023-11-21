import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <p>
          <small className={styles.copyright}>&copy;2023 Shimpei Hashizume - Build with Next.js and microCMS</small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
