import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './SignUpPage.css'; // Make sure the path is correct
import { supabase } from '../../supabaseClient';
import logoicon from '../../assets/icon.png';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [language, setLanguage] = useState('English'); // Default to English
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

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      // Sign up the user
      const { data: user, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (signUpError) {
        setError(signUpError.message);
        console.error('Sign-up error:', signUpError);
        return;
      }

      if (!user) {
        setError('Sign-up was successful, but user data is missing.');
        console.error('User data is missing after sign-up.');
        return;
      }

      // Redirect to the user settings page after sign-up
      navigate('/user-settings');
    } catch (error) {
      setError('An unexpected error occurred.');
      console.error('Unexpected error during sign-up:', error);
    }
  };

  return (
    <div className="sign-up-page">
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
          <button onClick={() => navigate('/he/signup')} className="toggle-language-button-heb">
            עברית
          </button>
        </div>
      </header>

      <div className="sign-up-container">
        <h2>Sign Up</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSignUp}>
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
          <div className="language-select">
            <label htmlFor="language">Preferred Language:</label>
            <select
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="English">English</option>
              <option value="Hebrew">Hebrew</option>
            </select>
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <a href="/login">Log In</a></p>
      </div>
    </div>
  );
};

export default SignUpPage;
