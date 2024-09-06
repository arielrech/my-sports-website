import React from 'react';
import SportPageTemplateHebrew from '../../../components/SportPageTemplate/SportPageTemplateHebrew';
import flagFootballLogo from '../../../assets/logos/flag_football_logo.png';

const FlagFootballPageHebrew = () => {
  const qualificationText = "פרטי ההעפלה לאולימפיאדת פלאג פוטבול יתעדכנו כאשר יהיו זמינים.";
  
  const athletes = [
    { name: "נבחרת גברים", description: " נבחרת הגברים בפוטבול דגלים מדורגת במקום ה-8 לשנת 2023" },
    { name: "נבחרת נשים", description: "נבחרת הנשים בפוטבול דגלים מדורגת במקום ה-18 לשנת 2023" },
  ];

  return (
    <SportPageTemplateHebrew
      sportName='פוטבול דגלים'
      logo={flagFootballLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default FlagFootballPageHebrew;
