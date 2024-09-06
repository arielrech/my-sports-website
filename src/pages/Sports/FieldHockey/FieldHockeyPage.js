import React from 'react';
import SportPageTemplate from '../../../components/SportPageTemplate/SportPageTemplate';
import fieldHockeyLogo from '../../../assets/logos/field_hockey_logo.png';

const FieldHockeyPage = () => {
  const qualificationText = "Field Hockey Olympic Qualification details will be updated when available.";
  const athletes = [
    { name: "Teun de Nooijer", description: "Dutch field hockey player, three-time Olympic medalist and two-time World Cup winner." },
    { name: "Luciana Aymar", description: "Argentinian field hockey player, eight-time FIH Player of the Year and two-time World Cup winner." },
    { name: "Ric Charlesworth", description: "Australian field hockey player and coach, five-time World Cup winner (as coach and player)." },
    
  ];

  return (
    <SportPageTemplate
      sportName="Field Hockey"
      logo={fieldHockeyLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default FieldHockeyPage;
