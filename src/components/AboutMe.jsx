import styles from "./AboutMe.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import myPic from "../assets/myPic.png"; // Import the profile picture
import ScrollAnimation from "./ScrollAnimation";

export default function AboutMe() {
  const [typedName, setTypedName] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const fullName = "Atharva Dudhe";
  const typingSpeed = 150; // milliseconds per character
  const deletingSpeed = 100; // milliseconds per character
  const pauseBeforeDeleting = 1000; // milliseconds
  const pauseBeforeTyping = 500; // milliseconds

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        if (index < fullName.length) {
          setTypedName(fullName.substring(0, index + 1));
          setIndex((prevIndex) => prevIndex + 1);
        } else {
          // Done typing, start deleting after a pause
          setIsDeleting(true);
          // No need to setIndex here, deletion starts from full length
        }
      } else {
        // Deleting
        if (index > 0) {
          setTypedName(fullName.substring(0, index - 1));
          setIndex((prevIndex) => prevIndex - 1);
        } else {
          // Done deleting, start typing after a pause
          setIsDeleting(false);
          // setIndex(0); // Already 0
        }
      }
    };

    const timeout = setTimeout(
      handleTyping,
      isDeleting
        ? index === 0
          ? pauseBeforeTyping
          : deletingSpeed
        : index === fullName.length
        ? pauseBeforeDeleting
        : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [typedName, isDeleting]); // Dependencies: rerun effect when typedName or isDeleting changes

  return (
    <section className={styles.aboutSection}>
      <div className={styles.backgroundGradient}></div>
      <ScrollAnimation delay={200}>
        <div className={styles.profileContainer}>
          <div className={styles.profileImage}>
            <div className={styles.imageGlow}></div>
            <img
              src={myPic}
              alt="Atharva Dudhe"
              className={styles.profilePic}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </ScrollAnimation>

      <div className={styles.contentContainer}>
        <ScrollAnimation delay={400}>
          <h1 className={styles.title}>
            Hi, I am <br />
            <span className={styles.nameText}>
              {typedName}
              <span className={styles.cursor}>|</span>
            </span>
          </h1>
        </ScrollAnimation>
        <ScrollAnimation delay={600}>
          <p className={styles.description}>
            I'm a third-year Computer Science student at UNSW with a passion for
            building sleek, functional web applications. I enjoy working with
            modern tools like Dart and JavaScript to craft smooth user
            experiences.
          </p>
        </ScrollAnimation>
        <ScrollAnimation delay={800}>
          <p className={styles.description}>
            I'm especially interested in Generative AI, Machine Learning, and
            full-stack development. I love turning ideas into clean, efficient
            solutions—and I'm always curious to learn something new.
          </p>
        </ScrollAnimation>

        <ScrollAnimation delay={1000}>
          <div className={styles.buttonContainer}>
            <a
              href="https://drive.google.com/file/d/1tDJZwcPuSiDFUse5DTLef1UdhiQVZBKV/view?usp=sharing"
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
        </ScrollAnimation>
      </div>
    </section>
  );
}
