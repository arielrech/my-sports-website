import React from 'react';
import SportPageTemplate from '../../../components/SportPageTemplate/SportPageTemplate';
import handballLogo from '../../../assets/logos/handball_logo.png';

const HandballPage = () => {
  const qualificationText = "Handball Olympic Qualification details will be updated when available.";
  const athletes = [
    { name: "Nikola Karabatić", description: "French handball player, three-time Olympic medalist and four-time World Champion." },
{ name: "Heidi Løke", description: "Norwegian handball player, Olympic champion and multiple-time World Champion." },
{ name: "Mikkel Hansen", description: "Danish handball player, Olympic champion and multiple-time World Player of the Year." },

  ];

  return (
    <SportPageTemplate
      sportName="Handball"
      logo={handballLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default HandballPage;
