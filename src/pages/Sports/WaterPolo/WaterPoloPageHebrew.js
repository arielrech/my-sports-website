import React from 'react';
import SportPageTemplateHebrew from '../../../components/SportPageTemplate/SportPageTemplateHebrew';
import waterPoloLogo from '../../../assets/logos/water_polo_logo.png';

const WaterPoloPageHebrew = () => {
  const qualificationText = "פרטי ההעפלה לאולימפיאדת כדורמים יתעדכנו כאשר יהיו זמינים.";
  
  const athletes = [
    { name: "נבחרת ישראל בכדורמים גברים", description: "הנבחרת מדורגת במקום ה-17 באירופה" },
    { name: " נבחרת ישראל בכדורמים נשים ", description: "הנבחרת מדורגת במקום ה-7 באירופה" },
  ];

  return (
    <SportPageTemplateHebrew
      sportName="כדורמים"
      logo={waterPoloLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default WaterPoloPageHebrew;
