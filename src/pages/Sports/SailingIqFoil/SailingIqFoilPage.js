import React from 'react';
import SportPageTemplate from '../../../components/SportPageTemplate/SportPageTemplate';
import sailingIqFoilLogo from '../../../assets/logos/sailing_IQFoil_logo.png';

const SailingIQFoilPage = () => {
  const qualificationText = "Sailing IQFoil Olympic Qualification details will be updated when available.";
  const athletes = [
    { name: "Kiran Badloe", description: "Dutch windsurfer, Olympic champion and multiple-time World Champion in the IQFoil class." },
    { name: "Emma Wilson", description: "British windsurfer, Olympic bronze medalist and World Champion in the IQFoil class." },
    { name: "Helene Noesmoen", description: "French windsurfer, multiple-time World Champion in the IQFoil class." },
    
  ];

  return (
    <SportPageTemplate
      sportName="Sailing IQFoil"
      logo={sailingIqFoilLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default SailingIQFoilPage;
