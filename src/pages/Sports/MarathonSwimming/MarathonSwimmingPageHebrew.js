import React from 'react';
import SportPageTemplateHebrew from '../../../components/SportPageTemplate/SportPageTemplateHebrew';
import marathonSwimmingLogo from '../../../assets/logos/marathon_swimming_logo.png';

const MarathonSwimmingPageHebrew = () => {
  const qualificationText = "פרטי ההעפלה לאולימפיאדת שחיית מרתון יתעדכנו כאשר יהיו זמינים.";
  
  const athletes = [
    { name: "מתן רודיטי", description: " שחיין ישראלי המתמחה במשחים למרחקים ארוכים. בעל הישג השיא לשחיין ישראל באולימפיאדה (מקום 4 באולימפיאדת טוקיו 2020)" },
    { name: "אווה פביאן", description: "שחיינית ישראלית המתמחה למרחקים ארוכים. אלופת העולם במקצה ל-5 קילומטר (רוברוול 2010)" },
  ];

  return (
    <SportPageTemplateHebrew
      sportName='שחייה במים פתוחים'
      logo={marathonSwimmingLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default MarathonSwimmingPageHebrew;
