import React from 'react';
import SportPageTemplate from '../../../components/SportPageTemplate/SportPageTemplate';
import wrestlingLogo from '../../../assets/logos/wrestling_logo.png';

const WrestlingPage = () => {
  const qualificationText = "Wrestling Olympic Qualification details will be updated when available.";
  const athletes = [
    { name: "Aleksandr Karelin", description: "Russian wrestler, three-time Olympic champion and considered one of the greatest wrestlers of all time." },
    { name: "Saori Yoshida", description: "Japanese wrestler, three-time Olympic champion and multiple-time World Champion." },
    { name: "John Smith", description: "American wrestler, two-time Olympic champion and four-time World Champion." },
  ];

  return (
    <SportPageTemplate
      sportName="Wrestling"
      logo={wrestlingLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default WrestlingPage;
