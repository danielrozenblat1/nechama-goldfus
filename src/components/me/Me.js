import React from 'react';
import styles from './Me.module.css';
import nechama from "../../images/נחמה גולדפוס.png";
import Recommends from '../recommends/Recommends';

const AboutMe = () => {
  return (
    <>
      <div className={styles.header} id="מי אני">לפני שנתחיל.. בואי נכיר</div>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={nechama} alt="נחמה גולדפוס" className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>נחמה גולדפוס</h1>
          <div className={styles.subtitle}>"אני לא יכולה בלי איפור ושיער!"</div>
          <p className={styles.description}>
            כשהתגרשתי בפעם הראשונה חיפשתי תרפיה ועשיתי כל מיני קורסים כדי למצוא את עצמי. הרגשתי שהזמן פשוט נאבד. למדתי בקורס גדול בארץ איפור בצורה מקצועית, אך הרגשתי שחסר לי משהו.
          </p>
          <p className={styles.description}>
            הבנתי שכאן המקום שלי לתקן! אני מאמינה ביחס אישי, הקשבה, מעבר מעמיק על כל המיומנויות והכי חשוב - לצאת עם כלים שימושיים לחיים. זו הדרך שלי להעביר את הידע והניסיון שלי הלאה.
          </p>
        </div>
      </div>
      <Recommends/>
    </>
  );
};

export default AboutMe;