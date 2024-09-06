import React from 'react';
import SportPageTemplate from '../../../components/SportPageTemplate/SportPageTemplate';
import canoeSlalomLogo from '../../../assets/logos/canoe_slalom_logo.png';

const CanoeSlalomPage = () => {
  const qualificationText = "Canoe Slalom Olympic Qualification details will be updated when available.";
  const athletes = [
    { name: "Michal Martikán", description: "Slovak slalom canoeist, two-time Olympic champion and five-time World Champion." },
    { name: "Jessica Fox", description: "Australian slalom canoeist, Olympic champion and multiple-time World Champion." },
    { name: "Tony Estanguet", description: "French slalom canoeist, three-time Olympic champion." },
    
  ];

  return (
    <SportPageTemplate
      sportName="Canoe Slalom"
      logo={canoeSlalomLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default CanoeSlalomPage;
