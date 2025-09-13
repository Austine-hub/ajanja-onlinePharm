import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Left: Logo */}
      <a href="/" className={styles.logoBox} aria-label="Go to homepage">
        <span className={styles.logo}>PH</span>
        <div>
          <span className={styles.title}>PrognoHealth</span>
          <p className={styles.subtitle}>Corporate Health & Wellness</p>
        </div>
      </a>

      {/* Middle: Navigation */}
      <nav className={styles.nav} aria-label="Main navigation">
        <a href="#services" className={styles.navLink}>
          Services
        </a>
        <a href="#packages" className={styles.navLink}>
          Packages
        </a>
        <a href="#network" className={styles.navLink}>
          Network
        </a>
        <a href="#contact" className={styles.navLink}>
          Contact
        </a>
      </nav>

      {/* Right: CTA */}
      <div className={styles.ctaBox}>
        <a href="#contact" className={styles.ctaBtn} aria-label="Book a consultation">
          Book Now
        </a>
      </div>
    </header>
  );
};

export default Header;

