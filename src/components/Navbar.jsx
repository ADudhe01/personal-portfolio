import styles from "./Navbar.module.css";
import myLogo from "../assets/myLogo-transparent.png";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Effect to toggle body scroll based on menuOpen state
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add(styles.noScroll);
    } else {
      document.body.classList.remove(styles.noScroll);
    }

    // Cleanup function to remove the class when component unmounts or menuOpen changes
    return () => {
      document.body.classList.remove(styles.noScroll);
    };
  }, [menuOpen]); // Dependency array: re-run effect when menuOpen changes

  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <a href="#about">
            <img src={myLogo} alt="Logo" className={styles.myLogoIcon} />
          </a>
        </div>

        <div className={styles.menuIcon} onClick={toggleMenu}>
          &#9776;
        </div>

        <div
          className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}
        >
          <a href="#about" onClick={toggleMenu}>
            About
          </a>
          <a href="#skills" onClick={toggleMenu}>
            Skills
          </a>
          <a href="#projects" onClick={toggleMenu}>
            Projects
          </a>
          <a href="#education" onClick={toggleMenu}>
            Education
          </a>
          <a href="#contact" onClick={toggleMenu}>
            Contact
          </a>

          {/* Mobile-only button - appears in mobile menu */}
          <div className={`${styles.navBtn} ${styles.mobileOnly}`}>
            <a
              href="https://github.com/ADudhe01"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
            >
              Github Profile
            </a>
          </div>
        </div>

        {/* Desktop-only button - appears on the right side of navbar */}
        <div className={`${styles.navBtn} ${styles.desktopOnly}`}>
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
