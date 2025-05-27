import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import ProjectGrid from "./components/ProjectGrid";
import ScrollIndicator from "./components/ScrollIndicator";

import styles from "./App.module.css";

export default function App() {
  useEffect(() => {
    document.body.classList.add("dark"); // Force dark mode
  }, []);

  return (
  <div className={styles.container}>
    <Navbar />
    <main>
      <section className={styles.heroSection}>
        <AboutMe />
        <ScrollIndicator />
      </section>
      <ProjectGrid />
    </main>
  </div>
);

}
