import React from 'react';
import SportPageTemplateHebrew from '../../../components/SportPageTemplate/SportPageTemplateHebrew';
import lacrosseLogo from '../../../assets/logos/lacrosse_logo.png';

const LacrossePageHebrew = () => {
  const qualificationText = "פרטי ההעפלה לאולימפיאדת לקרוס יתעדכנו כאשר יהיו זמינים.";
  
  const athletes = [
    { name: "נבחרת ישראל גברים", description: "נבחרת ישראל גברים מדורגת במיקום 7 בעולם" },
    { name: "נבחרת ישראל נשים", description: "נבחרת ישראל נשים מדורגת במקום ה-6 בעולם" },
  ];

  return (
    <SportPageTemplateHebrew
      sportName="לקרוס"
      logo={lacrosseLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default LacrossePageHebrew;
