import React from 'react';
import SportPageTemplateHebrew from '../../../components/SportPageTemplate/SportPageTemplateHebrew';
import rhythmicGymnasticsLogo from '../../../assets/logos/rhythmic_gymnastics_logo.png';

const RhythmicGymnasticsPageHebrew = () => {
  const qualificationText = "פרטי ההעפלה לאולימפיאדת ההתעמלות האומנותית יתעדכנו כאשר יהיו זמינים.";
  
  const athletes = [
    { name: "לינוי אשרם", description: "מתעמלת אומנותית ישראלית אשר זכתה במדליית זהב באולימפיאדת טוקיו 2020. בנוסף בעלת 11 מדליות מאליפות עולם ו-10 באליפויות אירופה (מתוכם 4 מזהב)" },
    { name: "נטע ריבקין", description: "מתעמלת ישראלית אשר הופיע ב-3 אולימפיאדות (בייג'ין 2008, לונדון 2012 וריו 2016). בעלת מדליית ארד באליפות עולם ושני מדליות באליפויות אירופה." },
    { name: "דריה אטמנוב", description: "מתעמלת ישראלת אשר סיימה במקום החמישי באולימפיאדת פריז 2024. בנוסף, בעלת 5 מדליות באליפויות אירופה ומדליית ארד באליפות עולם." },
  ];

  return (
    <SportPageTemplateHebrew
      sportName="התעמלות אומנותית"
      logo={rhythmicGymnasticsLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default RhythmicGymnasticsPageHebrew;
