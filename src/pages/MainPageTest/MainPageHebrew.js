import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Ma
import './MainPageHebrew.css';
import { supabase } from '../../supabaseClient';
import icon from '../../assets/icon.png';
import { TwitterShareButton, FacebookShareButton, EmailShareButton } from 'react-share';
import { CalendarIcon, ShareIcon } from '@heroicons/react/24/solid';

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

const sportLogos = {
  'Archery': archeryLogo,
  'Artistic Gymnastics': artisticGymnasticsLogo,
  'Artistic Swimming': artisticSwimmingLogo,
  'Athletics': athleticsLogo,
  'Badminton': badmintonLogo,
  'Basketball': basketballLogo,
  'Basketball3vs3': basketball3vs3Logo,
  'Beach Volleyball': beachVolleyballLogo,
  'Canoe Slalom': canoeSlalomLogo,
  'Canoe Sprint': canoeSprintLogo,
  'Cycling BMX Freestyle': cyclingBmxFreestyleLogo,
  'Cycling BMX Racing': cyclingBmxRacingLogo,
  'Cycling Mountain Bike': cyclingMountainBikeLogo,
  'Diving': divingLogo,
  'Fencing': fencingLogo,
  'Field Hockey': fieldHockeyLogo,
  'Flag Football': flagFootballLogo,
  'Football': footballLogo,
  'Handball': handballLogo,
  'Judo': judoLogo,
  'Lacrosse': lacrosseLogo,
  'Marathon Swimming': marathonSwimmingLogo,
  'Rhythmic Gymnastics': rhythmicGymnasticsLogo,
  'Road Cycling': roadCyclingLogo,
  'Rowing': rowingLogo,
  'Rugby Sevens': rugbySevenLogo,
  'Sailing 470': sailing470Logo,
  'Sailing 49er': sailing49erLogo,
  'Sailing Formula Kite': sailingFormulaKiteLogo,
  'Sailing IQFoil': sailingIqFoilLogo,
  'Sailing Laser Class': sailingLaserClassLogo,
  'Sailing Nacra17': sailingNacra17Logo,
  'Sport Climbing': sportClimbingLogo,
  'Surfing': surfingLogo,
  'Swimming': swimmingLogo,
  'Taekwondo': taekwondoLogo,
  'Tennis': tennisLogo,
  'Track Cycling': trackCyclingLogo,
  'Trampoline': trampolineGymnasticsLogo,
  'Volleyball': volleyballLogo,
  'Water Polo': waterPoloLogo,
  'Wrestling': wrestlingLogo
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

const getSportLogo = (hebrewSportName) => {
  const englishSportName = hebrewToEnglishSportMap[hebrewSportName];
  return sportLogos[englishSportName];
};

const MainPageHebrew = () => {
  const [tournaments, setTournaments] = useState([]);
  const [fullTournamentsList, setFullTournamentsList] = useState([]); // State to hold the full list of tournaments
  const [showPreviousTournaments, setShowPreviousTournaments] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    sport: '',
    type: '',
    startDate: '',
    endDate: ''
  });
  const [availableSports, setAvailableSports] = useState([]);
  const [availableTypes, setAvailableTypes] = useState([]);
  const [favoriteSports, setFavoriteSports] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const navigate = useNavigate();  // Corrected import

  useEffect(() => {
    const fetchTournaments = async () => {
      const { data, error } = await supabase
        .from('tournaments')
        .select('id, name_hebrew, sport_hebrew, location_hebrew, type_hebrew, type_specific_hebrew, date_start, date_end')
        .order('date_start', { ascending: true });

      if (error) {
        console.error('Error fetching tournaments:', error);
      } else {
        setTournaments(data);
        setFullTournamentsList(data); // Store the full list of tournaments
        const sports = [...new Set(data.map(tournament => tournament.sport_hebrew))].sort();
        const types = [...new Set(data.map(tournament => tournament.type_hebrew))].sort();
        setAvailableSports(sports);
        setAvailableTypes(types);
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
          console.error('Error fetching favorite sports:', error);
        } else {
          setFavoriteSports(data.favorite_sports || []);
        }
      }
    };

    fetchTournaments();
    fetchFavoriteSports();
  }, []);

  const handleToggleSports = () => {
    setShowFavorites(prevState => !prevState);
    if (!showFavorites) {
      // Filter tournaments by favorite sports using Hebrew names
      setTournaments(fullTournamentsList.filter(tournament => favoriteSports.includes(hebrewToEnglishSportMap[tournament.sport_hebrew])));
    } else {
      // Show all sports
      setTournaments(fullTournamentsList);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  const addToCalendar = (tournament) => {
    const event = {
      summary: tournament.name_hebrew,
      location: tournament.location_hebrew,
      description: tournament.type_specific_hebrew,
      start: {
        dateTime: new Date(tournament.date_start).toISOString(),
        timeZone: 'Asia/Jerusalem',
      },
      end: {
        dateTime: new Date(tournament.date_end).toISOString(),
        timeZone: 'Asia/Jerusalem',
      },
    };

    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.summary)}&dates=${event.start.dateTime.replace(/-|:|\.\d+/g, '')}/${event.end.dateTime.replace(/-|:|\.\d+/g, '')}&location=${encodeURIComponent(event.location)}&details=${encodeURIComponent(event.description)}`;

    window.open(googleCalendarUrl, '_blank');
  };

  const filteredTournaments = tournaments.filter(tournament => {
    const now = new Date();
    const isOngoingOrUpcoming = new Date(tournament.date_end) >= now;
    const matchesSearch = tournament.name_hebrew.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSport = filters.sport ? tournament.sport_hebrew === filters.sport : true;
    const matchesType = filters.type ? tournament.type_hebrew === filters.type : true;
    const matchesStartDate = filters.startDate ? new Date(tournament.date_start) >= new Date(filters.startDate) : true;
    const matchesEndDate = filters.endDate ? new Date(tournament.date_end) <= new Date(filters.endDate) : true;
  
    return matchesSearch && matchesSport && matchesType && matchesStartDate && matchesEndDate && (showPreviousTournaments || isOngoingOrUpcoming);
  });
  

  return (
    <div className="hebrew-page">
      {/* Main App Bar */}
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
            <Link to="/he/user-settings" className="settings-link">הגדרות</Link>
          </nav>
          <div className="search-container">
            <input
              type="text"
              className="search-bar"
              placeholder="חפש תחרויות..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          {/* Toggle to English Button */}
          <button onClick={() => navigate('/')} className="toggle-language-button-heb">
            English
          </button>
        </div>
      </header>

      {/* Filter App Bar */}
      <div className="filter-bar-main">
        <select name="sport" value={filters.sport} onChange={handleFilterChange}>
          <option value="">כל הענפים</option>
          {availableSports.map(sport => (
            <option key={sport} value={sport}>{sport}</option>
          ))}
        </select>
        <select name="type" value={filters.type} onChange={handleFilterChange}>
          <option value="">כל הסוגים</option>
          {availableTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        <input
          type="date"
          name="startDate"
          value={filters.startDate}
          onChange={handleFilterChange}
          placeholder="תאריך התחלה"
        />
        <input
          type="date"
          name="endDate"
          value={filters.endDate}
          onChange={handleFilterChange}
          placeholder="תאריך סיום"
        />
        <button onClick={() => setShowPreviousTournaments(!showPreviousTournaments)}>
          {showPreviousTournaments ? 'הסתר תחרויות קודמות' : 'הצג תחרויות קודמות'}
        </button>
        <button onClick={handleToggleSports} className="favorites-button">
          {showFavorites ? "הצג את כל הענפים" : "הצג ענפים מועדפים"}
        </button>
      </div>

      {/* Tournaments Section */}
      <main className="tournaments-section-main">
        <h1>תחרויות קרובות</h1>
        <div className="tournaments-list-main">
          {filteredTournaments.map(tournament => (
            <div key={tournament.id} className="tournament-card-main">
              <img src={getSportLogo(tournament.sport_hebrew)} alt={`${tournament.sport_hebrew} logo`} className="sport-logo-main" />
              <div className="tournament-details-main">
                <h2>{tournament.name_hebrew}</h2>
                <p><strong>מיקום:</strong> {tournament.location_hebrew}</p>
                <p><strong>ענף:</strong> {tournament.sport_hebrew}</p>
                <p><strong>סוג:</strong> {tournament.type_specific_hebrew}</p>
                <p><strong>תאריך:</strong> {new Date(tournament.date_start).toLocaleDateString()} - {new Date(tournament.date_end).toLocaleDateString()}</p>
                <div className="tournament-actions-main">
                  <CalendarIcon className="calendar-icon-main" onClick={() => addToCalendar(tournament)} />
                  <div className="share-container-main">
                    <ShareIcon className="share-icon-main" />
                    <div className="share-options-main">
                      <TwitterShareButton url={`http://localhost:3000/tournament/${tournament.id}`}>
                        <span>Twitter</span>
                      </TwitterShareButton>
                      <FacebookShareButton url={`http://localhost:3000/tournament/${tournament.id}`}>
                        <span>Facebook</span>
                      </FacebookShareButton>
                      <EmailShareButton url={`http://localhost:3000/tournament/${tournament.id}`}>
                        <span>Email</span>
                      </EmailShareButton>
                    </div>
                  </div>
                </div>
                <Link to={`/tournament/${tournament.id}`} className="details-link-main">פרטים נוספים</Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MainPageHebrew;