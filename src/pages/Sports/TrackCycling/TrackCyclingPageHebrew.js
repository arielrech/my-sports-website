import React from 'react';
import SportPageTemplateHebrew from '../../../components/SportPageTemplate/SportPageTemplateHebrew';
import trackCyclingLogo from '../../../assets/logos/track_cycling_logo.png';

const TrackCyclingPageHebrew = () => {
  const qualificationText = "פרטי ההעפלה לאולימפיאדת רכיבת אופני מסלול יתעדכנו כאשר יהיו זמינים.";
  
  const athletes = [
    { name: "מיכאל יעקובלב", description: "רוכב אופני מסלול ישראלי. זכה במדליית ארד באליפות עולם רובה 2021 ובנוסף ב-2 מדליות ארד באליפות אירופה (גרנשן 2021 ואפלדורן 2024)." },
  ];

  return (
    <SportPageTemplateHebrew
      sportName="אופני מסלול"
      logo={trackCyclingLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default TrackCyclingPageHebrew;
