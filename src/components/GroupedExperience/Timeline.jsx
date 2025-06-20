import React, { useEffect, useState, useRef } from "react";
import styles from "./Timeline.module.css";
import { experienceGroups } from "./experienceData";
import { motion, useInView } from "framer-motion";

export default function Timeline() {
  const sectionRefs = useRef({});
  const [activeSkill, setActiveSkill] = useState(null);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const skillEntries = Object.entries(sectionRefs.current);

    for (let [id, el] of skillEntries) {
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (scrollTop >= top - 200) {
          setActiveSkill(id);
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // trigger once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
  const el = sectionRefs.current[id];
  if (el) {
    const yOffset = -80; // Adjust this to match navbar height
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};



  return (
    <div className={styles.timelineWrapper}>
      <div className={styles.timeline}>
        {experienceGroups.flatMap(group =>
          group.skills.map(skill => (
            <div
              key={skill.id}
              className={`${styles.skillIcon} ${activeSkill === skill.id ? styles.active : ""}`}
              onClick={() => scrollToSection(skill.id)}
              style={{ cursor: "pointer" }}
            >
              <img src={skill.icon} alt={skill.label} />
            </div>
          ))
        )}
      </div>

      <div className={styles.stories}>
        {experienceGroups.map((group) => (
          <div key={group.company}>
            <div className={styles.company}>{group.company}</div>
            {group.skills.map((skill) => {
              const ref = useRef(null);
              const inView = useInView(ref, { once: true, margin: "-100px 0px" });

              return (
                <motion.div
                  key={skill.id}
                  ref={(el) => {
                    ref.current = el;
                    sectionRefs.current[skill.id] = el;
                  }}
                  className={styles.skillBlock}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <h3>{skill.label}</h3>
                  <p>{skill.story}</p>
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
