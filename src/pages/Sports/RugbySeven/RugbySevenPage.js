import React from 'react';
import SportPageTemplate from '../../../components/SportPageTemplate/SportPageTemplate';
import rugbySevenLogo from '../../../assets/logos/rugby_seven_logo.png';

const RugbySevenPage = () => {
  const qualificationText = "Rugby Seven Olympic Qualification details will be updated when available.";
  const athletes = [
    { name: "Perry Baker", description: "American rugby sevens player, two-time World Rugby Sevens Player of the Year." },
    { name: "Portia Woodman", description: "New Zealand rugby sevens player, Olympic gold medalist and World Champion." },
    { name: "Dan Norton", description: "English rugby sevens player, the all-time leading try scorer in World Rugby Sevens Series." },
    
  ];

  return (
    <SportPageTemplate
      sportName="Rugby Sevens"
      logo={rugbySevenLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default RugbySevenPage;
