import React from 'react';
import SportPageTemplateHebrew from '../../../components/SportPageTemplate/SportPageTemplateHebrew';
import badmintonLogo from '../../../assets/logos/badminton_logo.png';

const BadmintonPageHebrew = () => {
  const qualificationText = "פרטי ההעפלה לאולימפיאדת הבדמינטון יתעדכנו כאשר יהיו זמינים.";
  
  const athletes = [
    { name: "מישה זילברמן", description: "שחקן בדמינטון ישראלי אשר זכה בשלוש מדליות ארד באליפות אירופה. בנוסף השתתף ב-4 אולימיפאדות." },

  ];

  return (
    <SportPageTemplateHebrew
      sportName="בדמינטון"
      logo={badmintonLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default BadmintonPageHebrew;
