import React from 'react';
import SportPageTemplateHebrew from '../../../components/SportPageTemplate/SportPageTemplateHebrew';
import surfingLogo from '../../../assets/logos/surfing_logo.png';

const SurfingPageHebrew = () => {
  const qualificationText = "פרטי ההעפלה לאולימפיאדת גלישת גלים יתעדכנו כאשר יהיו זמינים.";
  
  const athletes = [
    { name: "ענת ליליאור", description: "גולשת גלים ישראלית אשר השתתפה באולימפיאדת טוקיו 2020 ופריז 2024" },
  ];

  return (
    <SportPageTemplateHebrew
      sportName="גלישת גלים"
      logo={surfingLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default SurfingPageHebrew;
