import styles from "./Skills.module.css";
import skillsData from "./skillsData.json";

export default function Skills() {
  return (
    <section className={styles.skillsSection}>
      <h1 className={styles.title}>Skills</h1>
      <div className={styles.gridContainer}>
        {skillsData.map((category) => (
          <div className={styles.skillCard} key={category.category}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>{category.category}</h2>
              <div className={styles.cardIcon}>{getCategoryIcon(category.category)}</div>
            </div>
            <div className={styles.pillContainer}>
              {category.skills.map((skill) => {
                const url = getSkillUrl(skill);
                if (url) {
                  return (
                    <a
                      key={skill}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.skillPill}
                    >
                      {skill}
                    </a>
                  );
                }
                return (
                  <span className={styles.skillPill} key={skill}>
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
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

function getSkillUrl(skill) {
  const skillUrls = {
    // Full Stack
    "React": "https://react.dev",
    "Three.js": "https://threejs.org",
    "Express": "https://expressjs.com",
    "Node.js": "https://nodejs.org",
    "MongoDB": "https://www.mongodb.com",
    "HTML": "https://developer.mozilla.org/en-US/docs/Web/HTML",
    "CSS": "https://developer.mozilla.org/en-US/docs/Web/CSS",
    "Bootstrap": "https://getbootstrap.com",
    "React Three Fiber": "https://docs.pmnd.rs/react-three-fiber",
    "Vite": "https://vitejs.dev",
    "React Router": "https://reactrouter.com",
    
    // App Dev
    "Flutter": "https://flutter.dev",
    "Dart": "https://dart.dev",
    
    // Languages
    "C": "https://en.cppreference.com/w/c",
    "C++": "https://en.cppreference.com/w/cpp",
    "JavaScript": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    "Python": "https://www.python.org",
    "Java": "https://www.java.com",
    
    // Others
    "Git": "https://git-scm.com",
    "GitHub": "https://github.com",
    "VS Code": "https://code.visualstudio.com",
    "Colab": "https://colab.research.google.com",
    "JWT": "https://jwt.io",
    "REST APIs": "https://restfulapi.net",
    "OAuth": "https://oauth.net",
    "Strava API": "https://developers.strava.com",
    "football-data.org API": "https://www.football-data.org",
    "PokeAPI": "https://pokeapi.co",
    "Spoonacular API": "https://spoonacular.com/food-api",
    "Streamlit": "https://streamlit.io",
    "OpenAI": "https://openai.com",
    "FAISS": "https://github.com/facebookresearch/faiss",
    "LangChain": "https://www.langchain.com",
  };
  return skillUrls[skill] || null;
}
