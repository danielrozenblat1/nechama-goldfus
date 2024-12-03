import React from 'react';
import styles from './ForthScreen.module.css';
import FAQItem from '../components/questions/Questions';

const ForthScreen = () => {
  return (
    <>
      <div className={styles.title} id="שאלות תשובות">
        אתן שואלות ואני עונה
      </div>
      <FAQItem 
        question="לאיזה טווח את מגיעה?"
        answer="אני מגיעה לכל הארץ, כאשר למיקומים מסוימים יש תוספת תשלום"
      />
      <FAQItem 
        question="האם את מספקת גם שירותי איפור וגם סירוק?"
        answer="כן, אני מספקת גם שירותי איפור וגם שירותי סירוק"
      />
      <FAQItem 
        question="האם את מאפרת רק עור בוגר?"
        answer="כן, אני מתמחה באיפור עור בוגר"
      />
      <FAQItem 
        question="כמה משתתפות יש בכל סדנה?"
        answer="המינימום הוא 10 נשים לסדנאות קבוצתיות"
      />
      <FAQItem 
        question="האם יש אפשרות ליחס אישי יותר?"
        answer="כן, במידה ואת מעוניינת ביחס אישי יותר, יש אפשרות לסדנאות אישיות"
      />
    </>
  );
};

export default ForthScreen;