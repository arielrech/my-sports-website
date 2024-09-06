import React from 'react';
import SportPageTemplate from '../../../components/SportPageTemplate/SportPageTemplate';
import lacrosseLogo from '../../../assets/logos/lacrosse_logo.png';

const LacrossePage = () => {
  const qualificationText = "Lacrosse Olympic Qualification details will be updated when available.";
  const athletes = [
    { name: "Paul Rabil", description: "American lacrosse player, regarded as one of the best in the history of the sport." },
    { name: "Gary Gait", description: "Canadian lacrosse player, legendary figure in lacrosse, multiple-time MVP and World Champion." },
    { name: "Kayla Treanor", description: "American lacrosse player, NCAA record holder and World Champion." },
    
  ];

  return (
    <SportPageTemplate
      sportName="Lacrosse"
      logo={lacrosseLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default LacrossePage;
