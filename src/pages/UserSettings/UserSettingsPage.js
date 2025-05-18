import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserSettingsPage.css';
import { supabase } from '../../supabaseClient';
import logoicon from '../../assets/icon.png';
import { Link } from 'react-router-dom';

const UserSettingsPage = () => {
  const [availableSports, setAvailableSports] = useState([]);
  const [selectedSports, setSelectedSports] = useState([]);
  const [language, setLanguage] = useState('English');
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate('/login');
      } else {
        // Try to fetch settings for this user
        const { data: settings, error } = await supabase
          .from('user_settings')
          .select('favorite_sports, language')
          .eq('user_id', user.id)
          .limit(1)
          .maybeSingle();

        if (error) {
          console.error('Error fetching user settings:', error);
        }

        if (!settings) {
          // No settings yet – create a default row
          const { error: insertError } = await supabase
            .from('user_settings')
            .insert({
              user_id: user.id,
              favorite_sports: [],
              language: 'English'
            });

          if (insertError) {
            console.error('Error creating default user settings:', insertError);
          } else {
            setSelectedSports([]);
            setLanguage('English');
          }
        } else {
          setSelectedSports(settings.favorite_sports || []);
          setLanguage(settings.language || 'English');
        }
      }
    };

    const fetchSports = async () => {
      const { data, error } = await supabase
        .from('tournaments')
        .select('sport');

      if (error) {
        console.error('Error fetching sports:', error);
      } else {
        const validSports = [...new Set(data.map(item => item.sport))].filter(Boolean).sort();
        setAvailableSports(validSports);
      }
    };

    checkUser();
    fetchSports();
  }, [navigate]);

  const handleSportToggle = (sport) => {
    setSelectedSports(prevSelected =>
      prevSelected.includes(sport)
        ? prevSelected.filter(s => s !== sport)
        : [...prevSelected, sport]
    );
  };

  const handleSaveSettings = async () => {
    const { data: { user }, error: userError } = await supabase.auth.getUser();

    if (userError) {
      console.error('Error fetching user:', userError);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('user_settings')
        .upsert({
          user_id: user.id,
          favorite_sports: selectedSports,
          language,
        }, {
          onConflict: 'user_id'
        });

      if (error) {
        console.error('Error saving user settings:', error);
      } else {
        console.log('Settings saved successfully:', data);
      }
    } catch (err) {
      console.error('Unexpected error:', err);
    }
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error during logout:', error.message);
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="user-settings-page">
      <header className="app-bar">
        <div className="app-bar-content">
          <Link to="/" className="home-button">
            <img src={logoicon} alt="Home" className="home-icon" />
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
          <button onClick={() => navigate('/he/user-settings')} className="toggle-language-button">
            עברית
          </button>
          <button onClick={handleLogout} className="logout-button">
            Log Out
          </button>
        </div>
      </header>

      <section className="settings-section">
        <h2>User Settings</h2>

        <div className="favorite-sports">
          <h3>Select Your Favorite Sports</h3>
          <div className="sports-grid">
            {availableSports.map(sport => (
              <div
                key={sport}
                className={`sport-item ${selectedSports.includes(sport) ? 'selected' : ''}`}
                onClick={() => handleSportToggle(sport)}
              >
                {sport}
              </div>
            ))}
          </div>
        </div>

        <div className="language-select">
          <h3>Select Preferred Language</h3>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="English">English</option>
            <option value="Hebrew">Hebrew</option>
          </select>
        </div>

        <button onClick={handleSaveSettings} className="save-button">
          Save Settings
        </button>
      </section>
    </div>
  );
};

export default UserSettingsPage;
