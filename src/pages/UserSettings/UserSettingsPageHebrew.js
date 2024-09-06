import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserSettingsPageHebrew.css';
import { supabase } from '../../supabaseClient';
import logoicon from '../../assets/icon.png';
import { Link } from 'react-router-dom';

// Hebrew to English sport name mapping
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

const UserSettingsPageHebrew = () => {
  const [availableSports, setAvailableSports] = useState([]);
  const [selectedSports, setSelectedSports] = useState([]);
  const [language, setLanguage] = useState('Hebrew');
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate('/he/login'); // Redirect to login if user is not logged in
      } else {
        // Fetch user settings if the user is logged in
        const { data: settings, error } = await supabase
          .from('user_settings')
          .select('favorite_sports')
          .eq('user_id', user.id)
          .single();

        if (error) {
          console.error('Error fetching user settings:', error);
        } else {
          // Translate English favorite sports to Hebrew and mark them
          const favoriteSportsInHebrew = settings.favorite_sports.map(sport => {
            return Object.keys(hebrewToEnglishSportMap).find(key => hebrewToEnglishSportMap[key] === sport);
          });
          setSelectedSports(favoriteSportsInHebrew || []);
        }
      }
    };

    const fetchSports = async () => {
      setAvailableSports(Object.keys(hebrewToEnglishSportMap));
    };

    checkUser(); // Check if user is logged in
    fetchSports(); // Fetch available sports
  }, [navigate]);

  const handleSportToggle = (sport) => {
    setSelectedSports(prevSelected =>
      prevSelected.includes(sport)
        ? prevSelected.filter(s => s !== sport)
        : [...prevSelected, sport]
    );
  };

  const handleSaveSettings = async () => {
    // Retrieve the currently authenticated user
    const { data: { user }, error: userError } = await supabase.auth.getUser();

    if (userError) {
      console.error('Error fetching user:', userError);
      return;
    }

    // Translate Hebrew selected sports to English
    const favoriteSportsInEnglish = selectedSports.map(sport => hebrewToEnglishSportMap[sport]);

    try {
      const { data, error } = await supabase
        .from('user_settings')
        .upsert({
          user_id: user.id,
          favorite_sports: favoriteSportsInEnglish,
          language: 'Hebrew',
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
      navigate('/he/login'); // Redirect to login page after logout
    }
  };

  return (
    <div className="user-settings-page" dir="rtl">
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
                {availableSports.map(sport => (
                  <Link key={sport} to={`/he/sport/${hebrewToEnglishSportMap[sport].toLowerCase().replace(/\s+/g, '-')}`}>
                    {sport}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/he/calendar" className="calendar-link">לוח שנה</Link>
            <Link to="/he/user-settings" className="settings-link">הגדרות</Link>
          </nav>
          <button onClick={() => navigate('/user-settings')} className="toggle-language-button">
            English
          </button>
          <button onClick={handleLogout} className="logout-button-heb">
            התנתקות
          </button>
        </div>
      </header>

      <section className="settings-section">
        <h2>הגדרות משתמש</h2>

        <div className="favorite-sports">
          <h3>בחר את ענפי הספורט המועדפים עליך</h3>
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
          <h3>בחר שפה מועדפת</h3>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="English">אנגלית</option>
            <option value="Hebrew">עברית</option>
          </select>
        </div>

        <button onClick={handleSaveSettings} className="save-button">
          שמירת הגדרות
        </button>
      </section>
    </div>
  );
};

export default UserSettingsPageHebrew;