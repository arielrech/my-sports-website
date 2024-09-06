import React from 'react';
import SportPageTemplate from '../../../components/SportPageTemplate/SportPageTemplate';
import archeryLogo from '../../../assets/logos/artistic_gymnastics_logo.png';

const ArcheryPage = () => {
  const qualificationText = "Artistic Gymnastics Olympic Qualification details will be updated when available.";
  const athletes = [
    { name: "Simone Biles", description: "American gymnast, the most decorated gymnast in World Championship history with 25 medals." },
    { name: "Kohei Uchimura", description: "Japanese gymnast, two-time Olympic all-around champion and six-time world all-around champion." },
    { name: "Nadia Comăneci", description: "Romanian gymnast, the first gymnast to score a perfect 10 in the Olympics, five-time Olympic gold medalist." },
    
  ];

  return (
    <SportPageTemplate
      sportName="Artistic Gymnastics"
      logo={archeryLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default ArcheryPage;
