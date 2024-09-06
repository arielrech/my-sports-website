import React from 'react';
import SportPageTemplateHebrew from '../../../components/SportPageTemplate/SportPageTemplateHebrew';
import cyclingBmxFreestyleLogo from '../../../assets/logos/cycling_BMX_freestyle_logo.png';

const CyclingBmxFreestylePageHebrew = () => {
  const qualificationText = "פרטי ההעפלה לאולימפיאדת אופני BMX חופשיים יתעדכנו כאשר יהיו זמינים.";
  
  const athletes = [
    { name: "מידע חסר", description: "לישראל אין השיגים משמעותים בתחום זה" },
  ];

  return (
    <SportPageTemplateHebrew
      sportName="אופני BMX סגנון חופשי"
      logo={cyclingBmxFreestyleLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default CyclingBmxFreestylePageHebrew;
