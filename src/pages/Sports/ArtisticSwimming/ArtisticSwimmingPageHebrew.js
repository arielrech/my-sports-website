import React from 'react';
import SportPageTemplateHebrew from '../../../components/SportPageTemplate/SportPageTemplateHebrew';
import artisticSwimmingLogo from '../../../assets/logos/artistic_swimming_logo.png';

const ArtisticSwimmingPageHebrew = () => {
  const qualificationText = "פרטי ההעפלה לאולימפיאדה בענף השחייה האמנותית יעודכנו כאשר יהיו זמינים.";
  
  const athletes = [
    { name: "שלי בובריצקי", description: "שחיינית צורנית בעלת שלוש מדליות ארד מאליפות אירופה והשתתפות באולימפיאדת פריז 2024" },
    { name: "אריאל נשיא", description: " שחיינית צורנית בעלת שני מדליות ארד מאליפות אירופה והשתתפות באולימפיאדת פריז 2024" },
  ];

  return (
    <SportPageTemplateHebrew
      sportName='שחייה צורנית'
      logo={artisticSwimmingLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default ArtisticSwimmingPageHebrew;
