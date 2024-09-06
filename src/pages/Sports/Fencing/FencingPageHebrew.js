import React from 'react';
import SportPageTemplateHebrew from '../../../components/SportPageTemplate/SportPageTemplateHebrew';
import fencingLogo from '../../../assets/logos/fencing_logo.png';

const FencingPageHebrew = () => {
  const qualificationText = "פרטי ההעפלה לאולימפיאדת הסייף יתעדכנו כאשר יהיו זמינים.";
  
  const athletes = [
    { name: "יובל פרייליך", description: "סייף ישראלי בסגנון הדקר. אלוף אירופה לשנת 2019 והשתתף באולימפיאדת פריז 2024." },
    { name: "לידיה חטואל-צוקרמן", description: "סייפת ישראלית בסגנון הרומח. השתתפה ב-3 אולימפיאדות שונות (לוס אנג'לס 1984, ברצלונה 1992 ואטלנטה 1996). בנוסף העפילה לעוד שני אולימפיאדות בהן לא השתתפה ממניעים פוליטים (מוסקבה 1980 וסיאול 1988)" },
  ];

  return (
    <SportPageTemplateHebrew
      sportName="סיף"
      logo={fencingLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default FencingPageHebrew;
