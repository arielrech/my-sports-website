import React from 'react';
import SportPageTemplate from '../../../components/SportPageTemplate/SportPageTemplate';
import marathonSwimmingLogo from '../../../assets/logos/marathon_swimming_logo.png';

const MarathonSwimmingPage = () => {
  const qualificationText = "Marathon Swimming Olympic Qualification details will be updated when available.";
  const athletes = [
    { name: "Sharon van Rouwendaal", description: "Dutch marathon swimmer, Olympic gold medalist." },
    { name: "Oussama Mellouli", description: "Tunisian swimmer, Olympic champion in both pool and marathon swimming." },
    { name: "Ana Marcela Cunha", description: "Brazilian marathon swimmer, multiple-time World Champion." },
    
  ];

  return (
    <SportPageTemplate
      sportName="Marathon Swimming"
      logo={marathonSwimmingLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default MarathonSwimmingPage;
