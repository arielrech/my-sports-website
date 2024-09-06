import React from 'react';
import SportPageTemplate from '../../../components/SportPageTemplate/SportPageTemplate';
import archeryLogo from '../../../assets/logos/archery_logo.png';

const ArcheryPage = () => {
  const qualificationText = "Archery Olympic Qualification details will be updated when available.";
  const athletes = [
    { name: "Kim Woo-jin", description: "South Korean archer, multiple-time World Champion and Olympic gold medalist." },
{ name: "Brady Ellison", description: "American archer, three-time Olympic medalist and World Champion." },
{ name: "Deepika Kumari", description: "Indian archer, former world number one and multiple-time World Cup medalist." },

  ];

  return (
    <SportPageTemplate
      sportName="Archery"
      logo={archeryLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default ArcheryPage;
