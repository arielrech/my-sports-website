import React from 'react';
import SportPageTemplate from '../../../components/SportPageTemplate/SportPageTemplate';
import flagFootballLogo from '../../../assets/logos/flag_football_logo.png';

const FlagFootballPage = () => {
  const qualificationText = "Flag Football Olympic Qualification details will be updated when available.";
  const athletes = [
    { name: "Tommy Wooten", description: "American flag football player, multiple-time national champion and MVP." },
    { name: "Vanita Krouch", description: "American flag football player, captain of the US Women's National Team, multiple-time champion." },
    { name: "Darryl Hammond", description: "American flag football player, known for his versatility and leadership, multiple-time champion." },
    
  ];

  return (
    <SportPageTemplate
      sportName="Flag Football"
      logo={flagFootballLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default FlagFootballPage;
