import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Timeline from "./components/GroupedExperience/Timeline";
import ProjectGrid from './components/ProjectGrid';
import SectionDivider from "./components/SectionDivider"; 

import styles from "./App.module.css";

export default function App() {
  useEffect(() => {
    document.body.classList.add("dark");
  }, []);

  return (
    <div className={styles.container}>
      <Navbar />
      <main>
          <AboutMe />
          <SectionDivider />
          <Timeline />
          <SectionDivider />
          <ProjectGrid />
      </main>
    </div>
  );
}
