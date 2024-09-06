import React from 'react';
import SportPageTemplateHebrew from '../../../components/SportPageTemplate/SportPageTemplateHebrew';
import tennisLogo from '../../../assets/logos/tennis_logo.png';

const TennisPageHebrew = () => {
  const qualificationText = "פרטי ההעפלה לאולימפיאדת טניס יתעדכנו כאשר יהיו זמינים.";
  
  const athletes = [
    { name: "שחר פאר", description: "טניסאית ישראלית בעלת 6 זכיות בטורנירים מסבב ה-WTA. דירוג השיא שלה היה מקום 11 בעולם" },
    { name: "דודי סלע", description: "טניסאי ישראלי שהגיע בשיאו למקום 29 בעולם. שותף בכיר לנבחרת הדייויס שהגיע לחצי גמר." },
    { name: "יונתן ארליך", description: "טניסאי זוגות ישראלי אשר דורג בשיאו במקום ה-5 בעולם. זכה באליפות אוסטרליה הפתוחה ב2008" },
    { name: "אנדי רם", description: "טניסאי זוגות ישראלי. דורג בשיאו במקום החמישי בעולם. זכה יחד עם יונתן ארליך באליפות אוסטרליה הפתוחה ב-2008. בנוסף זכה ברולאנד גארוס (2007) ווימבלדון (2006) בזוגות מעורבים." },
  ];

  return (
    <SportPageTemplateHebrew
      sportName="טניס"
      logo={tennisLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default TennisPageHebrew;
