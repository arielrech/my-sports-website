import React from 'react';
import SportPageTemplateHebrew from '../../../components/SportPageTemplate/SportPageTemplateHebrew';
import handballLogo from '../../../assets/logos/handball_logo.png';

const HandballPageHebrew = () => {
  const qualificationText = "פרטי ההעפלה לאולימפיאדת הכדוריד יתעדכנו כאשר יהיו זמינים.";
  
  const athletes = [
    { name: "עידן מימון", description: "שחקן כדוריד ישראלי, שיאן השערים וההופעות בנבחרת ישראל" },
    { name: "יואב נאמן", description: "שחקן כדוריד ישראלי בעל 64 הופעות ו-157 שערים בנבחרת ישראל " },
  ];

  return (
    <SportPageTemplateHebrew
      sportName="כדוריד"
      logo={handballLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default HandballPageHebrew;
