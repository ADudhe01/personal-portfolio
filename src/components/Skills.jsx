import styles from "./Skills.module.css";
import skillsData from "./skillsData.json";

export default function Skills() {
  return (
    <section className={styles.skillsSection}>
      <h1 className={styles.title}>Skills</h1>
      <div className={styles.gridContainer}>
        {skillsData.map((category) => (
          <div className={styles.skillCard} key={category.category}>
            <h2 className={styles.cardTitle}>{category.category}</h2>
            <div className={styles.pillContainer}>
              {category.skills.map((skill) => (
                <span className={styles.skillPill} key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
