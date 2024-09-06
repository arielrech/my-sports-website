import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './SignUpPageHebrew.css'; // Ensure you create a corresponding CSS file for Hebrew styles
import { supabase } from '../../supabaseClient';
import logoicon from '../../assets/icon.png';

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

const SignUpPageHebrew = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [language, setLanguage] = useState('Hebrew'); // Default to Hebrew
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      // Sign up the user
      const { user, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (signUpError) {
        setError(signUpError.message);
        console.error('Sign-up error:', signUpError);
        return;
      }

      if (!user) {
        setError('הרשמה הושלמה בהצלחה, אך נתוני המשתמש חסרים.');
        console.error('User data is missing after sign-up.');
        return;
      }

      // Navigate to the settings page after successful sign-up
      navigate('/he/user-settings');
    } catch (error) {
      setError('אירעה שגיאה בלתי צפויה.');
      console.error('Unexpected error during sign-up:', error);
    }
  };

  return (
    <div className="sign-up-page" dir="rtl">
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
                {Object.keys(hebrewToEnglishSportMap).map(sport => (
                  <Link key={sport} to={`/he/sport/${hebrewToEnglishSportMap[sport].toLowerCase().replace(/\s+/g, '-')}`}>{sport}</Link>
                ))}
              </div>
            </div>
            <Link to="/he/calendar" className="calendar-link">לוח שנה</Link>
            <Link to="/he/user-settings" className="settings-link">הגדרות</Link>
          </nav>
          <button onClick={() => navigate('/signup')} className="toggle-language-button-eng">
            English
          </button>
        </div>
      </header>

      <div className="sign-up-container">
        <h2>הרשמה</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSignUp}>
          <input
            type="email"
            placeholder="אימייל"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="סיסמה"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="language-select">
            <label htmlFor="language">שפה מועדפת:</label>
            <select
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="English">אנגלית</option>
              <option value="Hebrew">עברית</option>
            </select>
          </div>
          <button type="submit">הרשמה</button>
        </form>
        <p>כבר יש לך חשבון? <a href="/he/login">התחבר</a></p>
      </div>
    </div>
  );
};

export default SignUpPageHebrew;
