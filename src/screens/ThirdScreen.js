import Box from "../components/box/Box"
import styles from "./ThirdScreen.module.css"
import mirror from "../Icons/wired-outline-1589-makeup-mirror-hover-pinch (1).json"
import IconTextComponent from "../components/can/Can"
import Button from "../components/button/Button"
import makeup from "../Icons/wired-outline-1599-powder-makeup-face-hover-pinch (4).json"
import woman from "../Icons/wired-outline-633-female-standing-hover-success (1).json"
const ThirdScreen = () => {
  return (
    <>
      <div className={styles.title}>אני יודעת איך זה מרגיש</div>
      <div className={styles.row}>
        <Box 
          title="לתקן את האיפור כל הזמן"
          description="כשהאיפור נמרח, יורד או נעלם תוך כמה שעות ואת מוצאת את עצמך מתקנת שוב ושוב במהלך היום"
          icon={mirror}
        />
        <Box 
          title="לא לדעת להתאפר בצורה שמחמיאה לעור שלך"
          description="כשאת מנסה טכניקות שונות אבל שום דבר לא נראה טוב על העור שלך, ואת לא מבינה איך להתאים את האיפור למראה הטבעי שלך"
          icon={mirror}
        />
        <Box 
          title="לא להספיק להתאפר בזמן כל בוקר"
          description="כשאת מאחרת לעבודה או לאירועים כי האיפור לוקח יותר מדי זמן, ואת מרגישה שאת נלחמת בשעון בכל בוקר מחדש"
          icon={mirror}
        />
      </div>
      <div className={styles.description}>אני כאן כדי להראות לך שאפשר אחרת!</div>
      <div className={styles.title}>את יכולה</div>
      <div className={styles.row}>
    <IconTextComponent text="לדעת איך לאפר את העור שלך בצורה שהכי מחמיאה לו" icon={mirror}/>
    <IconTextComponent text="להתאפר הרבה יותר ביעילות ובבטחון מול המראה" icon={makeup}/>
    <IconTextComponent text="לצאת מהבית בתחושה שאת זוהרת ומטופחת" icon={woman}/>
        </div>
        <Button text="נחמה איך אני עושה את זה?"/>
    </>
  )
}

export default ThirdScreen