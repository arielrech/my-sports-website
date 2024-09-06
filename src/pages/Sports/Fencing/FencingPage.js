import React from 'react';
import SportPageTemplate from '../../../components/SportPageTemplate/SportPageTemplate';
import fencingLogo from '../../../assets/logos/fencing_logo.png';

const FencingPage = () => {
  const qualificationText = "Fencing Olympic Qualification details will be updated when available.";
  const athletes = [
    { name: "Valentina Vezzali", description: "Italian fencer, six-time Olympic gold medalist, the most decorated female fencer in Olympic history." },
    { name: "Aron Szilágyi", description: "Hungarian fencer, three-time Olympic champion in sabre." },
    { name: "Inna Deriglazova", description: "Russian fencer, Olympic champion and multiple-time World Champion in foil." },
    
  ];

  return (
    <SportPageTemplate
      sportName="Fencing"
      logo={fencingLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default FencingPage;
