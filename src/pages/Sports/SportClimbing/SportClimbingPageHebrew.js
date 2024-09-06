import React from 'react';
import SportPageTemplateHebrew from '../../../components/SportPageTemplate/SportPageTemplateHebrew';
import sportClimbingLogo from '../../../assets/logos/sport_climbing_logo.png';

const SportClimbingPageHebrew = () => {
  const qualificationText = "פרטי ההעפלה לאולימפיאדת טיפוס ספורטיבי יתעדכנו כאשר יהיו זמינים.";
  
  const athletes = [
    { name: "איילה כרם", description: "מטפסת ישראלית, סגנית אלפות אירופה ב-2024" },
    { name: "אלכס חזנוב", description: "מטפס ישראלי בעל מדליית זהב בסבב גביע עולם 2018" },
  ];

  return (
    <SportPageTemplateHebrew
      sportName="טיפוס"
      logo={sportClimbingLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default SportClimbingPageHebrew;
