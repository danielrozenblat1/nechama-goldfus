import React, { useEffect } from 'react';
import styles from './SecondScreen.module.css';

const ElegantPortfolio = (props) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const circle = document.querySelector(`.${styles.glassCircle}`);
      
      if (circle) {
        const moveRange = 50; // הקטנת טווח התנועה ל-50 פיקסלים לכל צד
        const scrollPercentage = scrollPosition / maxScroll;
        const xPosition = -(moveRange + (moveRange * scrollPercentage));
        
        circle.style.transform = `translateX(${xPosition}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={props.scrolled? styles.containerP :styles.container}>

      <div className={styles.content}>
        <header className={styles.header}>
          <h2 className={styles.subtitle}>להתאפר בצורה יעילה, נכונה ומדוייקת עבורך</h2>
          <div className={styles.decorativeShape}></div>
          <div className={styles.nameContainer}>
            <h1 className={styles.name}>NECHAMA GOLDFUS</h1>
            <div className={styles.services}>
              <span>איפור</span>
              <span className={styles.separator}>•</span>
              <span>שיער</span>
              <span className={styles.separator}>•</span>
              <span>סדנאות</span>
            </div>
          </div>
        </header>

        {/* <div className={styles.servicesGrid}>
          {[
            {
              title: 'איפור מקצועי',
              description: 'התאמה אישית והדגשת היופי הטבעי שלך'
            },
            {
              title: 'עיצוב שיער',
              description: 'תסרוקות מחמיאות לכל אירוע'
            },
            {
              title: 'סדנאות והדרכות',
              description: 'לימוד טכניקות מקצועיות להתאפרות עצמאית'
            }
          ].map((service, index) => (
            <div key={index} className={styles.glassCard}>
              <div className={styles.cardContent}>
                <div className={styles.cardGlow}></div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
                <div className={styles.cardBorder}></div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default ElegantPortfolio;