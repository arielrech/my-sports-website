import React from 'react';
import SportPageTemplateHebrew from '../../../components/SportPageTemplate/SportPageTemplateHebrew';
import judoLogo from '../../../assets/logos/judo_logo.png';

const JudoPageHebrew = () => {
  const qualificationText = "פרטי ההעפלה לאולימפיאדת הג'ודו יתעדכנו כאשר יהיו זמינים.";
  
  const athletes = [
    { name: "אריק זאבי", description: "ג'ודוקא ישראלי בעל מדליית ארד מאולימפיאדת אתונה 2004. בנוסף בעל 9 מדליות מאליפויות אירופה (4 מתוכם מזהב) ומדליית כסף מאליפות העולם של מינכן 2001." },
    { name: "ירדן ג'רבי", description: "הג'ודוקאית הישראלית הראשונה לזכות באליפות עולם. בנוסף בעלת מדליית ארד מאולימפיאדת ריו 2016 ובעלת 3 מדליות מאליפות אירופה." },
    { name: " ענבר לניר ", description: "ג'ודוקאית ישראלית בעלת מדליית כסף מאולימפיאדת פריז 2024 ומדליית ארד בתחרות הקבוצתית באולימפיאדת טוקיו 2020. בנוסף, זכתה בזהב באליפות עולם 2023 ובעלת שתי מדליות ארד באליפות אירופה (מונפלייה 2023, זאגרב 2024)" },
  ];

  return (
    <SportPageTemplateHebrew

      sportName=  "ג׳ודו"
      logo={judoLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default JudoPageHebrew;
