import React from 'react';
import SportPageTemplate from '../../../components/SportPageTemplate/SportPageTemplate';
import badmintonLogo from '../../../assets/logos/badminton_logo.png';

const BadmintonPage = () => {
  const qualificationText = "Badminton Olympic Qualification details will be updated when available.";
  const athletes = [
    { name: "Lin Dan", description: "Chinese badminton player, two-time Olympic champion and five-time World Champion." },
    { name: "Lee Chong Wei", description: "Malaysian badminton player, three-time Olympic silver medalist and former world number one." },
    { name: "Carolina Marín", description: "Spanish badminton player, Olympic champion and three-time World Champion." },
    
  ];

  return (
    <SportPageTemplate
      sportName="Badminton"
      logo={badmintonLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default BadmintonPage;
