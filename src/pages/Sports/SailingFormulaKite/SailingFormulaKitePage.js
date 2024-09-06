import React from 'react';
import SportPageTemplate from '../../../components/SportPageTemplate/SportPageTemplate';
import sailingFormulaKiteLogo from '../../../assets/logos/sailing_formula_kite_logo.png';

const SailingFormulaKitePage = () => {
  const qualificationText = "Sailing Formula Kite Olympic Qualification details will be updated when available.";
  const athletes = [
    { name: "Daniela Moroz", description: "American kiteboarder, multiple-time World Champion in the Formula Kite class." },
    { name: "Nicolas Parlier", description: "French kiteboarder, multiple-time World Champion in the Formula Kite class." },
    { name: "Connor Bainbridge", description: "British kiteboarder, World Champion in the Formula Kite class." },
    
  ];

  return (
    <SportPageTemplate
      sportName="Sailing Formula Kite"
      logo={sailingFormulaKiteLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default SailingFormulaKitePage;
