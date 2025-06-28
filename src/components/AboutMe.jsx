import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import styles from "./AboutMe.module.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function AboutMe() {
  return (
    <section className={styles.aboutSectionGrid}>
      <div className={styles.leftContent}>
        <motion.p
          className={styles.welcomeText}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          WELCOME TO MY WORLD
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className={styles.green}>Marko Markovic</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className={styles.typingWrapper}
        >
          <TypeAnimation
            sequence={[
              "Fullstack Developer.",
              2000,
              "Professional Coder.",
              2000,
              "Open Source Contributor.",
              2000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className={styles.typedText}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className={styles.heroDescription}
        >
          I'm passionate about building thoughtful, elegant digital products.
          Focused on frontend finesse and backend logic, I enjoy turning complex
          ideas into scalable solutions.
        </motion.p>

        <p className={styles.socialLabel}>FIND ME WITH</p>
        <div className={styles.socialLinks}>
          <a href="https://github.com/milmar07" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
        </div>
      </div>

      <motion.div
        className={styles.rightImage}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img src="/profile.png" alt="Marko" />
      </motion.div>
    </section>
  );
}
