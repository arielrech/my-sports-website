import React from 'react';
import SportPageTemplate from '../../../components/SportPageTemplate/SportPageTemplate';
import divingLogo from '../../../assets/logos/diving_logo.png';

const DivingPage = () => {
  const qualificationText = "Diving Olympic Qualification details will be updated when available.";
  const athletes = [
    { name: "Wu Minxia", description: "Chinese diver, five-time Olympic gold medalist." },
{ name: "Greg Louganis", description: "American diver, four-time Olympic gold medalist." },
{ name: "Tom Daley", description: "British diver, Olympic gold medalist and World Champion." },

  ];

  return (
    <SportPageTemplate
      sportName="Diving"
      logo={divingLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default DivingPage;
