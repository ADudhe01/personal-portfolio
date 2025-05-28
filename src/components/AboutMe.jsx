import styles from "./AboutMe.module.css";
import { Link } from "react-router-dom";

export default function AboutMe() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.profileContainer}>
        <div className={styles.profileImage}></div>
      </div>

      <div className={styles.contentContainer}>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.description}>
          Hi there! I'm Atharva Dudhe, a second-year Computer Science student at
          UNSW with a passion for building sleek, functional web applications. I
          enjoy working with modern tools like Dart and JavaScript to craft
          smooth user experiences.
        </p>
        <p className={styles.description}>
          I'm especially interested in Generative AI, Machine Learning, and
          full-stack development. I love turning ideas into clean, efficient
          solutions—and I’m always curious to learn something new.
        </p>

        <div className={styles.buttonContainer}>
          <a
            href="https://drive.google.com/file/d/1LCQZf2JToYtAoo60KKbFfDhhjCi6SGTo/view?usp=sharing"
            className={styles.resumeButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
            <svg
              className={styles.arrowIcon}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
