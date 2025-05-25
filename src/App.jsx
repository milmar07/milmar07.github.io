import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import styles from "./App.module.css";
import projects from "./data/projects";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className={styles.container}>
      <button className={styles.toggleTopRight} onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <div className={styles.backdrop}>
        <header className={styles.header}>
          <motion.h1 className={styles.name} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>Marko Markovic</motion.h1>
          <p className={styles.tagline}>Full-Stack Developer</p>
          <div className={styles.socialLinks}>
            <a href="https://www.linkedin.com/in/markom95" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/milmar07" target="_blank" rel="noreferrer"><FaGithub /></a>
          </div>
        </header>

        <main className={styles.main}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Summary</h2>
            <p>Passionate about distributed systems, backend architecture, and clean, responsive frontend design. Proficient in React, Flask, Laravel, PostgreSQL, and Docker.</p>
          </section>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Skills</h2>
            <div className={styles.grid}>
              <div>React.js</div><div>Laravel</div><div>Flask</div><div>Node.js</div>
              <div>PostgreSQL</div><div>Docker</div><div>HTML/CSS</div><div>JavaScript/ES6</div>
            </div>
          </section>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <div className={styles.experience}>
              <p><strong>University of Bern – Web Developer (2022–2024)</strong></p>
              <ul>
                <li>Developed Smart City sensor system (React + Flask)</li>
                <li>Integrated Docker, CI/CD, OAuth</li>
              </ul>
              <p><strong>Cryptomine.rs – Full Stack Developer (2014–2019)</strong></p>
              <ul>
                <li>Built crypto platform with Laravel + React</li>
              </ul>
            </div>
          </section>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Projects</h2>
            <div className={styles.grid}>
              {projects.map((project, i) => (
                <motion.div key={i} className={styles.card} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <small>{project.tech.join(" • ")}</small>
                  <p>
                    <a href={project.github} target="_blank">GitHub</a> • <a href={project.demo} target="_blank">Demo</a>
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Contact</h2>
            <p>Email: <a href="mailto:markovic995@yahoo.com">markovic995@yahoo.com</a></p>
            <p>Phone: +41 78 310 85 10</p>
            <p>Location: Studen BE, Switzerland</p>
          </section>
        </main>
        <footer>
          <small>&copy; {new Date().getFullYear()} Marko Markovic. All rights reserved.</small>
        </footer>
      </div>
    </div>
  );
}
