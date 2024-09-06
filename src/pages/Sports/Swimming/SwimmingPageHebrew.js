import React from 'react';
import SportPageTemplateHebrew from '../../../components/SportPageTemplate/SportPageTemplateHebrew';
import swimmingLogo from '../../../assets/logos/swimming_logo.png';

const SwimmingPageHebrew = () => {
  const qualificationText = "פרטי ההעפלה לאולימפיאדת שחייה יתעדכנו כאשר יהיו זמינים.";
  
  const athletes = [
    { name: "אנסטסיה גורבנקו", description: "שחיינית ישראלית בעלת מדליית כסף באליפות עולם בשחייה 2024 ופעמיים אלופת עולם בבריכות קצרות. בעלת 6 מדליות זהב באליפויות אירופה." },
    { name: " יעקב טומרקין", description: "שחיין ישראלי אשר זכה ב-3 מדליות באליפות אירופה. בנוסף השתתף ב-3 אולימפיאדות (לונדון 2012, ריו 2016 וטוקיו 2020)." },
    { name: "גל נבו", description: "שחיין ישראלי בעל 9 מדליות באליפות אירופה (7 מתוכם בבריכות קצרות). השתתף ב-3 אולימפיאדות (בייג'ינג 2008, לונדון 2012 וריו 2016)." },
  ];

  return (
    <SportPageTemplateHebrew
      sportName="שחייה"
      logo={swimmingLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default SwimmingPageHebrew;
