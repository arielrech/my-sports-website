import React from 'react';
import SportPageTemplate from '../../../components/SportPageTemplate/SportPageTemplate';
import trampolineGymnasticsLogo from '../../../assets/logos/trampoline_logo.png';

const TrampolineGymnasticsPage = () => {
  const qualificationText = "Trampoline Gymnastics Olympic Qualification details will be updated when available.";
  const athletes = [
    { name: "Dong Dong", description: "Chinese trampoline gymnast, Olympic champion and multiple-time World Champion." },
    { name: "Rosie MacLennan", description: "Canadian trampoline gymnast, two-time Olympic champion and World Champion." },
    { name: "Uladzislau Hancharou", description: "Belarusian trampoline gymnast, Olympic champion in 2016." },
    
  ];

  return (
    <SportPageTemplate
      sportName="Trampoline"
      logo={trampolineGymnasticsLogo}
      qualification={qualificationText}
      athletes={athletes}
    />
  );
};

export default TrampolineGymnasticsPage;
