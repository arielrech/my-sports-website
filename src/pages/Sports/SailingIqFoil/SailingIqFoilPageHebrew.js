import React from 'react';
import SportPageTemplateHebrew from '../../../components/SportPageTemplate/SportPageTemplateHebrew';
import sailingIqFoilLogo from '../../../assets/logos/sailing_IQFoil_logo.png';

const SailingIqFoilPageHebrew = () => {
  const qualificationText = "פרטי ההעפלה לאולימפיאדת שיט IQFoil יתעדכנו כאשר יהיו זמינים.";
  
  const athletes = [
    { name: "גל פרידמן", description: "הספורטאי הישראלי הראשון לזכות במדליית זהב במשחקים אולימפיים (אתונה 2004). בנוסף, זכה במדליית ארד באולימפיאדת אטלנטה 1996, 3 מדליות באליפויות עולם ו-4 מדליות באליפות אירופה. הוא שט בדגם מיסטרל. בנוסף אימן את תום ראובני בזכייה שלו בזהב באולימפיאדת פריז 2024." },
    { name: "שחר צוברי", description: "שייט ישראלי השט בדגם הניל פרייד. זכה במדליית ארד באולימיפאדת בייג'ינג 2008, מדליית ארד באליפות עולם אוקלנד 2008 ו-5 מדליות באליפות אירופה. בנוסף מאמן את נבחרת הנשים בגלישת רוח." },
    { name: "שרון קנטור", description: "שרון קנטור היא גולשת רוח ישראלית, סגנית האלופה האולימפית (פריז 2024), אלופת העולם (לנסרוטה 2024) וסגנית אלופת אירופה (פטרס 2023) בדגם iQFOiL. "},
    { name: "תום ראובני", description: "שייט ישראלי אשר זכה במדליית זהב באולימפיאדת פריז 2024." },
  ];

  return (
    <SportPageTemplateHebrew
      sportName="שייט IQFoil"
      logo={sailingIqFoilLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default SailingIqFoilPageHebrew;
