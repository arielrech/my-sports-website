import React from 'react';
import SportPageTemplate from '../../../components/SportPageTemplate/SportPageTemplate';
import sailing49erLogo from '../../../assets/logos/sailing_49er_logo.png';

const Sailing49erPage = () => {
  const qualificationText = "Sailing 49er Olympic Qualification details will be updated when available.";
  const athletes = [
    { name: "Peter Burling", description: "New Zealand sailor, Olympic gold medalist and multiple-time World Champion in the 49er class." },
{ name: "Blair Tuke", description: "New Zealand sailor, Olympic gold medalist and multiple-time World Champion in the 49er class." },
{ name: "Nathan Outteridge", description: "Australian sailor, Olympic gold medalist and multiple-time World Champion in the 49er class." },

  ];

  return (
    <SportPageTemplate
      sportName="Sailing 49er"
      logo={sailing49erLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default Sailing49erPage;
