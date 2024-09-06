import React from 'react';
import SportPageTemplate from '../../../components/SportPageTemplate/SportPageTemplate';
import taekwondoLogo from '../../../assets/logos/taekwondo_logo.png';

const TaekwondoPage = () => {
  const qualificationText = "Taekwondo Olympic Qualification details will be updated when available.";
  const athletes = [
    { name: "Hadi Saei", description: "Iranian taekwondo practitioner, two-time Olympic champion and multiple-time World Champion." },
    { name: "Jade Jones", description: "British taekwondo practitioner, two-time Olympic champion and World Champion." },
    { name: "Steven Lopez", description: "American taekwondo practitioner, two-time Olympic champion and five-time World Champion." },
    
  ];

  return (
    <SportPageTemplate
      sportName="Taekwondo"
      logo={taekwondoLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default TaekwondoPage;
