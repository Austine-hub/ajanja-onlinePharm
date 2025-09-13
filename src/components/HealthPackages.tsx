import React from 'react';
import styles from './HealthPackages.module.css';

// ✅ Import all images
import corporateImage from "../assets/doc.png";
import preventiveImage from "../assets/docs.png";
import occupationalImage from "../assets/doc.png";
import annualImage from "../assets/doc.png";
import preEmploymentImage from "../assets/docs.png";
import covidImage from "../assets/doc.png";

interface HealthPackage {
  id: number;
  image: string;
  title: string;
  rating: number;
  description: string;
  category?: string;
}

const HealthPackages: React.FC = () => {
  const healthPackages: HealthPackage[] = [
    {
      id: 1,
      image: corporateImage,
      title: 'Corporate Health Packages',
      rating: 4.5,
      category: 'Corporate',
      description: 'Corporate health check up wellness and drive by the health of employees, by improving employee health and well being, you can have a more productive workforce.'
    },
    {
      id: 2,
      image: preventiveImage,
      title: 'Preventive Health Packages',
      rating: 4.8,
      category: 'Preventive',
      description: 'It is said that Prevention is better than Cure. Preventive health check ups are the first steps towards a healthy life.'
    },
    {
      id: 3,
      image: occupationalImage,
      title: 'Occupational Health Packages',
      rating: 4.6,
      category: 'Occupational',
      description: 'The best way to avoid any accident to happen is to have preventive & safety processes in place, & get an individual\'s health check done before employment.'
    },
    {
      id: 4,
      image: annualImage,
      title: 'Annual Health Checkup',
      rating: 4.7,
      category: 'Annual',
      description: 'Employee\'s health has a direct impact on motivation, innovation & delivery hereby employees are more successful in accomplishing the job.'
    },
    {
      id: 5,
      image: preEmploymentImage,
      title: 'Pre Employment Health Checkup',
      rating: 4.4,
      category: 'Employment',
      description: 'Medical tests help detect, defect condition, determine a diagnosis, plan treatment, check to see if treatment is working, or monitor the condition over time.'
    },
    {
      id: 6,
      image: covidImage,
      title: 'COVID 19 Testing',
      rating: 4.9,
      category: 'Testing',
      description: 'This is our email to clear the doubts about the coronavirus vaccine. Please find below a list of questions and answers regarding this vaccine.'
    }
  ];

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    return (
      <div className={styles.starsContainer}>
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className={`${styles.star} ${styles.starFilled}`}>★</span>
        ))}
        {hasHalfStar && (
          <span className={`${styles.star} ${styles.starHalf}`}>★</span>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} className={`${styles.star} ${styles.starEmpty}`}>★</span>
        ))}
        <span className={styles.ratingValue}>({rating})</span>
      </div>
    );
  };

  return (
    <section className={styles.healthPackagesSection}>
      <div className={styles.container}>
        <header className={styles.sectionHeader}>
          <h2 className={styles.mainTitle}>Health Packages & Tests</h2>
          <p className={styles.subtitle}>
            Comprehensive health solutions tailored to your needs
          </p>
        </header>
        
        <div className={styles.packagesGrid}>
          {healthPackages.map((pkg) => (
            <article key={pkg.id} className={styles.packageCard}>
              <div className={styles.imageContainer}>
                <img 
                  src={pkg.image} 
                  alt={pkg.title}
                  className={styles.packageImage}
                  loading="lazy"
                />
                {pkg.category && (
                  <div className={styles.categoryBadge}>
                    {pkg.category}
                  </div>
                )}
              </div>
              
              <div className={styles.packageContent}>
                <h3 className={styles.packageTitle}>{pkg.title}</h3>
                
                <div className={styles.ratingContainer}>
                  {renderStars(pkg.rating)}
                </div>
                
                <p className={styles.packageDescription}>
                  {pkg.description}
                </p>
                
                <div className={styles.cardActions}>
                  <button className={styles.primaryButton}>
                    Learn More
                  </button>
                  <button className={styles.secondaryButton}>
                    Book Now
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthPackages;
