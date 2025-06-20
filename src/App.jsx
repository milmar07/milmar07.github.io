import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import ProjectGrid from "./components/ProjectGrid";
import ScrollIndicator from "./components/ScrollIndicator";
import Timeline from "./components/GroupedExperience/Timeline";
import styles from "./App.module.css";

export default function App() {
  useEffect(() => {
    document.body.classList.add("dark"); // Force dark mode
  }, []);

  return (
    <div className={styles.container}>
      <Navbar />

      <main>
        {/* Hero section with intro and scroll prompt */}
        <section className={styles.heroSection}>
          <AboutMe />
          <ScrollIndicator />
        </section>

        {/* New interactive timeline experience section */}
        <section className={styles.experienceSection}>
          <Timeline />
        </section>

        <ProjectGrid />
      </main>
    </div>
  );
}
