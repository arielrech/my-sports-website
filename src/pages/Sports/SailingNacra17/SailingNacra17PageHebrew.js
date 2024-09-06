import React from 'react';
import SportPageTemplateHebrew from '../../../components/SportPageTemplate/SportPageTemplateHebrew';
import sailingNacra17Logo from '../../../assets/logos/sailing_nacra17_logo.png';

const SailingNacra17PageHebrew = () => {
  const qualificationText = "פרטי ההעפלה לאולימפיאדת שיט נקרה 17 יתעדכנו כאשר יהיו זמינים.";
  
  const athletes = [
    { name: "מידע חסר", description: "לישראל אין השיגים משמעותים בתחום זה" },
  ];

  return (
    <SportPageTemplateHebrew
      sportName="שייט נקרה 17"
      logo={sailingNacra17Logo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default SailingNacra17PageHebrew;
