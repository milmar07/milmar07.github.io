import React, { useState } from "react";
import styles from "./Timeline.module.css";
import { experienceGroups } from "./experienceData";

export default function Timeline() {
  const [activeSkill, setActiveSkill] = useState(experienceGroups[0].skills[0]);

  const allSkills = experienceGroups.flatMap(group =>
    group.skills.map(skill => ({ ...skill, company: group.company }))
  );

  const handleNav = (dir) => {
    const idx = allSkills.findIndex(s => s.id === activeSkill.id);
    const next = (dir === "next") 
      ? allSkills[(idx + 1) % allSkills.length]
      : allSkills[(idx - 1 + allSkills.length) % allSkills.length];
    setActiveSkill(next);
  };

  return (
    <div className={styles.timelineWrapper}>
      <div className={styles.iconRow}>
        {allSkills.map(skill => (
          <div
            key={skill.id}
            className={`${styles.skillIcon} ${activeSkill.id === skill.id ? styles.active : ""}`}
            onClick={() => setActiveSkill(skill)}
          >
            <img src={skill.icon} alt={skill.label} />
          </div>
        ))}
      </div>

      <div className={styles.detailBox}>
        <button onClick={() => handleNav("prev")} className={styles.navBtn}>←</button>

        <div className={styles.cardContent}>
          <h3>{activeSkill.label}</h3>
          <p className={styles.company}>{activeSkill.company}</p>
          <p>{activeSkill.story}</p>
        </div>

        <button onClick={() => handleNav("next")} className={styles.navBtn}>→</button>
      </div>
    </div>
  );
}
