import React from "react"
import styles from './homepage.module.css';
import { Link } from 'gatsby';
import cs from 'classnames';

export default () => (
  <div>
    <div className={styles.header} />
    <div className={styles.imageContainer}>
      <img src="/images/profile-pic.jpg"></img>
    </div>
    <div className={styles.nameContainer}>Hi, I am Tejasva&nbsp;Dhyani</div>
    <div className={styles.subtext}>Javascript Ninja, UI/UX Developer</div>
    <div className={styles.btnContainer}>
      <div className={cs(styles.button, styles.colored)}><Link to="/resume">Resume</Link></div>
      <div className={styles.button}><Link to="/blog">Blog</Link></div>
    </div>
  </div>
);
