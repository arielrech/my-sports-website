import React from 'react';
import SportPageTemplateHebrew from '../../../components/SportPageTemplate/SportPageTemplateHebrew';
import roadCyclingLogo from '../../../assets/logos/road_cycling_logo.png';

const RoadCyclingPageHebrew = () => {
  const qualificationText = "פרטי ההעפלה לאולימפיאדת אופני כביש יתעדכנו כאשר יהיו זמינים.";
  
  const athletes = [
    { name: "עומר שפירא", description: "רוכבת אופני כביש ישראלית אשר השתתפה במשחקים האולימפיים בטוקיו 2020" },
    { name: "רותם גפינוביץ", description: "רוכבת אופני כביש ישראלית אשר ייצגה את ישראל במשחקים האולימפיים בפריז 2024 " },
  ];

  return (
    <SportPageTemplateHebrew
      sportName="אופני כביש"
      logo={roadCyclingLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default RoadCyclingPageHebrew;
