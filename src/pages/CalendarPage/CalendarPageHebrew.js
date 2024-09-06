import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarPage.css';
import { supabase } from '../../supabaseClient';
import icon from '../../assets/icon.png';

// Import sport logos
import archeryLogo from '../../assets/logos/archery_logo.png';
import artisticGymnasticsLogo from '../../assets/logos/artistic_gymnastics_logo.png';
import artisticSwimmingLogo from '../../assets/logos/artistic_swimming_logo.png';
import athleticsLogo from '../../assets/logos/athletics_logo.png';
import badmintonLogo from '../../assets/logos/badminton_logo.png';
import basketballLogo from '../../assets/logos/basketball_logo.png';
import basketball3vs3Logo from '../../assets/logos/basketball3vs3_logo.png';
import beachVolleyballLogo from '../../assets/logos/beach_volleyball_logo.png';
import canoeSlalomLogo from '../../assets/logos/canoe_slalom_logo.png';
import canoeSprintLogo from '../../assets/logos/canoe_sprint_logo.png';
import cyclingBmxFreestyleLogo from '../../assets/logos/cycling_BMX_freestyle_logo.png';
import cyclingBmxRacingLogo from '../../assets/logos/cycling_BMX_racing_logo.png';
import cyclingMountainBikeLogo from '../../assets/logos/cycling_mountain_bike_logo.png';
import divingLogo from '../../assets/logos/diving_logo.png';
import fencingLogo from '../../assets/logos/fencing_logo.png';
import fieldHockeyLogo from '../../assets/logos/field_hockey_logo.png';
import flagFootballLogo from '../../assets/logos/flag_football_logo.png';
import footballLogo from '../../assets/logos/football_logo.png';
import handballLogo from '../../assets/logos/handball_logo.png';
import judoLogo from '../../assets/logos/judo_logo.png';
import lacrosseLogo from '../../assets/logos/lacrosse_logo.png';
import marathonSwimmingLogo from '../../assets/logos/marathon_swimming_logo.png';
import rhythmicGymnasticsLogo from '../../assets/logos/rhythmic_gymnastics_logo.png';
import roadCyclingLogo from '../../assets/logos/road_cycling_logo.png';
import rowingLogo from '../../assets/logos/rowing_logo.png';
import rugbySevenLogo from '../../assets/logos/rugby_seven_logo.png';
import sailing470Logo from '../../assets/logos/sailing_470_logo.png';
import sailing49erLogo from '../../assets/logos/sailing_49er_logo.png';
import sailingFormulaKiteLogo from '../../assets/logos/sailing_formula_kite_logo.png';
import sailingIqFoilLogo from '../../assets/logos/sailing_IQFoil_logo.png';
import sailingLaserClassLogo from '../../assets/logos/sailing_laser_class_logo.png';
import sailingNacra17Logo from '../../assets/logos/sailing_nacra17_logo.png';
import sportClimbingLogo from '../../assets/logos/sport_climbing_logo.png';
import surfingLogo from '../../assets/logos/surfing_logo.png';
import swimmingLogo from '../../assets/logos/swimming_logo.png';
import taekwondoLogo from '../../assets/logos/taekwondo_logo.png';
import tennisLogo from '../../assets/logos/tennis_logo.png';
import trackCyclingLogo from '../../assets/logos/track_cycling_logo.png';
import trampolineGymnasticsLogo from '../../assets/logos/trampoline_logo.png';
import volleyballLogo from '../../assets/logos/volleyball_logo.png';
import waterPoloLogo from '../../assets/logos/water_polo_logo.png';
import wrestlingLogo from '../../assets/logos/wrestling_logo.png';

// Mapping of Hebrew sport names to their logos
const sportLogosHebrew = {
  'קשתות': archeryLogo,
  'התעמלות מכשירים': artisticGymnasticsLogo,
  'שחייה צורנית': artisticSwimmingLogo,
  'אתלטיקה': athleticsLogo,
  'בדמינטון': badmintonLogo,
  'כדורסל': basketballLogo,
  'כדורסל 3 נגד 3': basketball3vs3Logo,
  'כדורעף חופים': beachVolleyballLogo,
  'סלאלום קאנו': canoeSlalomLogo,
  'ספרינט קאנו': canoeSprintLogo,
  'אופני BMX סגנון חופשי': cyclingBmxFreestyleLogo,
  'מירוץ אופני BMX': cyclingBmxRacingLogo,
  'אופני הרים': cyclingMountainBikeLogo,
  'קפיצה למים': divingLogo,
  'סיף': fencingLogo,
  'הוקי שדה': fieldHockeyLogo,
  'פוטבול דגלים': flagFootballLogo,
  'כדורגל': footballLogo,
  'כדוריד': handballLogo,
  'ג׳ודו': judoLogo,
  'לקרוס': lacrosseLogo,
  'שחייה במים פתוחים': marathonSwimmingLogo,
  'התעמלות אומנותית': rhythmicGymnasticsLogo,
  'אופני כביש': roadCyclingLogo,
  'חתירה': rowingLogo,
  'רוגבי שביעיות': rugbySevenLogo,
  'שייט 470': sailing470Logo,
  'שייט 49er': sailing49erLogo,
  'שייט גלשן מצנח': sailingFormulaKiteLogo,
  'שייט IQFoil': sailingIqFoilLogo,
  'שייט לייזר': sailingLaserClassLogo,
  'שייט נקרה 17': sailingNacra17Logo,
  'טיפוס': sportClimbingLogo,
  'גלישת גלים': surfingLogo,
  'שחייה': swimmingLogo,
  'טאקוונדו': taekwondoLogo,
  'טניס': tennisLogo,
  'אופני מסלול': trackCyclingLogo,
  'טרמפולינה': trampolineGymnasticsLogo,
  'כדורעף': volleyballLogo,
  'כדורמים': waterPoloLogo,
  'היאבקות': wrestlingLogo,
};

// Hebrew to English mapping
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

const sportColorsHebrew = {
    Archery: '#FF6347', // Tomato
    Athletics: '#4682B4', // SteelBlue
    Basketball: '#FFD700', // Gold
    // Add more sports with colors as needed
};

const HebrewCalendarPage = () => {
  const [tournaments, setTournaments] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [tournamentsOnDate, setTournamentsOnDate] = useState([]);
  const [availableSports, setAvailableSports] = useState([]);
  const [favoriteSports, setFavoriteSports] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    fetchTournaments();
    fetchAvailableSports();  // Fetch available sports for the dropdown
    fetchFavoriteSports();
  }, []);

  const fetchTournaments = async () => {
    const { data, error } = await supabase
      .from('tournaments')
      .select('*')
      .order('date_start', { ascending: true });

    if (error) {
      console.error('שגיאה בשליפת הטורנירים:', error);
    } else {
      setTournaments(data);
    }
  };

  const fetchAvailableSports = async () => {
    const { data, error } = await supabase
      .from('tournaments')
      .select('sport_hebrew');

    if (error) {
      console.error('שגיאה בשליפת הספורט:', error);
    } else {
      const validSports = [...new Set(data.map(item => item.sport_hebrew))].filter(Boolean).sort();
      setAvailableSports(validSports);
    }
  };

  const fetchFavoriteSports = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const { data, error } = await supabase
        .from('user_settings')
        .select('favorite_sports')
        .eq('user_id', user.id)
        .single();

      if (error) {
        console.error('שגיאה בשליפת הספורט האהוב:', error);
      } else {
        setFavoriteSports(data.favorite_sports || []);
      }
    }
  };

  const onDateChange = (date) => {
    setSelectedDate(date);
    const filteredTournaments = tournaments.filter(tournament =>
      new Date(tournament.date_start) <= date && new Date(tournament.date_end) >= date
    );
    setTournamentsOnDate(filteredTournaments);
  };

  const handleToggleSports = () => {
    setShowFavorites(prevState => !prevState);
    if (showFavorites) {
      // Show all sports
      fetchTournaments();
    } else {
      // Filter tournaments by favorite sports
      setTournaments(tournaments.filter(tournament => favoriteSports.includes(hebrewToEnglishSportMap[tournament.sport_hebrew])));
    }
  };

  const tileContent = ({ date, view }) => {
    if (view === 'month' || view === 'week' || view === 'day') {
      const dayTournaments = tournaments.filter(tournament =>
        new Date(tournament.date_start) <= date && new Date(tournament.date_end) >= date
      );
      if (dayTournaments.length > 0) {
        const sport = hebrewToEnglishSportMap[dayTournaments[0].sport_hebrew];
        return <div className="dot" style={{ backgroundColor: sportColorsHebrew[sport] || '#007BFF' }}></div>;
      }
    }
    return null;
  };

  return (
    <div className="calendar-page" dir="rtl">
      <header className="app-bar">
        <div className="app-bar-content">
          <Link to="/he" className="home-button">
            <img src={icon} alt="דף הבית" className="home-icon" />
          </Link>
          <nav className="nav-links">
            <div className="dropdown">
              <Link to="/he/sports" className="dropbtn-link">
                <button className="dropbtn">ענפים</button>
              </Link>
              <div className="dropdown-content">
                {availableSports.map(sport => (
                  <Link key={sport} to={`/he/sport/${hebrewToEnglishSportMap[sport].toLowerCase().replace(/\s+/g, '-')}`}>{sport}</Link>
                ))}
              </div>
            </div>
            <Link to="/he/calendar" className="calendar-link">לוח שנה</Link>
            <Link to="/he/user-settings" className="settings-link">הגדרות משתמש</Link>
          </nav>
          <button onClick={handleToggleSports} className="favorites-button">
            {showFavorites ? "הצג את כל הספורט" : "הצג את הספורט האהוב"}
          </button>
          <Link to="/calendar" className="english-calendar-button">
            <button className="english-button">English Calendar</button>
          </Link>
        </div>
      </header>

      <section className="calendar-section">
        <h1>לוח אירועים</h1>
        <Calendar
          onChange={onDateChange}
          value={selectedDate}
          tileContent={tileContent}
        />
      </section>

      {selectedDate && tournamentsOnDate.length > 0 && (
        <section className="calendar-tournaments-section">
          <h2>טורנירים בתאריך {selectedDate.toLocaleDateString('he-IL')}</h2>
          <ul className="calendar-tournament-list">
            {tournamentsOnDate.map(tournament => (
              <li key={tournament.id}>
                <img 
                  src={sportLogosHebrew[tournament.sport_hebrew]} 
                  alt={tournament.sport_hebrew} 
                  className="sport-logo" 
                />
                <Link to={`/tournament/${tournament.id}`}>{tournament.name_hebrew || tournament.name}</Link>
                <p>{tournament.location_hebrew || tournament.location}</p>
                <p>{new Date(tournament.date_start).toLocaleDateString('he-IL')} - {new Date(tournament.date_end).toLocaleDateString('he-IL')}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default HebrewCalendarPage;
