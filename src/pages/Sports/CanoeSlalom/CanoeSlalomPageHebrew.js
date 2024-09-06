import React from 'react';
import SportPageTemplateHebrew from '../../../components/SportPageTemplate/SportPageTemplateHebrew';
import canoeSlalomLogo from '../../../assets/logos/canoe_slalom_logo.png';

const CanoeSlalomPageHebrew = () => {
  const qualificationText = "פרטי ההעפלה לאולימפיאדת סלאלום קאנו יתעדכנו כאשר יהיו זמינים.";
  
  const athletes = [
    { name: "מידע חסר", description: "לישראל אין השיגים משמעותים בתחום זה" },
  ];

  return (
    <SportPageTemplateHebrew
      sportName="סלאלום קאנו"
      logo={canoeSlalomLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default CanoeSlalomPageHebrew;
