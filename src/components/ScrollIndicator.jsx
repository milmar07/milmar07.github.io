import styles from "./ScrollIndicator.module.css";

export default function ScrollIndicator() {
  return (
    <div className={styles.scrollContainer}>
      <div className={styles.mouse}>
        <div className={styles.wheel}></div>
      </div>
      <span className={styles.arrow}></span>
    </div>
  );
}
