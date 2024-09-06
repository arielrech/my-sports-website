import React from 'react';
import SportPageTemplate from '../../../components/SportPageTemplate/SportPageTemplate';
import sailing470Logo from '../../../assets/logos/sailing_470_logo.png';

const Sailing470Page = () => {
  const qualificationText = "Sailing 470 Olympic Qualification details will be updated when available.";
  const athletes = [
    { name: "Mathew Belcher", description: "Australian sailor, two-time Olympic champion in the 470 class." },
    { name: "Hannah Mills", description: "British sailor, two-time Olympic champion and World Champion in the 470 class." },
    { name: "Sime Fantela", description: "Croatian sailor, Olympic champion and World Champion in the 470 class." },
    
  ];

  return (
    <SportPageTemplate
      sportName="Sailing 470"
      logo={sailing470Logo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default Sailing470Page;
