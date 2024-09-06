import React from 'react';
import SportPageTemplateHebrew from '../../../components/SportPageTemplate/SportPageTemplateHebrew';
import basketball3vs3Logo from '../../../assets/logos/basketball3vs3_logo.png';

const Basketball3vs3PageHebrew = () => {
  const qualificationText = "פרטי ההעפלה לאולימפיאדת כדורסל 3x3 יתעדכנו כאשר יהיו זמינים.";
  
  const athletes = [
    { name: "נתנאל ארצי", description: "כדורסלן ישראלי המשחק בהפועל חולון" },
    { name: "גור לביא", description: "כדורסלן ישראלי המשחק בהפועל חיפה" },
    { name: "חואקין שוכמן", description: "כדורסלן ישראלי המשחק בהפועל באר שבע דימונה" },
    { name: "ג'ורדן כהן", description: "כדורסלן ישראלי המשחק במכבי עירוני רמת גן" },
  ];

  return (
    <SportPageTemplateHebrew
      sportName='כדורסל 3 נגד 3'
      logo={basketball3vs3Logo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default Basketball3vs3PageHebrew;
