import React from 'react';
import SportPageTemplateHebrew from '../../../components/SportPageTemplate/SportPageTemplateHebrew';
import trampolineGymnasticsLogo from '../../../assets/logos/trampoline_logo.png';

const TrampolinePageHebrew = () => {
  const qualificationText = "פרטי ההעפלה לאולימפיאדת טרמפולינה יתעדכנו כאשר יהיו זמינים.";
  
  const athletes = [
    { name: "אלון כץ", description: "אלוף ישראל לשעבר בטרמפולינה" },
  ];

  return (
    <SportPageTemplateHebrew
      sportName="טרמפולינה"
      logo={trampolineGymnasticsLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default TrampolinePageHebrew;
