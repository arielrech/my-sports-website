import React from 'react';
import SportPageTemplateHebrew from '../../../components/SportPageTemplate/SportPageTemplateHebrew';
import volleyballLogo from '../../../assets/logos/volleyball_logo.png';

const VolleyballPageHebrew = () => {
  const qualificationText = "פרטי ההעפלה לאולימפיאדת כדורעף יתעדכנו כאשר יהיו זמינים.";
  
  const athletes = [
    { name: "נבחרת כדורעף גברים", description: "מדורגת במקום ה-53 בדירוג העולמי" },
    { name: "בנחרת כדורעף נשים", description: "מדורגת במקום ה-63 בדירוג העולמי" },
  ];

  return (
    <SportPageTemplateHebrew
      sportName="כדורעף"
      logo={volleyballLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default VolleyballPageHebrew;
