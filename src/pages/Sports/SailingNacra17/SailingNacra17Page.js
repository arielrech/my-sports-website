import React from 'react';
import SportPageTemplate from '../../../components/SportPageTemplate/SportPageTemplate';
import sailingNacra17Logo from '../../../assets/logos/sailing_nacra17_logo.png';

const SailingNacra17Page = () => {
  const qualificationText = "Sailing Nacra 17 Olympic Qualification details will be updated when available.";
  const athletes = [
    { name: "Santiago Lange", description: "Argentinian sailor, Olympic champion and World Champion in the Nacra 17 class." },
    { name: "Cecilia Carranza Saroli", description: "Argentinian sailor, Olympic champion in the Nacra 17 class." },
    { name: "Ruggero Tita", description: "Italian sailor, Olympic champion and World Champion in the Nacra 17 class." },
    
  ];

  return (
    <SportPageTemplate
      sportName="Sailing Nacra17"
      logo={sailingNacra17Logo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default SailingNacra17Page;
