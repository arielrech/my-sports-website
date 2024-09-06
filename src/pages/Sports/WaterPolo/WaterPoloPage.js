import React from 'react';
import SportPageTemplate from '../../../components/SportPageTemplate/SportPageTemplate';
import waterPoloLogo from '../../../assets/logos/water_polo_logo.png';

const WaterPoloPage = () => {
  const qualificationText = "Water Polo Olympic Qualification details will be updated when available.";
  const athletes = [
    { name: "Tibor Benedek", description: "Hungarian water polo player, three-time Olympic gold medalist and World Champion." },
    { name: "Maggie Steffens", description: "American water polo player, two-time Olympic gold medalist and World Champion." },
    { name: "Manuel Estiarte", description: "Spanish water polo player, Olympic champion and considered one of the greatest water polo players of all time." },
  ];

  return (
    <SportPageTemplate
      sportName="Water Polo"
      logo={waterPoloLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default WaterPoloPage;
