import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SportPageTemplateHebrew.css';
import { supabase } from '../../supabaseClient';
import logoicon from '../../assets/icon.png';
import { TwitterShareButton, FacebookShareButton, EmailShareButton } from 'react-share';
import { CalendarIcon, ShareIcon } from '@heroicons/react/24/solid';

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

const SportPageTemplateHebrew = ({ sportName, logo, qualification, athletes }) => {
  const [tournaments, setTournaments] = useState([]);
  const [availableSports, setAvailableSports] = useState([]);
  const [availableTypes, setAvailableTypes] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showPreviousTournaments, setShowPreviousTournaments] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTournaments = async () => {
      const { data, error } = await supabase
        .from('tournaments')
        .select('*')
        .eq('sport_hebrew', sportName)
        .order('date_start', { ascending: true });

      if (error) {
        console.error('Error fetching tournaments:', error);
      } else {
        setTournaments(data);
        const types = [...new Set(data.map(t => t.type_hebrew))].sort();
        setAvailableTypes(types);
      }
    };

    const fetchSports = async () => {
      const { data, error } = await supabase
        .from('tournaments')
        .select('sport_hebrew');

      if (error) {
        console.error('Error fetching sports:', error);
      } else {
        const validSports = [...new Set(data.map(item => item.sport_hebrew))].filter(Boolean).sort();
        setAvailableSports(validSports);
      }
    };

    fetchTournaments();
    fetchSports();
  }, [sportName]);

  const now = new Date();

  const filteredTournaments = tournaments.filter(t => {
    const endsInPast = new Date(t.date_end) < now;
    const endsInFuture = new Date(t.date_end) >= now;

    const timeMatch = showPreviousTournaments ? endsInPast : endsInFuture;
    const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(t.type_hebrew);
    const searchMatch = (t.name_hebrew || t.name).toLowerCase().includes(searchQuery.toLowerCase());

    return timeMatch && typeMatch && searchMatch;
  });

  const addToCalendar = (tournament) => {
    const event = {
      summary: tournament.name_hebrew || tournament.name,
      location: tournament.location_hebrew || tournament.location,
      description: tournament.type_specific_hebrew || tournament.type_specific,
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

  const handleTypeToggle = (type) => {
    setSelectedTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  return (
    <div className="sport-general-page" dir="rtl">
      <header className="app-bar">
        <div className="app-bar-content">
          <Link to="/he" className="home-button">
            <img src={logoicon} alt="דף הבית" className="home-icon" />
          </Link>
          <nav className="nav-links">
            <div className="dropdown">
              <Link to="/he/sports" className="dropbtn-link">
                <button className="dropbtn">ענפים</button>
              </Link>
              <div className="dropdown-content">
                {availableSports.length === 0 ? (
                  <p>אין ענפים זמינים</p>
                ) : (
                  availableSports.map(sport => (
                    <Link key={sport} to={`/he/sport/${hebrewToEnglishSportMap[sport].toLowerCase().replace(/\s+/g, '-')}`}>{sport}</Link>
                  ))
                )}
              </div>
            </div>
            <Link to="/he/calendar" className="calendar-link">לוח שנה</Link>
            <Link to="/he/user-settings" className="settings-link">הגדרות</Link>
          </nav>
          <button
            onClick={() => navigate(`/sport/${hebrewToEnglishSportMap[sportName].toLowerCase().replace(/\s+/g, '-')}`)}
            className="toggle-language-button"
          >
            English
          </button>
          <div className="search-container">
            <input
              type="text"
              className="search-bar"
              placeholder={`חפש תחרויות ${sportName}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </header>

      <section className="qualification-section">
        <img src={logo} alt={`${sportName} Logo`} className="sport-logo" />
        <div className="qualification-content">
          <h2>העפלה לאולימפיאדה</h2>
          <p>{qualification}</p>
        </div>
      </section>

      <section className="athletes-section">
        <h2>ספורטאים מצטיינים</h2>
        <div className="athletes-cards">
          {athletes.map((athlete, index) => (
            <div key={index} className="athlete-card">
              <h3>{athlete.name}</h3>
              <p>{athlete.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="filter-bar">
        <span>סנן לפי:</span>
        <div className="filter-options">
          {availableTypes.length === 0 ? (
            <p>אין סוגי תחרויות זמינים</p>
          ) : (
            availableTypes.map((type, index) => (
              <button
                key={index}
                className={`filter-square ${selectedTypes.includes(type) ? 'selected' : ''}`}
                onClick={() => handleTypeToggle(type)}
              >
                {type}
              </button>
            ))
          )}
        </div>
        <button
          className="show-previous-button"
          onClick={() => setShowPreviousTournaments(prev => !prev)}
        >
          {showPreviousTournaments ? 'הצג תחרויות עתידיות' : 'הצג תחרויות קודמות'}
        </button>
      </section>

      <section className="tournaments-section">
        <h1>תחרויות {sportName}</h1>
        <div className="tournaments-list">
          {filteredTournaments.length === 0 && <p>לא נמצאו תחרויות.</p>}
          {filteredTournaments.map((tournament, index) => (
            <div key={index} className="tournament-card">
              <img src={tournament.logo || logo} alt={`${tournament.name_hebrew || tournament.name} Logo`} className="tournament-logo" />
              <div className="tournament-details">
                <h2>{tournament.name_hebrew || tournament.name}</h2>
                <p><strong>מיקום:</strong> {tournament.location_hebrew || tournament.location}</p>
                <p><strong>ענף:</strong> {tournament.sport_hebrew || tournament.sport}</p>
                <p><strong>סוג:</strong> {tournament.type_specific_hebrew || tournament.type_specific}</p>
                <p><strong>תאריך:</strong> {new Date(tournament.date_start).toLocaleDateString()} - {new Date(tournament.date_end).toLocaleDateString()}</p>
                <div className="tournament-actions">
                  <CalendarIcon className="calendar-icon" onClick={() => addToCalendar(tournament)} />
                  <div className="share-container">
                    <ShareIcon className="share-icon" />
                    <div className="share-options">
                      <TwitterShareButton url={`http://localhost:3000/he/tournament/${tournament.id}`}>
                        <span>Twitter</span>
                      </TwitterShareButton>
                      <FacebookShareButton url={`http://localhost:3000/he/tournament/${tournament.id}`}>
                        <span>Facebook</span>
                      </FacebookShareButton>
                      <EmailShareButton url={`http://localhost:3000/he/tournament/${tournament.id}`}>
                        <span>Email</span>
                      </EmailShareButton>
                    </div>
                  </div>
                </div>
                <Link to={`/tournament/${tournament.id}`} className="details-link">צפה בפרטים</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SportPageTemplateHebrew;
