import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SportPageTemplate.css';
import { supabase } from '../../supabaseClient';
import logoicon from '../../assets/icon.png';
import { TwitterShareButton, FacebookShareButton, EmailShareButton } from 'react-share';
import { CalendarIcon, ShareIcon } from '@heroicons/react/24/solid';

const SportPageTemplate = ({ sportName, logo, qualification, athletes }) => {
  const [tournaments, setTournaments] = useState([]);
  const [availableSports, setAvailableSports] = useState([]); // State for sports
  const [availableTypes, setAvailableTypes] = useState([]); // State for types
  const [selectedTypes, setSelectedTypes] = useState([]); // State for selected types
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTournaments = async () => {
      let { data, error } = await supabase
        .from('tournaments')  // Correct table name
        .select('*')
        .eq('sport', sportName)  // Filter by the specific sport
        .order('date_start', { ascending: true });

      if (error) {
        console.error('Error fetching tournaments:', error);
      } else {
        setTournaments(data);

        // Extract distinct tournament types for the specific sport
        const types = [...new Set(data.map(tournament => tournament.type))].sort();
        setAvailableTypes(types);
      }
    };

    const fetchSports = async () => {
      const { data, error } = await supabase
        .from('tournaments')  // Query the tournaments table to extract sports
        .select('sport');  // Select the sport column

      if (error) {
        console.error('Error fetching sports:', error);
      } else {
        // Ensure the sport name is defined and not empty before processing
        const validSports = [...new Set(data.map(item => item.sport))].filter(Boolean).sort();
        setAvailableSports(validSports);
      }
    };

    fetchTournaments(); // Fetch the tournaments and related data for the specific sport
    fetchSports(); // Fetch the sports data from tournaments table
  }, [sportName, logo]);

  const addToCalendar = (tournament) => {
    const event = {
      summary: tournament.name,
      location: tournament.location,
      description: tournament.type_specific,
      start: {
        dateTime: new Date(tournament.date_start).toISOString(),
        timeZone: 'America/Los_Angeles', // Adjust timezone as necessary
      },
      end: {
        dateTime: new Date(tournament.date_end).toISOString(),
        timeZone: 'America/Los_Angeles', // Adjust timezone as necessary
      },
    };

    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.summary)}&dates=${event.start.dateTime.replace(/-|:|\.\d+/g, '')}/${event.end.dateTime.replace(/-|:|\.\d+/g, '')}&location=${encodeURIComponent(event.location)}&details=${encodeURIComponent(event.description)}`;

    window.open(googleCalendarUrl, '_blank');
  };

  const handleTypeToggle = (type) => {
    setSelectedTypes(prevSelected =>
      prevSelected.includes(type)
        ? prevSelected.filter(t => t !== type)
        : [...prevSelected, type]
    );
  };

  const filteredTournaments = tournaments.filter(tournament =>
    (selectedTypes.length === 0 || selectedTypes.includes(tournament.type)) &&
    tournament.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="sport-general-page">
      {/* App Bar */}
      <header className="app-bar-sporttemplate-eng">
        <div className="app-bar-content-sporttemplate-eng">
          <Link to="/" className="home-button">
            <img src={logoicon} alt="Home" className="home-icon" />
          </Link>
          <nav className="nav-links">
            <div className="dropdown">
              {/* Wrap the button in a Link component */}
              <Link to="/sports" className="dropbtn-link">
                <button className="dropbtn">Sports</button>
              </Link>
              <div className="dropdown-content">
                {availableSports.length === 0 ? (
                  <p>No sports available</p>
                ) : (
                  availableSports.map(sport => (
                    <Link key={sport} to={`/sport/${sport.toLowerCase().replace(/\s+/g, '-')}`}>{sport}</Link>
                  ))
                )}
              </div>
            </div>
            <Link to="/calendar" className="calendar-link">Calendar</Link>
            <Link to="/user-settings" className="settings-link">Settings</Link>
          </nav>
          <button 
  onClick={() => navigate(`/he/sport/${sportName.toLowerCase().replace(/\s+/g, '-')}`)} 
  className="toggle-language-button"
>
  עברית
</button>
          <div className="search-container">
            <input
              type="text"
              className="search-bar-sporttemplate"
              placeholder={`Search ${sportName} tournaments...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </header>

      {/* Olympic Qualification Section */}
      <section className="qualification-section">
        <img src={logo} alt={`${sportName} Logo`} className="sport-logo" />
        <div className="qualification-content">
          <h2>Olympic Qualification</h2>
          <p>{qualification}</p>
        </div>
      </section>

      {/* Distinguished Athletes Section */}
      <section className="athletes-section">
        <h2>Distinguished Athletes</h2>
        <div className="athletes-cards">
          {athletes.map((athlete, index) => (
            <div key={index} className="athlete-card">
              <h3>{athlete.name}</h3>
              <p>{athlete.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Filter App Bar */}
      <section className="filter-bar">
        <span>Filter By:</span>
        <div className="filter-options">
          {availableTypes.length === 0 ? (
            <p>No tournament types available</p>
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
        <button className="show-previous-button">Show Previous Tournaments</button>
      </section>

      {/* Tournaments Section */}
      <section className="tournaments-section">
        <h1>{sportName} Tournaments</h1>
        <div className="tournaments-list">
          {filteredTournaments.map((tournament, index) => (
            <div key={index} className="tournament-card">
              <img src={tournament.logo || logo} alt={`${tournament.name} Logo`} className="tournament-logo" />
              <div className="tournament-details">
                <h2>{tournament.name}</h2>
                <p><strong>Location:</strong> {tournament.location}</p>
                <p><strong>Sport:</strong> {tournament.sport}</p>
                <p><strong>Type:</strong> {tournament.type_specific}</p> {/* Tournament Type */}
                <p><strong>Date:</strong> {new Date(tournament.date_start).toLocaleDateString()} - {new Date(tournament.date_end).toLocaleDateString()}</p>
                <div className="tournament-actions">
                  <CalendarIcon className="calendar-icon" onClick={() => addToCalendar(tournament)} />
                  <div className="share-container">
                    <ShareIcon className="share-icon" />
                    <div className="share-options">
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
      </section>
    </div>
  );
};

export default SportPageTemplate;
