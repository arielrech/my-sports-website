import React from 'react';
import SportPageTemplate from '../../../components/SportPageTemplate/SportPageTemplate';
import roadCyclingLogo from '../../../assets/logos/road_cycling_logo.png';

const RoadCyclingPage = () => {
  const qualificationText = "Road Cycling Olympic Qualification details will be updated when available.";
  const athletes = [
    { name: "Eddy Merckx", description: "Belgian cyclist, considered one of the greatest cyclists of all time, winner of 11 Grand Tours." },
    { name: "Chris Froome", description: "British cyclist, four-time Tour de France winner." },
    { name: "Marianne Vos", description: "Dutch cyclist, multiple-time World Champion in road cycling and cyclo-cross." },
    
  ];

  return (
    <SportPageTemplate
      sportName="Road Cycling"
      logo={roadCyclingLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default RoadCyclingPage;
