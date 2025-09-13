import { useState, useEffect, useRef } from "react";
import styles from "./NetworkSpread.module.css";

interface Stat {
  value: number;
  label: string;
  suffix?: string;
}

interface CounterCardProps {
  targetValue: number;
  label: string;
  suffix?: string;
  duration?: number;
}

const CounterCard = ({ targetValue, label, suffix = "", duration = 2000 }: CounterCardProps) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Easing function: easeOutQuart
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const value = Math.floor(easeOutQuart * targetValue);

      setCurrentValue(value);

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [targetValue, duration]);

  const formatNumber = (num: number): string => {
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1).replace(".0", "") + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(0) + "K";
    return num.toString();
  };

  return (
    <div className={styles.counterCard}>
      <div className={styles.counterValue} aria-live="polite">
        {targetValue >= 1000 ? formatNumber(currentValue) : currentValue.toLocaleString()}
        {suffix}
      </div>
      <div className={styles.counterLabel}>{label}</div>
    </div>
  );
};

const NetworkSpread = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldAnimate(true);
          observer.disconnect(); // run only once
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const stats: Stat[] = [
    { value: 29, label: "States" },
    { value: 1000, label: "Cities", suffix: "+" },
    { value: 1500, label: "Network Center", suffix: "+" },
    { value: 600000, label: "Health Screening Done", suffix: "+" },
    { value: 1000, label: "Test & Packages", suffix: "+" },
    { value: 1000, label: "Corporate", suffix: "+" }
  ];

  return (
    <section ref={sectionRef} className={styles.container} aria-labelledby="network-spread-title">
      <div className={styles.maxWidth}>
        <h2 id="network-spread-title" className={styles.title}>
          Unmatched Network Spread
        </h2>

        <div className={styles.grid}>
          {stats.map((stat, index) => (
            <CounterCard
              key={index}
              targetValue={shouldAnimate ? stat.value : 0}
              label={stat.label}
              suffix={stat.suffix}
              duration={2000 + index * 200} // stagger
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NetworkSpread;
