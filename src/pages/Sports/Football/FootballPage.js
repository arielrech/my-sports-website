import React from 'react';
import SportPageTemplate from '../../../components/SportPageTemplate/SportPageTemplate';
import footballLogo from '../../../assets/logos/football_logo.png';

const FootballPage = () => {
  const qualificationText = "Football Olympic Qualification details will be updated when available.";
  const athletes = [
    { name: "Pelé", description: "Brazilian footballer, three-time FIFA World Cup winner, widely regarded as one of the greatest footballers of all time." },
    { name: "Lionel Messi", description: "Argentinian footballer, seven-time Ballon d'Or winner, and FIFA World Cup champion." },
    { name: "Cristiano Ronaldo", description: "Portuguese footballer, five-time Ballon d'Or winner, and UEFA Champions League all-time top scorer." },
    
  ];

  return (
    <SportPageTemplate
      sportName="Football"
      logo={footballLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default FootballPage;
