import React from 'react';
import SportPageTemplateHebrew from '../../../components/SportPageTemplate/SportPageTemplateHebrew';
import fieldHockeyLogo from '../../../assets/logos/field_hockey_logo.png';

const FieldHockeyPageHebrew = () => {
  const qualificationText = "פרטי ההעפלה לאולימפיאדת הוקי שדה יתעדכנו כאשר יהיו זמינים.";
  
  const athletes = [
    { name: "מידע חסר", description: "לישראל אין השיגים משמעותים בתחום זה" },
  ];

  return (
    <SportPageTemplateHebrew
      sportName="הוקי שדה"
      logo={fieldHockeyLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default FieldHockeyPageHebrew;
