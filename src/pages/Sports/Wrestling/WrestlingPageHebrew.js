import React from 'react';
import SportPageTemplateHebrew from '../../../components/SportPageTemplate/SportPageTemplateHebrew';
import wrestlingLogo from '../../../assets/logos/wrestling_logo.png';

const WrestlingPageHebrew = () => {
  const qualificationText = "פרטי ההעפלה לאולימפיאדת היאבקות יתעדכנו כאשר יהיו זמינים.";
  
  const athletes = [
    { name: "יורי יבסייצ'יק", description: "מתאבק ישראלי בסגנון יווני-רומי. זכה במדליית ארד באליפות עולם יבלה 1998 וסיים במקום הרביעי באולימפיאדת סידני 2000" },
    { name: "גוצ'ה ציציאשווילי", description: "מתאבק ישראלי בסגנון יווני-רומי. זכה באליפות העולם קרטיי 2003 ובכסף באטלנטה 1995. בנוסף, זכה ב-3 מדליות באליפות אירופה." },
    { name: "אילנה קרטיש", description: "מתאבקת ישראלית. זכתה ב-4 מדליות כסף רצופות באליפות אירופה. בנוסף, הייתה למתאבקת הראשונה שייצגה את ישראל במשחקים האולימפיים (ריו 2016)" },
  ];

  return (
    <SportPageTemplateHebrew
      sportName="היאבקות"
      logo={wrestlingLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default WrestlingPageHebrew;
