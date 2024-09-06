import React from 'react';
import SportPageTemplateHebrew from '../../../components/SportPageTemplate/SportPageTemplateHebrew';
import footballLogo from '../../../assets/logos/football_logo.png';

const FootballPageHebrew = () => {
  const qualificationText = "פרטי ההעפלה לאולימפיאדת הכדורגל יתעדכנו כאשר יהיו זמינים.";
  
  const athletes = [
    { name: "יוסי בניון", description: "שחקן ישראלי אשר כיכב בפרמייר ליג ובליגה הספרדית" },
    { name: "אייל ברקוביץ", description: " שחקן ישראלי אשר כיכב בפרמייר ליג " },
    { name: "אוסקר גלוך", description: "שחקן צעיר, אחד ההבטחות הגדולות בתולדות ענף הכדורגל. כרגע משחק ברד בול זלצבורג" },
  ];

  return (
    <SportPageTemplateHebrew
      sportName="כדורגל"
      logo={footballLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default FootballPageHebrew;
