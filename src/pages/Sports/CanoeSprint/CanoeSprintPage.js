import React from 'react';
import SportPageTemplate from '../../../components/SportPageTemplate/SportPageTemplate';
import canoeSprintLogo from '../../../assets/logos/canoe_sprint_logo.png';

const CanoeSprintPage = () => {
  const qualificationText = "Canoe Sprint Olympic Qualification details will be updated when available.";
  const athletes = [
    { name: "Birgit Fischer", description: "German sprint canoer, eight-time Olympic gold medalist, the most decorated canoeist in Olympic history." },
    { name: "Adam van Koeverden", description: "Canadian sprint canoer, Olympic champion and multiple-time World Champion." },
    { name: "Lisa Carrington", description: "New Zealand sprint canoer, multiple-time Olympic gold medalist." },
    
  ];

  return (
    <SportPageTemplate
      sportName="Canoe Sprint"
      logo={canoeSprintLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default CanoeSprintPage;
