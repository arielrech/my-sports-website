import React from 'react';
import SportPageTemplateHebrew from '../../../components/SportPageTemplate/SportPageTemplateHebrew';
import sailing470Logo from '../../../assets/logos/sailing_470_logo.png';

const Sailing470PageHebrew = () => {
  const qualificationText = "פרטי ההעפלה לאולימפיאדת שיט 470 יתעדכנו כאשר יהיו זמינים.";
  
  const athletes = [
    { name: "ורד בוסקילה", description: "שייטת ישראלית אשר השתתפה ב-3 אולימפיאדות (הישג השיא מקום רביעי באולימפיאדת בייג'ינג 2008). בנוסף בעלת 3 מדליות באליפויות אירופה." },
    { name: "ניקה קורניצקי", description: "שייטת ישראלית אשר השתתפה ב-2 אולימפיאדות (הישג השיא מקום רביעי באולימפיאדת בייג'ינג 2008)." },
    { name: "שחר טיבי", description: "השתתפה באולימפיאדת טוקיו 2020 בה סיימה יחד עם נויה בר עם במקום השמיני. לאחר מכן זכתה באליפות עולם ב2023 בדגם הIQFOiL" },
  ];

  return (
    <SportPageTemplateHebrew
      sportName="שייט 470"
      logo={sailing470Logo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default Sailing470PageHebrew;
