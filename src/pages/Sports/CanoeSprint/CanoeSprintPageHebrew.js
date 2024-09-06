import React from 'react';
import SportPageTemplateHebrew from '../../../components/SportPageTemplate/SportPageTemplateHebrew';
import canoeSprintLogo from '../../../assets/logos/canoe_sprint_logo.png';

const CanoeSprintPageHebrew = () => {
  const qualificationText = "פרטי ההעפלה לאולימפיאדת קיאקים למרחקים יתעדכנו כאשר יהיו זמינים.";
  
  const athletes = [
    { name: "מידע חסר", description: "לישראל אין השיגים משמעותים בתחום זה" },
  ];

  return (
    <SportPageTemplateHebrew
      sportName="ספרינט קאנו"
      logo={canoeSprintLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default CanoeSprintPageHebrew;
