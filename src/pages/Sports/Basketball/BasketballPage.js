import React from 'react';
import SportPageTemplate from '../../../components/SportPageTemplate/SportPageTemplate';
import basketballLogo from '../../../assets/logos/basketball_logo.png';

const BasketballPage = () => {
  const qualificationText = "Basketball Olympic Qualification details will be updated when available.";
  const athletes = [
    { name: "Michael Jordan", description: "American basketball player, six-time NBA champion and five-time NBA MVP." },
    { name: "LeBron James", description: "American basketball player, four-time NBA champion and four-time NBA MVP." },
    { name: "Kobe Bryant", description: "American basketball player, five-time NBA champion and two-time NBA Finals MVP." },
    
  ];

  return (
    <SportPageTemplate
      sportName="Basketball"
      logo={basketballLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default BasketballPage;
