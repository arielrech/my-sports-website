import React from 'react';
import SportPageTemplate from '../../../components/SportPageTemplate/SportPageTemplate';
import sailingLaserClassLogo from '../../../assets/logos/sailing_laser_class_logo.png';

const SailingLaserClassPage = () => {
  const qualificationText = "Sailing Laser Class Olympic Qualification details will be updated when available.";
  const athletes = [
    { name: "Robert Scheidt", description: "Brazilian sailor, two-time Olympic champion and multiple-time World Champion in the Laser class." },
    { name: "Tom Burton", description: "Australian sailor, Olympic champion in the Laser class." },
    { name: "Paul Goodison", description: "British sailor, Olympic champion and World Champion in the Laser class." },
    
  ];

  return (
    <SportPageTemplate
      sportName="Sailing Laser Class"
      logo={sailingLaserClassLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default SailingLaserClassPage;
