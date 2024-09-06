import React from 'react';
import SportPageTemplate from '../../../components/SportPageTemplate/SportPageTemplate';
import beachVolleyballLogo from '../../../assets/logos/beach_volleyball_logo.png';

const BeachVolleyballPage = () => {
  const qualificationText = "Beach Volleyball Olympic Qualification details will be updated when available.";
  const athletes = [
    { name: "Kerri Walsh Jennings", description: "American beach volleyball player, three-time Olympic gold medalist." },
{ name: "Misty May-Treanor", description: "American beach volleyball player, three-time Olympic gold medalist." },
{ name: "Alison Cerutti", description: "Brazilian beach volleyball player, Olympic gold medalist and World Champion." },

  ];

  return (
    <SportPageTemplate
      sportName="Beach Volleyball"
      logo={beachVolleyballLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default BeachVolleyballPage;
