import React from 'react';
import SportPageTemplateHebrew from '../../../components/SportPageTemplate/SportPageTemplateHebrew';
import artisticGymnasticsLogo from '../../../assets/logos/artistic_gymnastics_logo.png';

const ArtisticGymnasticsPageHebrew = () => {
  const qualificationText = "פרטי ההעפלה לאולימפיאדת ההתעמלות מכשירים יתעדכנו כאשר יהיו זמינים.";
  
  const athletes = [
    { name: "אלכס שטילוב", description: "מתעמל מכשירים מצטיין, בעל 6 מדליות באליפויות אירופה (כולל זהב במוסקבה 2013) ו-2 מדליות באליפויות עולם. השתתף ב-4 אולימפיאדות." },
    { name: "ליהיא רז", description: "מתעמלת ישראלית בעלת מדליית ארד מאליפות אירופה. השתתפה בשני אולימפיאדות (טוקיו 2020 ופריז 2024)" },
    { name: "ארטיום דולגופיאט", description: "מתעמל ישראלי זוכה אלוף אולימפי (טוקיו 2024), אלוף עולם (אנטוורפן 2023), ואלוף אירופה פעמיים (מרסין 2020, מינכן 2022). בנוסף, זכה במדליית כסף באולימפיאדת פריז 2024, שתי פעמים באליפות העולם וארבע פעמים באליפות אירופה." },
  ];

  return (
    <SportPageTemplateHebrew
      sportName="התעמלות מכשירים"
      logo={artisticGymnasticsLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default ArtisticGymnasticsPageHebrew;
