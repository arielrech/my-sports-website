import React from 'react';
import SportPageTemplateHebrew from '../../../components/SportPageTemplate/SportPageTemplateHebrew';
import cyclingBmxRacingLogo from '../../../assets/logos/cycling_BMX_racing_logo.png';

const CyclingBmxRacingPageHebrew = () => {
  const qualificationText = "פרטי ההעפלה לאולימפיאדת אופני BMX מירוצים יתעדכנו כאשר יהיו זמינים.";
  
  const athletes = [
    { name: "מידע חסר", description: "לישראל אין השיגים משמעותים בתחום זה" },
  ];

  return (
    <SportPageTemplateHebrew
      sportName="מירוץ אופני BMX"
      logo={cyclingBmxRacingLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default CyclingBmxRacingPageHebrew;
