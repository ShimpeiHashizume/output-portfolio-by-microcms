import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <p>
          <small className={styles.copyright}>&copy;2023 Shimpei Hashizume. All rights reserved.</small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
