import React from 'react';
import SportPageTemplateHebrew from '../../../components/SportPageTemplate/SportPageTemplateHebrew';
import taekwondoLogo from '../../../assets/logos/taekwondo_logo.png';

const TaekwondoPageHebrew = () => {
  const qualificationText = "פרטי ההעפלה לאולימפיאדת טאקוונדו יתעדכנו כאשר יהיו זמינים.";
  
  const athletes = [
    { name: "אבישג סמברג", description: "לוחמת טאקוונדו ישראלית בעלת מדליית ארד מאולימפיאדת טוקיו 2020 ובנוסף אלופת אירופה לשנת 2020." },
    { name: "רון אטיאס", description: "לוחם טאקוונדו ישראלי בעל מדליית כסף באליפות אירופה 2016. בנוסף, השתתף באולימפיאדת ריו 2016." },
    { name: "דנה אזרן", description: "לוחמת טאקוונדו ישראלית אשר זכתה במדליית הכסף באליפות העולם גוודלחארה 2022." },
  ];

  return (
    <SportPageTemplateHebrew
      sportName="טאקוונדו"
      logo={taekwondoLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default TaekwondoPageHebrew;
