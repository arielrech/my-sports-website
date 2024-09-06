import React from 'react';
import SportPageTemplateHebrew from '../../../components/SportPageTemplate/SportPageTemplateHebrew';
import beachVolleyballLogo from '../../../assets/logos/beach_volleyball_logo.png';

const BeachVolleyballPageHebrew = () => {
  const qualificationText = "פרטי ההעפלה לאולימפיאדת כדורעף חופים יתעדכנו כאשר יהיו זמינים.";
  
  const athletes = [
    { name: "אריאל הילמן", description: "שחקן כדורעף חופים ישראלי." },
    { name: "שון פייגה", description: "שחקן כדורעף חופים ישראלי. " },
  ];

  return (
    <SportPageTemplateHebrew
      sportName="כדורעף חופים"
      logo={beachVolleyballLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default BeachVolleyballPageHebrew;
