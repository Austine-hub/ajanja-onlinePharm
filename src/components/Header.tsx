import { useState, useEffect, useRef } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isNetworkOpen, setIsNetworkOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);
  const networkRef = useRef<HTMLDivElement>(null);

  // Close dropdowns if click occurs outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
      if (networkRef.current && !networkRef.current.contains(event.target as Node)) {
        setIsNetworkOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={styles.header}>
      {/* Logo */}
      <Link to="/" className={styles.logoBox} aria-label="Go to homepage">
        <span className={styles.logo}>PH</span>
        <div>
          <span className={styles.title}>PrognoHealth</span>
          <p className={styles.subtitle}>Corporate Health & Wellness</p>
        </div>
      </Link>

      {/* Navigation */}
      <nav className={styles.nav} aria-label="Main navigation">
        {/* Home Link */}
        <Link to="/" className={styles.navLink}>Home</Link>

        {/* Services Dropdown */}
        <div className={styles.dropdown} ref={servicesRef}>
          <button
            className={`${styles.navLink} ${styles.dropdownToggle}`}
            onClick={() => setIsServicesOpen((prev) => !prev)}
            aria-expanded={isServicesOpen}
            aria-haspopup="true"
          >
            Services
            <span className={`${styles.arrow} ${isServicesOpen ? styles.arrowUp : ""}`}>▼</span>
          </button>
          {isServicesOpen && (
            <div className={styles.dropdownMenu}>
              <a href="#health-screenings" className={styles.dropdownItem}>Health Screenings</a>
              <a href="#wellness-programs" className={styles.dropdownItem}>Wellness Programs</a>
              <a href="#mental-health" className={styles.dropdownItem}>Mental Health Support</a>
              <a href="#fitness-programs" className={styles.dropdownItem}>Fitness Programs</a>
              <a href="#nutrition-counseling" className={styles.dropdownItem}>Nutrition Counseling</a>
            </div>
          )}
        </div>

        {/* Packages Link */}
        <a href="#packages" className={styles.navLink}>Packages</a>

        {/* Network Dropdown */}
        <div className={styles.dropdown} ref={networkRef}>
          <button
            className={`${styles.navLink} ${styles.dropdownToggle}`}
            onClick={() => setIsNetworkOpen((prev) => !prev)}
            aria-expanded={isNetworkOpen}
            aria-haspopup="true"
          >
            Network
            <span className={`${styles.arrow} ${isNetworkOpen ? styles.arrowUp : ""}`}>▼</span>
          </button>
          {isNetworkOpen && (
            <div className={styles.dropdownMenu}>
              <a href="#" className={styles.dropdownItem}>Occupational CheckUp</a>
              <a href="#" className={styles.dropdownItem}>HealthCheckUP</a>
              <a href="#" className={styles.dropdownItem}>Blood Pressure CheckUp</a>
              <a href="#" className={styles.dropdownItem}>Mental Wellness</a>
              <a href="#" className={styles.dropdownItem}>Physiotherapy</a>
            </div>
          )}
        </div>

        {/* Contact */}
        <a href="#contact" className={styles.navLink}>Contact</a>
      </nav>

      {/* CTA */}
      <div className={styles.ctaBox}>
        <Link to="/booking" className={styles.ctaBtn} aria-label="Book a consultation">
          Book Now
        </Link>
      </div>
    </header>
  );
};

export default Header;


