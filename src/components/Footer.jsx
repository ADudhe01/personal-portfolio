import styles from "./Footer.module.css";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <h2 className={styles.footerName}>Atharva Dudhe</h2>
      <div className={styles.content}>
        <a
          href="https://www.instagram.com/atharva_d01/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className={styles.icon} />
        </a>
        <a
          href="https://www.facebook.com/share/1ATsTwTqwP/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF className={styles.icon} />
        </a>
        <a
          href="https://leetcode.com/u/adudhe01/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLeetcode className={styles.icon} />
        </a>
        <a
          href="https://www.linkedin.com/in/atharva-dudhe-b2593124a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className={styles.icon} />
        </a>
      </div>
      <div className={styles.footerText}>
        <p>© 2025 All rights reserved | Designed by ADudhe01</p>
      </div>
    </div>
  );
}
