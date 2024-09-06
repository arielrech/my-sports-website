import React from 'react';
import SportPageTemplateHebrew from '../../../components/SportPageTemplate/SportPageTemplateHebrew';
import sailing49erLogo from '../../../assets/logos/sailing_49er_logo.png';

const Sailing49erPageHebrew = () => {
  const qualificationText = "פרטי ההעפלה לאולימפיאדת שיט 49er יתעדכנו כאשר יהיו זמינים.";
  
  const athletes = [
    { name: "עילי ראובני", description: "מראשוני גולשי ה49er בישראל" },
    { name: "טל שדה", description: "מראשוני גולשי ה49er בישראל" },
  ];

  return (
    <SportPageTemplateHebrew
      sportName="שייט 49er"
      logo={sailing49erLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default Sailing49erPageHebrew;
