import React from 'react';
import SportPageTemplateHebrew from '../../../components/SportPageTemplate/SportPageTemplateHebrew';
import basketballLogo from '../../../assets/logos/basketball_logo.png';

const BasketballPageHebrew = () => {
  const qualificationText = "פרטי ההעפלה לאולימפיאדת הכדורסל יתעדכנו כאשר יהיו זמינים.";
  
  const athletes = [
    { name: "עומרי כספי", description: "השחקן הכדורסל הישראלי הראשון ב-NBA " },
    { name: "דני אבדיה", description: "השחקן כדורסל הישראלי אשר נבחר  במיקום הגבוה בדראפט ה-NBA (מיקום 9). זכה פעמיים באליפות אירופה עד גיל 19 (גרמניה 2018 וישראל 2019) " },
    { name: "טל ברודי", description: "שחקן כדורסל ישראלי. זכה בגביע אירופה לאלופות לשנת 1997 עם מכבי תל-אביב" },
  ];

  return (
    <SportPageTemplateHebrew
      sportName="כדורסל"
      logo={basketballLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default BasketballPageHebrew;
