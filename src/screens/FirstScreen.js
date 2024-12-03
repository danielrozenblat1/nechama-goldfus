import React from 'react';
import styles from './FirstScreen.module.css';

const FirstScreen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.contentContainer}>
          <div className={styles.card}>
            {/* Glow effect */}
            <div className={styles.cardGlow} />
            
            {/* Shine effect */}
            <div className={styles.cardShine} />
            
            {/* Content */}
            <h1 className={styles.title}>
              NECHAMA GOLDFUS
            </h1>
            
            <div className={styles.divider} />
            
            <div className={styles.services}>
              <span>איפור</span>
              <span className={styles.separator}>|</span>
              <span>שיער</span>
              <span className={styles.separator}>|</span>
              <span>סדנאות</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstScreen;