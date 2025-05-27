import projects from '../data/projects';
import styles from './ProjectGrid.module.css';

export default function ProjectGrid() {
  return (
    <section className={styles.gridWrapper}>
      {projects.map((project, idx) => (
        <div className={styles.card} key={idx}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className={styles.links}>
            <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
            {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Demo</a>}
          </div>
        </div>
      ))}
    </section>
  );
}
