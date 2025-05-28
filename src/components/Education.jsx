import styles from "./Education.module.css";
import educationData from "./educationData.json";

export default function Education() {
  return (
    <section className={styles.educationSection}>
      <h1 className={styles.title}>Education</h1>
      <div className={styles.timelineContainer}>
        {educationData.map((edu, idx) => (
          <div className={styles.timelineItem} key={edu.institution}>
            <div className={styles.timelineDot}>
              <span className={styles.logo}>{edu.logo}</span>
            </div>
            {idx !== educationData.length - 1 && <div className={styles.timelineLine}></div>}
            <div className={styles.eduCard}>
              <div className={styles.eduHeader}>
                <span className={styles.institution}>{edu.institution}</span>
                <span className={styles.degree}>{edu.degree}</span>
              </div>
              <div className={styles.eduMeta}>
                <span className={styles.dates}>{edu.dates}</span>
                <span className={styles.grade}>{edu.grade}</span>
              </div>
              <p className={styles.description}>{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
