import React from 'react';
import SportPageTemplate from '../../../components/SportPageTemplate/SportPageTemplate';
import rowingLogo from '../../../assets/logos/rowing_logo.png';

const RowingPage = () => {
  const qualificationText = "Rowing Olympic Qualification details will be updated when available.";
  const athletes = [
    { name: "Steve Redgrave", description: "British rower, five-time Olympic gold medalist." },
{ name: "Katherine Grainger", description: "British rower, Olympic champion and four-time Olympic silver medalist." },
{ name: "Mahe Drysdale", description: "New Zealand rower, two-time Olympic champion and five-time World Champion." },

  ];

  return (
    <SportPageTemplate
      sportName="Rowing"
      logo={rowingLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default RowingPage;
