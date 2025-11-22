import styles from "./Footer.module.css";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import ScrollAnimation from "./ScrollAnimation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <ScrollAnimation>
          <div className={styles.footerSection}>
            <h2 className={styles.footerName}>Atharva Dudhe</h2>
            <p className={styles.footerTagline}>
              Full-Stack Developer & Computer Science Student
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={100}>
          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>Quick Links</h3>
            <div className={styles.links}>
              <a href="#about" className={styles.link}>About</a>
              <a href="#skills" className={styles.link}>Skills</a>
              <a href="#projects" className={styles.link}>Projects</a>
              <a href="#contact" className={styles.link}>Contact</a>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={200}>
          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>Connect</h3>
            <div className={styles.iconContainer}>
              <a
                href="https://github.com/ADudhe01"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconLink}
                aria-label="GitHub"
              >
                <FaGithub className={styles.icon} />
              </a>
              <a
                href="https://www.linkedin.com/in/atharva-dudhe-b2593124a/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconLink}
                aria-label="LinkedIn"
              >
                <FaLinkedin className={styles.icon} />
              </a>
              <a
                href="https://leetcode.com/u/adudhe01/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconLink}
                aria-label="LeetCode"
              >
                <SiLeetcode className={styles.icon} />
              </a>
              <a
                href="https://www.instagram.com/atharva_d01/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconLink}
                aria-label="Instagram"
              >
                <FaInstagram className={styles.icon} />
              </a>
              <a
                href="https://www.facebook.com/share/1ATsTwTqwP/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconLink}
                aria-label="Facebook"
              >
                <FaFacebookF className={styles.icon} />
              </a>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      <ScrollAnimation delay={300}>
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {currentYear} Atharva Dudhe. All rights reserved.
          </p>
          <p className={styles.credit}>
            Designed & Built with ❤️ by ADudhe01
          </p>
        </div>
      </ScrollAnimation>
    </footer>
  );
}
