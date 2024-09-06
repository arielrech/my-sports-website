import React from 'react';
import SportPageTemplateHebrew from '../../../components/SportPageTemplate/SportPageTemplateHebrew';
import rugbySevenLogo from '../../../assets/logos/rugby_seven_logo.png';

const RugbySevensPageHebrew = () => {
  const qualificationText = "פרטי ההעפלה לאולימפיאדת רגבי שביעיות יתעדכנו כאשר יהיו זמינים.";
  
  const athletes = [
    { name: "מיכל ויצמן", description: "קפטנית נבחרת ישראל ברוגבי" },
  ];

  return (
    <SportPageTemplateHebrew
      sportName="רוגבי שביעיות"
      logo={rugbySevenLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default RugbySevensPageHebrew;
