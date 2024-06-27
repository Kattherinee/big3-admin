import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <img src="src\assets\images\logo.png" alt="logo" />
    </div>
    <div className={styles.user}>
      <span>John Smith</span>
      <img src="src\assets\icon\profile.svg" alt="Photo" />
    </div>
  </header>
);

export default Header;
