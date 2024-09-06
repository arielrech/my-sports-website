import React from 'react';
import SportPageTemplateHebrew from '../../../components/SportPageTemplate/SportPageTemplateHebrew';
import cyclingMountainBikeLogo from '../../../assets/logos/cycling_mountain_bike_logo.png';

const CyclingMountainBikePageHebrew = () => {
  const qualificationText = "פרטי ההעפלה לאולימפיאדת אופני הרים יתעדכנו כאשר יהיו זמינים.";
  
  const athletes = [
    { name: "תומר זלצמן", description: "רוכב אופני הרים ישראלי אשר ייצג את המדינה באולימפיאדת פריז 2024" },
    { name: "שלומי חיימי", description: "רוכב אופני הרים ישראלי אשר השתתף באולימפיאדת ריו 2016 וטוקיו 2020" },
  ];

  return (
    <SportPageTemplateHebrew
      sportName="אופני הרים"
      logo={cyclingMountainBikeLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default CyclingMountainBikePageHebrew;
