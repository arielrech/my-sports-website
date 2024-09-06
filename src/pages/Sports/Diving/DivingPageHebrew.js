import React from 'react';
import SportPageTemplateHebrew from '../../../components/SportPageTemplate/SportPageTemplateHebrew';
import divingLogo from '../../../assets/logos/diving_logo.png';

const DivingPageHebrew = () => {
  const qualificationText = "פרטי ההעפלה לאולימפיאדת קפיצה למים יתעדכנו כאשר יהיו זמינים.";
  
  const athletes = [
    { name: "יואב רענן ", description: "קופץ למים ישראלי. השתתף בשני אולימפיאדות (הלסנקי 1952 ומלבורן 1956" },
  ];

  return (
    <SportPageTemplateHebrew
      sportName="קפיצה למים"
      logo={divingLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default DivingPageHebrew;
