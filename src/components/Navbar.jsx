import styles from "./Navbar.module.css";
import myLogo from "../assets/myLogo-transparent.png";

export default function NavBar() {
  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <a href="#about">
            <img src={myLogo} alt="Logo" className={styles.myLogoIcon} />
          </a>
        </div>
        <div className={styles.navLinks}>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
        <div className={styles.navBtn}>
          <a
            href="https://github.com/ADudhe01"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Profile
          </a>
        </div>
      </nav>
    </div>
  );
}
