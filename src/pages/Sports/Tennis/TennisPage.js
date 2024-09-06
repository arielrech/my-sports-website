import React from 'react';
import SportPageTemplate from '../../../components/SportPageTemplate/SportPageTemplate';
import tennisLogo from '../../../assets/logos/tennis_logo.png';

const TennisPage = () => {
  const qualificationText = "Tennis Olympic Qualification details will be updated when available.";
  const athletes = [
    { name: "Roger Federer", description: "Swiss tennis player, 20-time Grand Slam champion and considered one of the greatest tennis players of all time." },
{ name: "Serena Williams", description: "American tennis player, 23-time Grand Slam champion and widely regarded as one of the greatest athletes in tennis history." },
{ name: "Rafael Nadal", description: "Spanish tennis player, 22-time Grand Slam champion and one of the greatest clay court players of all time." },

  ];

  return (
    <SportPageTemplate
      sportName="Tennis"
      logo={tennisLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default TennisPage;
