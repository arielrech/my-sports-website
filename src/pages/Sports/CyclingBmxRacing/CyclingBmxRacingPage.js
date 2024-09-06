import React from 'react';
import SportPageTemplate from '../../../components/SportPageTemplate/SportPageTemplate';
import cyclingBmxRacingLogo from '../../../assets/logos/cycling_BMX_racing_logo.png';

const CyclingBmxRacingPage = () => {
  const qualificationText = "Cycling BMX Racing Olympic Qualification details will be updated when available.";
  const athletes = [
    { name: "Mariana Pajón", description: "Colombian BMX racer, two-time Olympic gold medalist and World Champion." },
{ name: "Connor Fields", description: "American BMX racer, Olympic champion and multiple-time World Cup winner." },
{ name: "Niek Kimmann", description: "Dutch BMX racer, Olympic champion and multiple-time World Champion." },

  ];

  return (
    <SportPageTemplate
      sportName="Cycling BMX Racing"
      logo={cyclingBmxRacingLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default CyclingBmxRacingPage;
