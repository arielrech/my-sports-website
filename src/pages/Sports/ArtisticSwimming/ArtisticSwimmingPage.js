import React from 'react';
import SportPageTemplate from '../../../components/SportPageTemplate/SportPageTemplate';
import artisticSwimmingLogo from '../../../assets/logos/artistic_swimming_logo.png';

const ArtisticSwimmingPage = () => {
  const qualificationText = "Artistic Swimming Olympic Qualification details will be updated when available.";
  const athletes = [
    { name: "Natalia Ishchenko", description: "Russian synchronized swimmer, five-time Olympic gold medalist." },
    { name: "Svetlana Romashina", description: "Russian synchronized swimmer, six-time Olympic gold medalist." },
    { name: "Anastasia Davydova", description: "Russian synchronized swimmer, five-time Olympic gold medalist." },
    
  ];

  return (
    <SportPageTemplate
      sportName="Artistic Swimming"
      logo={artisticSwimmingLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default ArtisticSwimmingPage;
