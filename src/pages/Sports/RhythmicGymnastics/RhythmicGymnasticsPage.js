import React from 'react';
import SportPageTemplate from '../../../components/SportPageTemplate/SportPageTemplate';
import rhythmicGymnasticsLogo from '../../../assets/logos/rhythmic_gymnastics_logo.png';

const RhythmicGymnasticsPage = () => {
  const qualificationText = "Rhythmic Gymnastics Olympic Qualification details will be updated when available.";
  const athletes = [
    { name: "Yana Kudryavtseva", description: "Russian rhythmic gymnast, three-time World All-Around Champion." },
    { name: "Evgeniya Kanaeva", description: "Russian rhythmic gymnast, two-time Olympic champion and multiple-time World Champion." },
    { name: "Alina Kabaeva", description: "Russian rhythmic gymnast, Olympic champion and six-time World Champion." },
    
  ];

  return (
    <SportPageTemplate
      sportName="Rhythmic Gymnastics"
      logo={rhythmicGymnasticsLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default RhythmicGymnasticsPage;
