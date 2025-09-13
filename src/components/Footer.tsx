// src/components/Footer.tsx
import type { FC } from "react";
import styles from "./Footer.module.css";

const Footer: FC = () => {
  // Explicitly type footerSections as an array of [string, string[]] tuples
  const footerSections: [string, string[]][] = [
    ["Shop", ["Vitamins", "Skincare", "Medicines", "Baby & Child"]],
    ["Services", ["Prescriptions", "Travel health", "Health checks", "Online doctor"]],
    ["Company", ["About us", "Careers", "Sustainability", "Contact"]],
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Brand Section */}
        <div className={styles.brandSection}>
          <div className={styles.brandLogoWrapper}>
            <span className={styles.brandIcon}>
              <svg viewBox="0 0 24 24" className={styles.brandSvg}>
                <path d="M12 2v20M2 12h20" />
              </svg>
            </span>
            <span className={styles.brandText}>AjanjaCare</span>
          </div>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} CarePlus Pharmacy Ltd. All rights reserved.
          </p>
        </div>

        {/* Dynamic Footer Columns */}
        {footerSections.map(([heading, links], i) => (
          <div key={i} className={styles.footerColumn}>
            <h4 className={styles.columnHeading}>{heading}</h4>
            <ul className={styles.columnList}>
              {links.map((l: string, j: number) => (
                <li key={j} className={styles.columnListItem}>
                  <a className={styles.columnLink} href="#">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Legal Section */}
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomContainer}>
          <p className={styles.legalText}>
            Registered pharmacy in Kenya • License No. 123456 • For advice, speak to our pharmacists.
          </p>
          <div className={styles.legalLinks}>
            <a href="#" className={styles.legalLink}>Privacy</a>
            <a href="#" className={styles.legalLink}>Terms</a>
            <a href="#" className={styles.legalLink}>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
