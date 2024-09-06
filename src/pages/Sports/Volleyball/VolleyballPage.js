import React from 'react';
import SportPageTemplate from '../../../components/SportPageTemplate/SportPageTemplate';
import volleyballLogo from '../../../assets/logos/volleyball_logo.png';

const VolleyballPage = () => {
  const qualificationText = "Volleyball Olympic Qualification details will be updated when available.";
  const athletes = [
    { name: "Karch Kiraly", description: "American volleyball player, three-time Olympic gold medalist and considered one of the greatest volleyball players of all time." },
{ name: "Giba", description: "Brazilian volleyball player, Olympic gold medalist and World Champion." },
{ name: "Lang Ping", description: "Chinese volleyball player and coach, Olympic champion as both player and coach." },

  ];

  return (
    <SportPageTemplate
      sportName="Volleyball"
      logo={volleyballLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default VolleyballPage;
