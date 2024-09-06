import React from 'react';
import SportPageTemplateHebrew from '../../../components/SportPageTemplate/SportPageTemplateHebrew';
import sailingLaserClassLogo from '../../../assets/logos/sailing_laser_class_logo.png';

const SailingLaserPageHebrew = () => {
  const qualificationText = "פרטי ההעפלה לאולימפיאדת שיט לייזר יתעדכנו כאשר יהיו זמינים.";
  
  const athletes = [
    { name: "עומר ורד וילנצ'יק", description: "שייט ישראלי אשר השתתף באולימיפאדת פריז 2024" },
    { name: "שי קקון", description: " שייטת ישראלית אשר השתתפה באולימיפאדת טוקיו 2020" },
    { name: "נופר אדלמן", description: " שייטת ישראלית אשר השתתף באולימיפאדת בייג'ינג 2008 ולונדון 2012" },
  ];

  return (
    <SportPageTemplateHebrew
      sportName="שייט לייזר"
      logo={sailingLaserClassLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default SailingLaserPageHebrew;
