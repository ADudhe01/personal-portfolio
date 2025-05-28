import styles from "./Projects.module.css";
import projectsData from "./projectsData.json";

export default function Projects() {
  return (
    <section className={styles.projectsContainer}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.gridContainer}>
        {projectsData.map((project) => (
          <div className={styles.projectCard} key={project.name}>
            <div className={styles.projectHeaderRow}>
              <h2 className={styles.projectName}>{project.name}</h2>
              <span className={styles.projectDate}>{project.date}</span>
            </div>
            <div className={styles.librariesContainer}>
              {project.libraries.map((lib) => (
                <span className={styles.libraryPill} key={lib}>{lib}</span>
              ))}
            </div>
            <p className={styles.projectDescription}>{project.description}</p>
            <a
              className={styles.githubButton}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
