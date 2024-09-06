import React from 'react';
import SportPageTemplateHebrew from '../../../components/SportPageTemplate/SportPageTemplateHebrew';
import sailingFormulaKiteLogo from '../../../assets/logos/sailing_formula_kite_logo.png';

const SailingFormulaKitePageHebrew = () => {
  const qualificationText = "פרטי ההעפלה לאולימפיאדת שיט פורמולה קייט יתעדכנו כאשר יהיו זמינים.";
  
  const athletes = [
    { name: "גל צוקרמן", description: "שייטת ישראלית אשר השתתפה באולימפיאדת פריז 2024." },
    { name: "דור זרקה", description: "שייט ישראלי אשר השתתף באולימפיאדת פריז 2024" },
  ];

  return (
    <SportPageTemplateHebrew
      sportName="שייט פורמולה קייט"
      logo={sailingFormulaKiteLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default SailingFormulaKitePageHebrew;
