import React from 'react';
import SportPageTemplate from '../../../components/SportPageTemplate/SportPageTemplate';
import sportClimbingLogo from '../../../assets/logos/sport_climbing_logo.png';

const SportClimbingPage = () => {
  const qualificationText = "Sport Climbing Olympic Qualification details will be updated when available.";
  const athletes = [
    { name: "Adam Ondra", description: "Czech climber, considered one of the best sport climbers in history, multiple-time World Champion." },
    { name: "Janja Garnbret", description: "Slovenian climber, Olympic champion and multiple-time World Champion." },
    { name: "Alberto Ginés López", description: "Spanish climber, Olympic champion in Tokyo 2020." },
    
  ];

  return (
    <SportPageTemplate
      sportName="Sport Climbing"
      logo={sportClimbingLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default SportClimbingPage;
