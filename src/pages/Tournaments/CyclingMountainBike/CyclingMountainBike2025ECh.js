
import React from 'react';
import TournamentPageTemplate from '../../../components/TournamentPageTemplate/TournamentPageTemplate';
import sportLogo from '../../../assets/logos/cycling_mountain_bike_logo.png';

const CyclingMountainBike2025ECh = () => {
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
      tournamentId='CyclingMountainBike2025ECh'
      sportLogo={sportLogo}
      participants={athletes} // Passing the mock participants
      generalInfo={generalInfo} // Passing general information
      results={results} // Passing results information
    />
  );
};

export default CyclingMountainBike2025ECh;

