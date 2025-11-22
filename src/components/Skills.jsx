import styles from "./Skills.module.css";
import skillsData from "./skillsData.json";
import ScrollAnimation from "./ScrollAnimation";

export default function Skills() {
  return (
    <section className={styles.skillsSection}>
      <ScrollAnimation>
        <h1 className={styles.title}>Skills</h1>
      </ScrollAnimation>
      <div className={styles.gridContainer}>
        {skillsData.map((category, index) => (
          <ScrollAnimation key={category.category} delay={index * 150}>
            <div className={styles.skillCard}>
              <div className={styles.cardHeader}>
                <h2 className={styles.cardTitle}>{category.category}</h2>
                <div className={styles.cardIcon}>{getCategoryIcon(category.category)}</div>
              </div>
              <div className={styles.pillContainer}>
                {category.skills.map((skill) => (
                  <span className={styles.skillPill} key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
}

function getCategoryIcon(category) {
  const icons = {
    "Full Stack": "⚡",
    "App Dev": "📱",
    "Languages": "💻",
    "Others": "🛠️",
  };
  return icons[category] || "⭐";
}
