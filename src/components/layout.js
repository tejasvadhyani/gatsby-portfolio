import React from "react"
import styles from './layout.module.css';

export default ({ children }) => (
  <div className={styles.container}>
    <div className={styles.header}>
      Header
    </div>
    {children}
  </div>
);
