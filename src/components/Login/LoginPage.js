import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './LoginPage.css';
import { supabase } from '../../supabaseClient';
import logoicon from '../../assets/icon.png';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [availableSports, setAvailableSports] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
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

    fetchSports();  // Fetch available sports for the dropdown
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
    } else {
      navigate('/user-settings'); // Redirect to settings page on successful login
    }
  };

  return (
    <div className="login-page">
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
          <button onClick={() => navigate('/he/login')} className="toggle-language-button-heb">
            עברית
          </button>
        </div>
      </header>

      <div className="login-container">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
      </div>
    </div>
  );
};

export default LoginPage;
