import { motion } from "framer-motion";
import styles from "../App.module.css";

export default function AboutMe() {
  return (
    <section className={styles.aboutSection}>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={styles.heroName}
      >
        Hi, I'm Marko Markovic
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className={styles.heroDescription}
      >
        I craft full-stack experiences with React, Node.js, and elegant design. Curious by nature, driven by code, and inspired by simplicity.
      </motion.p>
    </section>
  );
}
