import React from 'react';
import SportPageTemplate from '../../../components/SportPageTemplate/SportPageTemplate';
import cyclingMountainBikeLogo from '../../../assets/logos/cycling_mountain_bike_logo.png';

const CyclingMountainBikePage = () => {
  const qualificationText = "Cycling Mountain Bike Olympic Qualification details will be updated when available.";
  const athletes = [
    { name: "Nino Schurter", description: "Swiss mountain biker, Olympic champion and eight-time World Champion." },
{ name: "Julien Absalon", description: "French mountain biker, two-time Olympic champion and five-time World Champion." },
{ name: "Jenny Rissveds", description: "Swedish mountain biker, Olympic champion and World Champion." },

  ];

  return (
    <SportPageTemplate
      sportName="Cycling Mountain Bike"
      logo={cyclingMountainBikeLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default CyclingMountainBikePage;
