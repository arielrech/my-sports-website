import React from 'react';
import SportPageTemplate from '../../../components/SportPageTemplate/SportPageTemplate';
import swimmingLogo from '../../../assets/logos/swimming_logo.png';

const SwimmingPage = () => {
  const qualificationText = "Swimming Olympic Qualification details will be updated when available.";
  const athletes = [
    { name: "Michael Phelps", description: "American swimmer, the most decorated Olympian of all time with 23 gold medals." },
    { name: "Katie Ledecky", description: "American swimmer, multiple-time Olympic gold medalist and world record holder." },
    { name: "Ian Thorpe", description: "Australian swimmer, five-time Olympic gold medalist and multiple-time World Champion." },
    
  ];

  return (
    <SportPageTemplate
      sportName="Swimming"
      logo={swimmingLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default SwimmingPage;
