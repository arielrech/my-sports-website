import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './TournamentPageTemplate.css';
import { supabase } from '../../supabaseClient';
import logoicon from '../../assets/icon.png';
const hebrewToEnglishSportMap = {
  'קשתות': 'Archery',
  'התעמלות מכשירים': 'Artistic Gymnastics',
  'שחייה צורנית': 'Artistic Swimming',
  'אתלטיקה': 'Athletics',
  'בדמינטון': 'Badminton',
  'כדורסל': 'Basketball',
  'כדורסל 3 נגד 3': 'Basketball3vs3',
  'כדורעף חופים': 'Beach Volleyball',
  'סלאלום קאנו': 'Canoe Slalom',
  'ספרינט קאנו': 'Canoe Sprint',
  'אופני BMX סגנון חופשי': 'Cycling BMX Freestyle',
  'מירוץ אופני BMX': 'Cycling BMX Racing',
  'אופני הרים': 'Cycling Mountain Bike',
  'קפיצה למים': 'Diving',
  'סיף': 'Fencing',
  'הוקי שדה': 'Field Hockey',
  'פוטבול דגלים': 'Flag Football',
  'כדורגל': 'Football',
  'כדוריד': 'Handball',
  'ג׳ודו': 'Judo',
  'לקרוס': 'Lacrosse',
  'שחייה במים פתוחים': 'Marathon Swimming',
  'התעמלות אומנותית': 'Rhythmic Gymnastics',
  'אופני כביש': 'Road Cycling',
  'חתירה': 'Rowing',
  'רוגבי שביעיות': 'Rugby Sevens',
  'שייט 470': 'Sailing 470',
  'שייט 49er': 'Sailing 49er',
  'שייט גלשן מצנח': 'Sailing Formula Kite',
  'שייט IQFoil': 'Sailing IQFoil',
  'שייט לייזר': 'Sailing Laser Class',
  'שייט נקרה 17': 'Sailing Nacra17',
  'טיפוס': 'Sport Climbing',
  'גלישת גלים': 'Surfing',
  'שחייה': 'Swimming',
  'טאקוונדו': 'Taekwondo',
  'טניס': 'Tennis',
  'אופני מסלול': 'Track Cycling',
  'טרמפולינה': 'Trampoline',
  'כדורעף': 'Volleyball',
  'כדורמים': 'Water Polo',
  'היאבקות': 'Wrestling',
};


const TournamentPageTemplate = ({ tournamentId, sportLogo, participants, generalInfo, results }) => {
  const [tournament, setTournament] = useState(null);
  const [availableSports, setAvailableSports] = useState([]);

  useEffect(() => {
    const fetchTournamentData = async () => {
      let { data, error } = await supabase
        .from('tournaments')
        .select('*')
        .eq('id', tournamentId)
        .single();

      if (error) {
        console.error('Error fetching tournament:', error);
      } else {
        setTournament(data);
      }
    };

    const fetchSports = async () => {
      const { data, error } = await supabase
        .from('tournaments')
        .select('sport');  // Select the sport column

      if (error) {
        console.error('Error fetching sports:', error);
      } else {
        const validSports = [...new Set(data.map(item => item.sport))].filter(Boolean).sort();
        setAvailableSports(validSports);
      }
    };

    fetchTournamentData();
    fetchSports();
  }, [tournamentId]);

  if (!tournament) return <p>Loading...</p>;

  // Format the date without time
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('he-IL', options); // Hebrew locale
  };

  return (
    <div className="tournament-page" dir="rtl">
      {/* App Bar */}
      <header className="app-bar">
        <div className="app-bar-content">
          <Link to="/" className="home-button">
            <img src={logoicon} alt="Home" className="home-icon" />
          </Link>
          <nav className="nav-links">
            <div className="dropdown">
              <Link to="/sports" className="dropbtn-link">
                <button className="dropbtn">ענפים</button>
              </Link>
              <div className="dropdown-content">
  {availableSports.length === 0 ? (
    <p>No sports available</p>
  ) : (
    availableSports.map(sport => {
      const hebrewSport = Object.keys(hebrewToEnglishSportMap).find(key => hebrewToEnglishSportMap[key] === sport);
      return (
        <Link key={sport} to={`/he/sport/${sport.toLowerCase()}`}>{hebrewSport}</Link>
      );
    })
  )}
</div>
            </div>
            <Link to="/calendar" className="calendar-link">לוח שנה</Link>
            <Link to="/sports/customize" className="customize-link">התאמה אישית</Link>
          </nav>
        </div>
      </header>

      {/* Tournament Info Section */}
      <section className="tournament-info-section">
        <div className="tournament-info-template">
          <h1>{tournament.name_hebrew || tournament.name}</h1>
          <p><strong>ענף:</strong> {tournament.sport_hebrew || tournament.sport}</p>
          <p><strong>סוג:</strong> {tournament.type_hebrew || tournament.type}</p>
          <p><strong>מיקום:</strong> {tournament.location_hebrew || tournament.location}</p>
          <p><strong>תאריך:</strong> {formatDate(tournament.date_start)} - {formatDate(tournament.date_end)}</p>
          <img src={sportLogo} alt={`${tournament.sport} Logo`} className="tournament-logo" />
        </div>
      </section>

      {/* General Information Section */}
      <section className="general-info-section">
        <h2>מידע כללי</h2>
        {generalInfo}
      </section>

      {/* Tournament Participants Section */}
      <section className="participants-section">
        <h2>משתתפים בתחרות</h2>
        <div className="participants-cards">
          {participants.map((participant, index) => (
            <div key={index} className="participant-card">
              <h3>{participant.name}</h3>
              <p>{participant.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Results Section */}
      <section className="results-section">
        <h2>תוצאות</h2>
        {results}
      </section>
    </div>
  );
};

export default TournamentPageTemplate;
