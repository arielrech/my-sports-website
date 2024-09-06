import React from 'react';
import SportPageTemplate from '../../../components/SportPageTemplate/SportPageTemplate';
import cyclingBmxFreestyleLogo from '../../../assets/logos/cycling_BMX_freestyle_logo.png';

const CyclingBmxFreestylePage = () => {
  const qualificationText = "Cycling BMX Freestyle Olympic Qualification details will be updated when available.";
  const athletes = [
    { name: "Logan Martin", description: "Australian BMX freestyle cyclist, Olympic champion and two-time World Champion." },
    { name: "Charlotte Worthington", description: "British BMX freestyle cyclist, Olympic champion in Tokyo 2020." },
    { name: "Daniel Dhers", description: "Venezuelan BMX freestyle cyclist, five-time X Games gold medalist." },
    
  ];

  return (
    <SportPageTemplate
      sportName="Cycling BMX Freestyle"
      logo={cyclingBmxFreestyleLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default CyclingBmxFreestylePage;
