import React from 'react';
import SportPageTemplateHebrew from '../../../components/SportPageTemplate/SportPageTemplateHebrew';
import archeryLogo from '../../../assets/logos/archery_logo.png';

const ArcheryPageHebrew = () => {
  const qualificationText = "פרטי ההעפלה לאולימפיאדת הקשתות יתעדכנו כאשר יהיו זמינים.";
  
  const athletes = [
    { name: "מיכאלה משה", description: "קשתית ישראלית אשר השתתפה באולימפיאדת פריז 2024. שיאנית ישראל" },
    { name: "רועי דרור", description: " קשת ישראלי אשר השתתף באולימפיאדת פריז 2024" },
    { name: "איתי שני", description: "הקשת הישראלי הראשון אשר השתתף באולימפיאדה (טוקיו 2020). הגיע לשלב שיא לקשת ישראלי (שמינית גמר)" },

  ];

  return (
    <SportPageTemplateHebrew
      sportName="קשתות"
      logo={archeryLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default ArcheryPageHebrew;
