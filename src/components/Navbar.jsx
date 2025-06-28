import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const SECTIONS = ["hero", "about", "services", "portfolio", "resume", "blog", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let currentSection = "hero"; // default fallback

      SECTIONS.forEach((sectionId) => {
        const sectionEl = document.getElementById(sectionId);
        if (sectionEl) {
          const offsetTop = sectionEl.offsetTop;
          if (scrollPosition >= offsetTop) {
            currentSection = sectionId;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <a href="#hero" className={styles.logo}>
        <img src="/logo.png" alt="Marko Logo" className={styles.logoImage} />
      </a>
      <ul className={styles.navLinks}>
        {SECTIONS.map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className={activeSection === section ? styles.activeLink : ""}
            >
              {section === "hero" ? "Home" : capitalize(section)}
            </a>
          </li>
        ))}
        <li><button className={styles.loginBtn}>Login</button></li>
      </ul>
    </nav>
  );
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
