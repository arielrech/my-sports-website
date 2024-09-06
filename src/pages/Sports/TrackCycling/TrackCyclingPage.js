import React from 'react';
import SportPageTemplate from '../../../components/SportPageTemplate/SportPageTemplate';
import trackCyclingLogo from '../../../assets/logos/track_cycling_logo.png';

const TrackCyclingPage = () => {
  const qualificationText = "Track Cycling Olympic Qualification details will be updated when available.";
  const athletes = [
    { name: "Chris Hoy", description: "British track cyclist, six-time Olympic gold medalist and multiple-time World Champion." },
    { name: "Anna Meares", description: "Australian track cyclist, two-time Olympic champion and multiple-time World Champion." },
    { name: "Jason Kenny", description: "British track cyclist, seven-time Olympic gold medalist and multiple-time World Champion." },
    
  ];

  return (
    <SportPageTemplate
      sportName="Track Cycling"
      logo={trackCyclingLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default TrackCyclingPage;
