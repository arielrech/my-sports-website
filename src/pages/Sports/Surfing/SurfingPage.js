import React from 'react';
import SportPageTemplate from '../../../components/SportPageTemplate/SportPageTemplate';
import surfingLogo from '../../../assets/logos/surfing_logo.png';

const SurfingPage = () => {
  const qualificationText = "Surfing Olympic Qualification details will be updated when available.";
  const athletes = [
    { name: "Kelly Slater", description: "American surfer, 11-time World Surf League champion, considered the greatest surfer of all time." },
    { name: "Stephanie Gilmore", description: "Australian surfer, seven-time World Surf League champion." },
    { name: "Gabriel Medina", description: "Brazilian surfer, multiple-time World Surf League champion." },
    
  ];

  return (
    <SportPageTemplate
      sportName="Surfing"
      logo={surfingLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default SurfingPage;
