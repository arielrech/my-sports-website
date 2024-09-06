
import React from 'react';
import TournamentPageTemplate from '../../../components/TournamentPageTemplate/TournamentPageTemplate';
import sportLogo from '../../../assets/logos/beach_volleyball_logo.png';

const BeachVolleyball2024E16BPT1 = () => {
  // Mock participant data for demonstration
  const athletes = [
    { name: 'Athlete 1', description: 'Description of Athlete 1' },
    { name: 'Athlete 2', description: 'Description of Athlete 2' },
    // Add more athletes as needed
  ];
  const generalInfo = (
      <p>
      'מידע יתווסף בהמשך'

      </p>
    );

    // Results information
    const results = (
      <p>
      'מידע יתווסף בהמשך'
    </p>
  );
  return (
    <TournamentPageTemplate 
      tournamentId='BeachVolleyball2024E16BPT1'
      sportLogo={sportLogo}
      participants={athletes} // Passing the mock participants
      generalInfo={generalInfo} // Passing general information
      results={results} // Passing results information
    />
  );
};

export default BeachVolleyball2024E16BPT1;

