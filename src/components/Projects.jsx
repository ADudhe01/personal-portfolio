import styles from "./Projects.module.css";
import projectsData from "./projectsData.json";
import ScrollAnimation from "./ScrollAnimation";

export default function Projects() {
  return (
    <section className={styles.projectsContainer}>
      <ScrollAnimation>
        <h1 className={styles.title}>Projects</h1>
      </ScrollAnimation>
      <div className={styles.gridContainer}>
        {projectsData.map((project, index) => (
          <ScrollAnimation key={project.name} delay={index * 100}>
            <div className={styles.projectCard}>
              {project.image && (
                <div className={styles.projectImageContainer}>
                  <img
                    src={project.image}
                    alt={project.name}
                    className={styles.projectImage}
                    loading="lazy"
                  />
                  <div className={styles.imageOverlay}></div>
                </div>
              )}
              <div className={styles.projectContent}>
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
                <div className={styles.buttonContainer}>
                  {project.demo && (
                    <a
                      className={styles.demoButton}
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                  <a
                    className={styles.githubButton}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.demo ? "View Code" : "View on GitHub"}
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
}
