import styles from "./Navbar.module.css";
import myLogo from "../assets/myLogo-transparent.png";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

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

  // Effect to track active section based on scroll position
  useEffect(() => {
    const sections = ["about", "skills", "projects", "education", "contact"];
    const navHeight = 80; // Approximate navbar height

    const handleScroll = () => {
      const scrollPosition = window.scrollY + navHeight + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    // Check on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (section) => {
    if (menuOpen) {
      setMenuOpen(false);
    }
    // Small delay to ensure menu closes before scroll on mobile
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        const navHeight = 80;
        const elementPosition = element.offsetTop - navHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      }
    }, menuOpen ? 100 : 0);
  };

  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <a href="#about" onClick={(e) => {
            e.preventDefault();
            handleLinkClick("about");
          }} aria-label="Go to top">
            <img
              src={myLogo}
              alt="Logo"
              className={styles.myLogoIcon}
              loading="eager"
              aria-hidden="true"
            />
          </a>
        </div>

        <div className={styles.menuIcon} onClick={toggleMenu}>
          &#9776;
        </div>

        <div
          className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}
        >
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("about");
            }}
            className={activeSection === "about" ? styles.active : ""}
          >
            About
          </a>
          <a
            href="#skills"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("skills");
            }}
            className={activeSection === "skills" ? styles.active : ""}
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("projects");
            }}
            className={activeSection === "projects" ? styles.active : ""}
          >
            Projects
          </a>
          <a
            href="#education"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("education");
            }}
            className={activeSection === "education" ? styles.active : ""}
          >
            Education
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("contact");
            }}
            className={activeSection === "contact" ? styles.active : ""}
          >
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
