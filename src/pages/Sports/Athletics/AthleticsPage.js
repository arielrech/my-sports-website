import React from 'react';
import SportPageTemplate from '../../../components/SportPageTemplate/SportPageTemplate';
import AthleticsLogo from '../../../assets/logos/athletics_logo.png';

const ArcheryPage = () => {
  const qualificationText = "Athletics Olympic Qualification details will be updated when available.";
  const athletes = [
    { name: "Usain Bolt", description: "Jamaican sprinter, eight-time Olympic gold medalist and world record holder in 100m and 200m." },
    { name: "Carl Lewis", description: "American track and field athlete, nine-time Olympic gold medalist." },
    { name: "Allyson Felix", description: "American sprinter, most decorated female track and field Olympian with seven Olympic gold medals." },
    
  ];

  return (
    <SportPageTemplate
      sportName="Athletics"
      logo={AthleticsLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default ArcheryPage;
