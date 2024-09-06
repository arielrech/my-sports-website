import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';
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

const MainPage = () => {
  const [tournaments, setTournaments] = useState([]);
  const [fullTournamentsList, setFullTournamentsList] = useState([]);
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
  const navigate = useNavigate(); // Hook to navigate between routes

  useEffect(() => {
    const fetchTournaments = async () => {
      const { data, error } = await supabase
        .from('tournaments')
        .select('*')
        .order('date_start', { ascending: true });

      if (error) {
        console.error('Error fetching tournaments:', error);
      } else {
        setTournaments(data);
        setFullTournamentsList(data); 
        const sports = [...new Set(data.map(tournament => tournament.sport))].sort();
        const types = [...new Set(data.map(tournament => tournament.type))].sort();
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
      setTournaments(fullTournamentsList.filter(tournament => favoriteSports.includes(tournament.sport)));
    } else {
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
      summary: tournament.name,
      location: tournament.location,
      description: tournament.type_specific,
      start: {
        dateTime: new Date(tournament.date_start).toISOString(),
        timeZone: 'America/Los_Angeles',
      },
      end: {
        dateTime: new Date(tournament.date_end).toISOString(),
        timeZone: 'America/Los_Angeles',
      },
    };

    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.summary)}&dates=${event.start.dateTime.replace(/-|:|\.\d+/g, '')}/${event.end.dateTime.replace(/-|:|\.\d+/g, '')}&location=${encodeURIComponent(event.location)}&details=${encodeURIComponent(event.description)}`;

    window.open(googleCalendarUrl, '_blank');
  };

  const filteredTournaments = tournaments.filter(tournament => {
    const now = new Date();
    const isOngoingOrUpcoming = new Date(tournament.date_end) >= now;
    const matchesSearch = tournament.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSport = filters.sport ? filters.sport.includes(tournament.sport) : true;
    const matchesType = filters.type ? tournament.type === filters.type : true;
    const matchesStartDate = filters.startDate ? new Date(tournament.date_start) >= new Date(filters.startDate) : true;
    const matchesEndDate = filters.endDate ? new Date(tournament.date_end) <= new Date(filters.endDate) : true;

    return matchesSearch && matchesSport && matchesType && matchesStartDate && matchesEndDate && (showPreviousTournaments || isOngoingOrUpcoming);
  });

  const toggleLanguage = () => {
    navigate('/he'); // Navigate to the Hebrew main page
  };

  return (
    <div>
      {/* Main App Bar */}
      <header className="app-bar">
        <div className="app-bar-content">
          <Link to="/" className="home-button">
            <img src={icon} alt="Home" className="home-icon" />
          </Link>
          <nav className="nav-links">
            <div className="dropdown">
              <Link to="/sports" className="dropbtn-link">
                <button className="dropbtn">Sports</button>
              </Link>
              <div className="dropdown-content">
                {availableSports.map(sport => (
                  <Link key={sport} to={`/sport/${sport.toLowerCase().replace(/\s+/g, '-')}`}>{sport}</Link>
                ))}
              </div>
            </div>
            <Link to="/calendar" className="calendar-link">Calendar</Link>
            <Link to="/user-settings" className="settings-link">Settings</Link>
          </nav>
          <div className="search-container">
            <input
              type="text"
              className="search-bar"
              placeholder="Search tournaments..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          {/* Language Toggle Button */}
          <button onClick={toggleLanguage} className="language-toggle-button-eng">
            עברית
          </button>
        </div>
      </header>

      {/* Filter App Bar */}
      <div className="filter-bar-main">
        <select name="sport" value={filters.sport} onChange={handleFilterChange}>
          <option value="">All Sports</option>
          {availableSports.map(sport => (
            <option key={sport} value={sport}>{sport}</option>
          ))}
        </select>
        <select name="type" value={filters.type} onChange={handleFilterChange}>
          <option value="">All Types</option>
          {availableTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        <input
          type="date"
          name="startDate"
          value={filters.startDate}
          onChange={handleFilterChange}
          placeholder="Start Date"
        />
        <input
          type="date"
          name="endDate"
          value={filters.endDate}
          onChange={handleFilterChange}
          placeholder="End Date"
        />
        <button onClick={() => setShowPreviousTournaments(!showPreviousTournaments)}>
          {showPreviousTournaments ? 'Hide Previous Tournaments' : 'Show Previous Tournaments'}
        </button>
        <button onClick={handleToggleSports} className="favorites-button">
          {showFavorites ? "Show All Sports" : "Show Favorite Sports"}
        </button>
      </div>

      {/* Tournaments Section */}
      <main className="tournaments-section-main">
        <h1>Upcoming Tournaments</h1>
        <div className="tournaments-list-main">
          {filteredTournaments.map(tournament => (
            <div key={tournament.id} className="tournament-card-main">
              <img src={sportLogos[tournament.sport]} alt={`${tournament.sport} logo`} className="sport-logo-main" />
              <div className="tournament-details-main">
                <h2>{tournament.name}</h2>
                <p><strong>Location:</strong> {tournament.location}</p>
                <p><strong>Sport:</strong> {tournament.sport}</p>
                <p><strong>Type:</strong> {tournament.type_specific}</p>
                <p><strong>Date:</strong> {new Date(tournament.date_start).toLocaleDateString()} - {new Date(tournament.date_end).toLocaleDateString()}</p>
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
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MainPage;