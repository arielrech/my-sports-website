import React from 'react';
import SportPageTemplateHebrew from '../../../components/SportPageTemplate/SportPageTemplateHebrew';
import rowingLogo from '../../../assets/logos/rowing_logo.png';

const RowingPageHebrew = () => {
  const qualificationText = "פרטי ההעפלה לאולימפיאדת חתירה יתעדכנו כאשר יהיו זמינים.";
  
  const athletes = [
    { name: "מועדון השייטים תל אביב", description: "מועדון שייט בעל הצלחות בינלאומיות" },
  ];

  return (
    <SportPageTemplateHebrew
      sportName="חתירה"
      logo={rowingLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default RowingPageHebrew;
