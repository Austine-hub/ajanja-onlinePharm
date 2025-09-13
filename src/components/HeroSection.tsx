import { motion } from "framer-motion";
import { CheckCircle, Server } from "lucide-react";
import styles from "./HeroSection.module.css";

// ✅ Import image for Vite bundling
import docsImage from "../assets/docs.png";

const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.title}
          >
            Simplify clinic workflows. Improve patient outcomes.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className={styles.subtitle}
          >
            A modern, secure platform for appointments, records, billing and teleconsultation — built for clinics and small hospitals.
          </motion.p>

          <div className={styles.buttons}>
            <a href="#contact" className={styles.primaryButton}>
              Request a demo
            </a>
            <a href="#features" className={styles.secondaryButton}>
              Explore features
            </a>
          </div>

          <div className={styles.features}>
            <div className={styles.feature}>
              <CheckCircle size={20} className={styles.featureIcon} />
              <div>
                <div className={styles.featureTitle}>Secure records</div>
                <div className={styles.featureDesc}>HIPAA-ready architecture</div>
              </div>
            </div>
            <div className={styles.feature}>
              <Server size={20} className={styles.featureIcon} />
              <div>
                <div className={styles.featureTitle}>Reliable uptime</div>
                <div className={styles.featureDesc}>Cloud-first infra</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <img
              src={docsImage}
              alt="dashboard preview"
              className={styles.image}
            />
          </div>
          <div className={styles.imageCaption}>Live dashboard preview</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


