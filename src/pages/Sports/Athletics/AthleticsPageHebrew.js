import React from 'react';
import SportPageTemplateHebrew from '../../../components/SportPageTemplate/SportPageTemplateHebrew';
import athleticsLogo from '../../../assets/logos/athletics_logo.png';

const AthleticsPageHebrew = () => {
  const qualificationText = "פרטי ההעפלה לאולימפיאדת האתלטיקה יתעדכנו כאשר יהיו זמינים.";
  
  const athletes = [
    { name: "חנה קנייזבה מיננקו", description: "אתלטית ישראלית בקפיצה משולשת. בעלת מדליית כסף מאליפות עולם בבייג'ינג 2015, ובעלת שני מדליות מאליפות אירופה. מקום שיא לאתלט ישראלי באולימפיאדה (מקום 5)." },
    { name: "אלכס אברבוך", description: "קופץ למוט ישראלי. בעל שני מדליות באליפות עולם (אדמונטון 2001 וסביליה 1999). פעמיים ברצף אלוף אירופה (מינכן 2002 ו-גטבורג 2006)" },
    { name: "לונה צ'מטאי-סלפטר", description: "אצנית מרתון ישראלית. זוכת מדליית ארד באליפות עולם יוג'ין 2022 ואלופת אירופה בברלין 2018." },
  ];

  return (
    <SportPageTemplateHebrew
      sportName="אתלטיקה"
      logo={athleticsLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default AthleticsPageHebrew;
