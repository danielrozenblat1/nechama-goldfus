import React, { useState, useRef, useEffect } from 'react';
import { Users, Phone, MapPin, Package, Star, Heart, Camera, GraduationCap, Clock, Calendar } from 'lucide-react';
import styles from "./Services.module.css"
const ServiceItem = ({ icon: Icon, text }) => (
  <div className={styles.serviceItem}>
    <div className={styles.iconWrapper}>
      <Icon className={styles.icon} />
    </div>
    <span className={styles.serviceText}>{text}</span>
  </div>
);

const CourseCard = ({ type, content, isOpen, onToggle }) => {
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  const getIconForService = (text) => {
    switch (text) {
      case 'ייעוץ אישי טלפוני/ ZOOM':
        return Phone;
      case 'ייעוץ פרטנולי':
        return Users;
      case 'איפור/ עיצוב שיער':
      case 'איפור ועיצוב שיער':
        return Package;
      case 'ערכת צאאפ':
        return Package;
      case 'הנחה למקום התארגנות':
        return MapPin;
      case 'ייעוץ אישי של 45 דקות':
        return Clock;
      case 'תיאום פגישה מראש':
        return Calendar;
      default:
        return Star;
    }
  };

  const getMainIcon = () => {
    switch (type) {
      case 'graduation':
        return GraduationCap;
      case 'photoshoot':
        return Camera;
      case 'wedding':
        return Heart;
      case 'consultation1':
        return Users;
      case 'consultation2':
        return Phone;
      default:
        return Package;
    }
  };

  const MainIcon = getMainIcon();

  const cardClassName = `${styles.courseContainer} ${styles[type]} ${
    type.startsWith('consultation') ? styles.consultationCard : ''
  }`;

  return (
    <div className={cardClassName}>
      <button
        onClick={onToggle}
        className={`${styles.toggleButton} ${
          type === 'graduation' || type === 'photoshoot' 
            ? styles.eventToggleButton 
            : type.startsWith('consultation') 
              ? styles.consultationToggleButton 
              : ''
        }`}
      >
        <div className={styles.buttonContent}>
          <div className={`${styles.mainIconWrapper} ${
            type === 'graduation' || type === 'photoshoot' 
              ? styles.eventMainIconWrapper 
              : type.startsWith('consultation') 
                ? styles.consultationMainIconWrapper 
                : ''
          }`}>
            <MainIcon className={styles.mainIcon} />
          </div>
          <div className={styles.titleWrapper}>
            <h2 className={styles.title}>{content.title}</h2>
            {content.subtitle && <p className={styles.subtitle}>{content.subtitle}</p>}
            <div className={`${styles.goldUnderline} ${
              type === 'graduation' || type === 'photoshoot' 
                ? styles.eventUnderline 
                : type.startsWith('consultation') 
                  ? styles.consultationUnderline 
                  : ''
            }`}></div>
          </div>
        </div>
        <span className={styles.toggleIcon}>{isOpen ? '−' : '+'}</span>
      </button>

      <div 
        className={styles.contentWrapper}
        style={{ height: `${height}px` }}
      >
        <div ref={contentRef} className={`${styles.servicesContainer} ${
          type === 'graduation' || type === 'photoshoot' 
            ? styles.eventServicesContainer 
            : type.startsWith('consultation') 
              ? styles.consultationServicesContainer 
              : ''
        }`}>
          {(content.isWedding || content.isGraduation || content.isPhotoshoot || content.isConsultation) ? (
            <div className={`${styles.weddingDescription} ${
              type === 'graduation' || type === 'photoshoot' 
                ? styles.eventDescription 
                : type.startsWith('consultation') 
                  ? styles.consultationDescription 
                  : ''
            }`}>
              {content.details.map((paragraph, index) => (
                <p key={index} className={styles.weddingParagraph}>{paragraph}</p>
              ))}
            </div>
          ) : (
            content.details.map((service, index) => (
              <ServiceItem 
                key={index} 
                icon={getIconForService(service)}
                text={service}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

const MakeupCourses = () => {
  const [openCardId, setOpenCardId] = useState(null);

  const courseContents = {
    basic: {
      title: "איפור / שיער",
      details: [
        "ייעוץ אישי טלפוני/ ZOOM",
        "איפור/ עיצוב שיער",
        "ערכת טאצאפ",
        "הגעה למקום התארגנות"
      ]
    },
    plus: {
      title: "איפור + שיער",
      details: [
        "ייעוץ פרונטלי",
        "איפור ועיצוב שיער",
        "ערכת טאצאפ",
        "הנחה למקום התארגנות"
      ]
    },
    wedding: {
      title: "כלות",
      isWedding: true,
      details: [
        "ביום החתונה שלך, שזהו אחד האירועים המשמעותיים בחייך, חשוב שתרגישי טוב, נוח ושתהיי שמחה ומאושרת.",
        "האווירה הטובה שאני יוצרת ביום האירוע, היא חשובה מבחינתי. איפור ושיער הם חלק בלתי נפרד מהתכונות, ויכולים להפוך את היום הזה לאירוע בלתי נשכח. אני מאמינה שבחירת האדם הנכון שנמצא לצידך ביום החשוב שלך הוא חשוב מאד ביחד עם התוצאה בסופו של דבר. המטרה היא שתהיי מרוצה מהתוצאה, ושתרגישי בטוחה ונאה ביום המיוחד שלך.",
        "כחלק מהליווי שלי ביום החתונה אני מציעה לך ליווי במהלך החתונה עצמה בו תוכלי לשנות את המראה ולהרגיש מלווין חדש לאורך כל מהלך האירוע."
      ]
    },
    graduation: {
      title: "איפור בת מצווה",
      isGraduation: true,
      details: [
        "ביום בת המצווה שלך, חשוב להרגיש במיטבך. איפור ושיער זוהרים הם מרכיבים בהכנות.",
        "אני מאמינה שנערת המצווה צריכה להראות זוהרת ונוצצת עם שכבה מדויקת ורכה של איפור והקפדה על הסרוקה המותאמת לגילה.",
        "כמובן שלא נשכח את האם - מארחת האירוע, הרי שאיפור ושיער זוהרים הם לא רק מראה אלא גם בתחושה שהוא מעניק לך. כשאת מרגישה טוב עם עצמך, זה מתבטא בכל צדדי החיים שלך."
      ]
    },
    photoshoot: {
      title: "צילומי תדמית",
      subtitle: "איפור ושיער מקצועי לצילומי תדמית",
      isPhotoshoot: true,
      details: [
        "במהלך ההכנות שלך לצילומי תדמית איפור ושיער הם חלקים חשובים ביצירת הרושם הנכון.",
        "האיפור צריך להיות מקצועי אך טבעי, כך שהוא מדגיש את התכונות החיוביות של הפנים מבלי להראות מוגזם.",
        "זכרי - האיפור הוא כמה התמונה המושלמת! איפור מדויק יכול להדגיש את חווי הפנים שלך ולהקנות לך מראה מקצועי וחזק. זהו תפקידי בגובה מול, לקחת את ההשראה שאת מביאה לתמונה ולאפשר לך לנסוק כנפיים מול המצלמה."
      ]
    },
    consultation1: {
      title: "ייעוץ איפור אישי",
      isConsultation: true,
      details: [
        "הרבה מוצרי איפור שונים לך במגירה בצורה כזו שלא הסתכלת עליהם שנים. חלקם הקטן יוצא לשימוש פעם באירועים מיוחדים. לשם כך הייעוץ באיפור- נצטרך לעזור לך לרכוש את המוצרים הנכונים עבורך.",
        "הייעוץ אורך 45 דקות בו נערוך התאמה ממוצרים הקיימים אצלי ויחד עם המוצרים שמיימים אצלך נגבש את תיק האיפור הייחודי שלך."
      ]
    },
    consultation2: {
      title: "יום שופינג",
      isConsultation: true,
      details: [
        "מי לא מתפתה לבוא לחנות ולראות את האיפור מהרשתות החברתיות בפארם ולהקשיב למבצעים של המוכרת ולתאורה הלא מחמיאה?",
        "יום שופינג לאיפור זה כמו מסע קסום! קודם כל, נכין יחד רשימה של כל התכשירים שאת זקוקה להם, בהתאם לסוג העור והטעמים שלך. נערוך מחקר שיכיל את מהמוצרים הנכונים עבורך. ביום השופינג עצמו, אלווה אותך לאורך כל המסע על מנת שתקבלי את המוצרים האיכותיים והנכונים עבורך."
      ]
    }
  };

  const handleToggle = (cardId) => {
    setOpenCardId(openCardId === cardId ? null : cardId);
  };

  return (
    <>
      <div className={styles.header} id="איפור ושיער">שירותים נוספים</div>
      <div className={styles.subHeader} >איפור ושיער ערב וכלות</div>
      <div className={styles.pageWrapper}>
        <div className={styles.pageContainer}>
          <div className={styles.coursesContainer}>
            <CourseCard 
              type="basic" 
              content={courseContents.basic} 
              isOpen={openCardId === 'basic'}
              onToggle={() => handleToggle('basic')}
            />
            <CourseCard 
              type="plus" 
              content={courseContents.plus} 
              isOpen={openCardId === 'plus'}
              onToggle={() => handleToggle('plus')}
            />
            <CourseCard 
              type="wedding" 
              content={courseContents.wedding} 
              isOpen={openCardId === 'wedding'}
              onToggle={() => handleToggle('wedding')}
            />
          </div>
        </div>
      </div>
      <div className={styles.subHeader}>אירועים</div>
      <div className={styles.pageWrapper}>
        <div className={styles.pageContainer}>
          <div className={styles.coursesContainer}>
            <CourseCard 
              type="graduation" 
              content={courseContents.graduation} 
              isOpen={openCardId === 'graduation'}
              onToggle={() => handleToggle('graduation')}
            />
            <CourseCard 
              type="photoshoot" 
              content={courseContents.photoshoot} 
              isOpen={openCardId === 'photoshoot'}
              onToggle={() => handleToggle('photoshoot')}
            />
          </div>
        </div>
      </div>
      <div className={styles.subHeader}>ייעוצים</div>
      <div className={styles.pageWrapper}>
        <div className={styles.pageContainer}>
          <div className={styles.coursesContainer}>
            <CourseCard 
              type="consultation1" 
              content={courseContents.consultation1} 
              isOpen={openCardId === 'consultation1'}
              onToggle={() => handleToggle('consultation1')}
            />
            <CourseCard 
              type="consultation2" 
              content={courseContents.consultation2} 
              isOpen={openCardId === 'consultation2'}
              onToggle={() => handleToggle('consultation2')}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MakeupCourses;