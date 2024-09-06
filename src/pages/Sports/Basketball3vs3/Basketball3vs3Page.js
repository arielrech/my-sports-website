import React from 'react';
import SportPageTemplate from '../../../components/SportPageTemplate/SportPageTemplate';
import basketball3vs3Logo from '../../../assets/logos/basketball3vs3_logo.png';

const Basketball3vs3Page = () => {
  const qualificationText = "Basketball 3vs3 Olympic Qualification details will be updated when available.";
  const athletes = [
    { name: "Dusan Domovic Bulut", description: "Serbian 3x3 basketball player, multiple-time FIBA 3x3 World Tour MVP." },
    { name: "Kelsey Plum", description: "American 3x3 basketball player, Olympic gold medalist and WNBA star." },
    { name: "Nauris Miezis", description: "Latvian 3x3 basketball player, Olympic gold medalist in 2020 Tokyo Games." },
    
  ];

  return (
    <SportPageTemplate
      sportName="Basketball3vs3"
      logo={basketball3vs3Logo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default Basketball3vs3Page;
