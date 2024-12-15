import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './Sadnaot.module.css';
import Button from '../button/Button';
import Sadnaot from '../recommends/Sadnaot';

const CourseBox = ({ title, subtitle, sessions, message }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.courseWrapper} id="סדנאות">
      <button 
        className={`${styles.courseButton} ${isOpen ? styles.active : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles.buttonContent}>
          <h2 className={styles.mainTitle}>
            {title}
            <span className={styles.subtitle}>{subtitle}</span>
          </h2>
          <ChevronDown 
            className={`${styles.chevron} ${isOpen ? styles.rotate : ''}`}
          />
        </div>
      </button>
      
      <div className={`${styles.contentWrapper} ${isOpen ? styles.open : ''}`}>
        <div className={styles.meetingsContainer}>
          <div className={styles.innerContentWrapper}>
            {sessions.map((session, index) => (
              <div key={index} className={styles.meetingBox}>
                <div className={styles.meetingHeader}>
                  <span className={styles.meetingNumber}>{index + 1}</span>
                  <h3 className={styles.meetingTitle}>מפגש {session.number}</h3>
                </div>
                <ul className={styles.detailsList}>
                  {session.details.map((detail, idx) => (
                    <li key={idx} className={styles.detailItem}>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className={styles.buttonContainer}>
              <Button 
                text="עוד פרטים"
                message={message}
                className={styles.contactButton}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Courses = () => {
  const supremeCourse = {
    title: "קורס Supreme Woman",
    subtitle: "סדרה של 3 מפגשים - שעתיים כל מפגש",
    message: "היי נחמה, אשמח לשמוע עוד פרטים על קורס Supreme Woman",
    sessions: [
      {
        number: "ראשון",
        details: [
          "נכיר את תיק האיפור שלך ונעשה בו סדר",
          "הכרות עם המוצרים המותאמים עבורך",
          "הנחה של מייקאפ הצללות והארות המותאמות ספציפית אליך לפנים"
        ]
      },
      {
        number: "שני",
        details: [
          "הנחת צלליות המותאמות לאיפור יום ושדרוג לערב",
          "תרגול הנחת המייקאפ צלליות והארות",
          "הנחה של שימור וזוהר"
        ]
      },
      {
        number: "שלישי",
        details: [
          "הנחה של איליינר ומסקרה על העיניים",
          "בניית לוק שלם לבד במספר דקות"
        ]
      }
    ]
  };

  const refreshCourse = {
    title: "סדנת Refresh & Makeup",
    subtitle: "העור המתבגר- סדנה קבוצתית מתאימה לגילאי 14+",
    message: "היי נחמה, אשמח לשמוע עוד פרטים על סדנת Refresh & Makeup",
    sessions: [
      {
        number: "יחיד",
        details: [
          "בסדנה זו נעבור ונדייק את הטרנדים הקיימים ברשתות החברתיות עבור הנערה המתבגרת",
          "נעבור על שגירות טיפוח מותאם לגיל הזה",
          "נראה שלמרות שהן גדלות לא כל טרנד ואיפור מתאים להן",
          "נבין איך להראות מדהים גם בלי לשפוך כסף ",
          "נדגים איפור בלוק יום יומי, המותאם לעור מתבגר"
        ]
      }
    ]
  };

  const oneByOneCourse = {
    title: "סדנת One By One",
    subtitle: "סדנה של מפגש אחד בת שעתיים",
    message: "היי נחמה, אשמח לשמוע עוד פרטים על סדנת One By One",
    sessions: [
      {
        number: "יחיד",
        details: [
          "נעבור על תיק האיפור שלך ונעשה בו סדר",
          "נעבור על טיפים ישומים עבור לאיפור יום יומי",
          "הדגמה והתנסות מעשית על עצמך",
          "ניתן לרכוש מוצרי איפור בסדנה"
        ]
      }
    ]
  };

  const takeAMomentCourse = {
    title: "סדנת Take a Moment",
    subtitle: "טיפים לפרטים לאיפור יום יומי - מפגש אחד",
    message: "היי נחמה, אשמח לשמוע עוד פרטים על סדנת Take a Moment",
    sessions: [
      {
        number: "יחיד",
        details: [
          "נכיר טיפים לאיפור יום יומי",
          "הדגמה והתנסות מעשית",
          "ניתן לרכוש מוצרי איפור בסדנה"
        ]
      }
    ]
  };

  return (
    <>
      <div className={styles.title}>הקורסים והסדנאות שלי</div>
      <div className={styles.container} dir="rtl">
        <CourseBox {...supremeCourse} />
        <CourseBox {...refreshCourse} />
        <CourseBox {...oneByOneCourse} />
        <CourseBox {...takeAMomentCourse} />
      </div>
      <Sadnaot/>
    </>
  );
};

export default Courses;