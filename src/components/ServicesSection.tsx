import styles from "./ServicesSection.module.css";

interface Service {
  id: number;
  title: string;
  icon: string;
  bgColor: "orange-light" | "orange" | "pink-light" | "purple-light";
}

const services: Service[] = [
  { id: 1, title: "Pre Employment Health Checkup", icon: "📋", bgColor: "orange-light" },
  { id: 2, title: "Annual Health Checkup", icon: "✅", bgColor: "orange" },
  { id: 3, title: "Corporate Health and Wellness", icon: "🏆", bgColor: "pink-light" },
  { id: 4, title: "Executive Health Checkup", icon: "📊", bgColor: "purple-light" },
  { id: 5, title: "Preventive Health Checkup", icon: "🤲", bgColor: "orange-light" },
  { id: 6, title: "Occupational Health Checkup", icon: "💼", bgColor: "orange" },
  { id: 7, title: "Yoga & Meditation", icon: "🧘", bgColor: "pink-light" },
  { id: 8, title: "Mental Health & Wellbeing", icon: "🧠", bgColor: "purple-light" },
  { id: 9, title: "Health Talks & Wellness Webinars", icon: "👥", bgColor: "orange-light" },
  { id: 10, title: "Dietician", icon: "🥗", bgColor: "orange" },
  { id: 11, title: "Digital & Health Platform", icon: "💻", bgColor: "pink-light" },
  { id: 12, title: "Life Saving Skill Trainings", icon: "❤️", bgColor: "purple-light" }
];

const ServicesSection = () => {
  return (
    <section className={styles.servicesSection} aria-labelledby="services-title">
      <div className={styles.container}>
        <h2 id="services-title" className={styles.sectionTitle}>
          Our Services
        </h2>

        <ul className={styles.servicesGrid}>
          {services.map((service) => (
            <li key={service.id} className={`${styles.serviceCard} ${styles[service.bgColor]}`}>
              <article>
                <div className={styles.iconWrapper} aria-hidden="true">
                  <span className={styles.icon} role="img" aria-label={service.title}>
                    {service.icon}
                  </span>
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServicesSection;
