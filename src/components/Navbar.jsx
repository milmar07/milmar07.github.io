import React, { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.logo}>
        <img src="/logo.png" alt="Marko Logo" className={styles.logoImage} />
      </a>
      <ul className={styles.navLinks}>
        <li><a href="#">Home</a></li>
        <li
          className={styles.dropdown}
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <span>Projects ▾</span>
          {dropdownOpen && (
            <ul className={styles.dropdownMenu}>
              <li><a href="https://github.com/milmar07/project1" target="_blank" rel="noreferrer">Project 1</a></li>
              <li><a href="https://github.com/milmar07/project2" target="_blank" rel="noreferrer">Project 2</a></li>
            </ul>
          )}
        </li>
        <li><a href="/Marko-Markovic-CV.pdf" download>CV</a></li>
        <li><a href="#">Blog</a></li>
        <li><button className={styles.loginBtn}>Login</button></li>
      </ul>
    </nav>
  );
}
