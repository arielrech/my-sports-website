import React from 'react';
import SportPageTemplate from '../../../components/SportPageTemplate/SportPageTemplate';
import judoLogo from '../../../assets/logos/judo_logo.png';

const JudoPage = () => {
  const qualificationText = "Judo Olympic Qualification details will be updated when available.";
  const athletes = [
    { name: "Teddy Riner", description: "French judoka, three-time Olympic champion and ten-time World Champion." },
    { name: "Ryoko Tani", description: "Japanese judoka, two-time Olympic champion and seven-time World Champion." },
    { name: "Shohei Ono", description: "Japanese judoka, two-time Olympic champion and three-time World Champion." },
    
  ];

  return (
    <SportPageTemplate
      sportName="Judo"
      logo={judoLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default JudoPage;
