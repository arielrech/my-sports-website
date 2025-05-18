import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SportsPage.css';
import { supabase } from '../../supabaseClient';
import icon from '../../assets/icon.png';

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

const SportsPage = () => {
  const [availableSports, setAvailableSports] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
      const fetchSports = async () => {
          const { data, error } = await supabase
              .from('tournaments')
              .select('sport');

          if (error) {
              console.error('Error fetching sports:', error);
          } else {
              const distinctSports = [...new Set(data.map(sportData => sportData.sport))].sort();
              setAvailableSports(distinctSports);
          }
      };

      fetchSports();
  }, []);

  const filteredSports = availableSports.filter(sport =>
      sport.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
      <div className="sports-ovr-page">
          {/* App Bar */}
          <header className="app-bar">
              <div className="app-bar-content">
                  <Link to="/" className="home-button">
                      <img src={icon} alt="Home" className="home-icon-sportspage" />
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
                          placeholder="Search sports..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                      />
                  </div>
                  <button onClick={() => navigate('/he/sports')} className="toggle-language-button-heb">
                      עברית
                  </button>
              </div>
          </header>

          {/* Sports Grid Section */}
          <section className="sports-general-page-grid">
              <h1>Select a Sport</h1>
              <div className="grid-sports-general-page-container">
                  {filteredSports.map(sport => (
                     <Link key={sport} to={`/sport/${sport.toLowerCase().replace(/\s+/g, '-')}`} className="sport-general-page-box">
                          <img 
                              src={sportLogos[sport]} 
                              alt={sport} 
                              className="sport-general-logo" 
                          />
                          <h3>{sport}</h3>
                      </Link>
                  ))}
              </div>
          </section>
      </div>
  );
};

export default SportsPage;