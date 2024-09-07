
import React from 'react';
import TournamentPageTemplate from '../../../components/TournamentPageTemplate/TournamentPageTemplate';
import sportLogo from '../../../assets/logos/cycling_BMX_racing_logo.png';

const CyclingBMXRacing2024ECh = () => {
  // Mock participant data for demonstration
  const athletes = [
    { name: 'אין מידע', description: 'לא השתתפו רוכבים ישראלים' },
    // Add more athletes as needed
  ];
  const generalInfo = (
      <p>
        אליפות אירופה באופני BMX
      </p>
    );

    // Results information
    const results = (
      <p>
      'מקום ראשון גברים: ארתור פילארד'
      <br/>
      <br/>
      'מקום ראשון נשים: זוי קלאסנס'
      </p>
  );
  return (
    <TournamentPageTemplate 
      tournamentId='CyclingBMXRacing2024ECh'
      sportLogo={sportLogo}
      participants={athletes} // Passing the mock participants
      generalInfo={generalInfo} // Passing general information
      results={results} // Passing results information
    />
  );
};

export default CyclingBMXRacing2024ECh;

