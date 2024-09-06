import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Main Pages
import HomePage from './pages/MainPageTest/MainPage';
import HomePageHebrew from './pages/MainPageTest/MainPageHebrew';

// Sports Pages
import SportsPage from './pages/SportsPage/SportsPage';
import SportsPageHebrew from './pages/SportsPage/SportsPageHebrew';

// Calendar Pages
import CalendarPage from './pages/CalendarPage/CalendarPage';
import CalendarPageHebrew from './pages/CalendarPage/CalendarPageHebrew';

// User Settings Pages
import UserSettingsPage from './pages/UserSettings/UserSettingsPage';
import UserSettingsPageHebrew from './pages/UserSettings/UserSettingsPageHebrew';

// Login Pages
import LoginPage from './components/Login/LoginPage';
import LoginPageHebrew from './components/Login/LoginPageHebrew';

// Sign Up Pages
import SignUpPage from './components/SingUp/SignUpPage';
import SignUpPageHebrew from './components/SingUp/SignUpPageHebrew';

// English Sports Pages
import ArcheryPage from './pages/Sports/Archery/ArcheryPage';
import AthleticsPage from './pages/Sports/Athletics/AthleticsPage';
import ArtisticGymnasticsPage from './pages/Sports/ArtisticGymnastics/ArtisticGymnasticsPage';
import ArtisticSwimmingPage from './pages/Sports/ArtisticSwimming/ArtisticSwimmingPage';
import BadmintonPage from './pages/Sports/Badminton/BadmintonPage';
import BasketballPage from './pages/Sports/Basketball/BasketballPage';
import Basketball3vs3Page from './pages/Sports/Basketball3vs3/Basketball3vs3Page';
import BeachVolleyballPage from './pages/Sports/BeachVolleyball/BeachVolleyballPage';
import CanoeSlalomPage from './pages/Sports/CanoeSlalom/CanoeSlalomPage';
import CanoeSprintPage from './pages/Sports/CanoeSprint/CanoeSprintPage';
import CyclingBmxFreestylePage from './pages/Sports/CyclingBmxFreestyle/CyclingBmxFreestylePage';
import CyclingBmxRacingPage from './pages/Sports/CyclingBmxRacing/CyclingBmxRacingPage';
import CyclingMountainBikePage from './pages/Sports/CyclingMountainBike/CyclingMountainBikePage';
import DivingPage from './pages/Sports/Diving/DivingPage';
import FencingPage from './pages/Sports/Fencing/FencingPage';
import FieldHockeyPage from './pages/Sports/FieldHockey/FieldHockeyPage';
import FlagFootballPage from './pages/Sports/FlagFootball/FlagFootballPage';
import FootballPage from './pages/Sports/Football/FootballPage';
import HandballPage from './pages/Sports/Handball/HandballPage';
import JudoPage from './pages/Sports/Judo/JudoPage';
import LacrossePage from './pages/Sports/Lacrosse/LacrossePage';
import MarathonSwimmingPage from './pages/Sports/MarathonSwimming/MarathonSwimmingPage';
import RhythmicGymnasticsPage from './pages/Sports/RhythmicGymnastics/RhythmicGymnasticsPage';
import RoadCyclingPage from './pages/Sports/RoadCycling/RoadCyclingPage';
import RowingPage from './pages/Sports/Rowing/RowingPage';
import RugbySevenPage from './pages/Sports/RugbySeven/RugbySevenPage';
import Sailing470Page from './pages/Sports/Sailing470/Sailing470Page';
import Sailing49erPage from './pages/Sports/Sailing49er/Sailing49erPage';
import SailingFormulaKitePage from './pages/Sports/SailingFormulaKite/SailingFormulaKitePage';
import SailingIqFoilPage from './pages/Sports/SailingIqFoil/SailingIqFoilPage';
import SailingLaserClassPage from './pages/Sports/SailingLaserClass/SailingLaserClassPage';
import SailingNacra17Page from './pages/Sports/SailingNacra17/SailingNacra17Page';
import SportClimbingPage from './pages/Sports/SportClimbing/SportClimbingPage';
import SurfingPage from './pages/Sports/Surfing/SurfingPage';
import SwimmingPage from './pages/Sports/Swimming/SwimmingPage';
import TaekwondoPage from './pages/Sports/Taekwondo/TaekwondoPage';
import TennisPage from './pages/Sports/Tennis/TennisPage';
import TrackCyclingPage from './pages/Sports/TrackCycling/TrackCyclingPage';
import TrampolineGymnasticsPage from './pages/Sports/TrampolineGymnastics/TrampolineGymnasticsPage';
import VolleyballPage from './pages/Sports/Volleyball/VolleyballPage';
import WaterPoloPage from './pages/Sports/WaterPolo/WaterPoloPage';
import WrestlingPage from './pages/Sports/Wrestling/WrestlingPage';

// Hebrew Sports Pages
import ArcheryPageHebrew from './pages/Sports/Archery/ArcheryPageHebrew';
import AthleticsPageHebrew from './pages/Sports/Athletics/AthleticsPageHebrew';
import ArtisticGymnasticsPageHebrew from './pages/Sports/ArtisticGymnastics/ArtisticGymnasticsPageHebrew';
import ArtisticSwimmingPageHebrew from './pages/Sports/ArtisticSwimming/ArtisticSwimmingPageHebrew';
import BadmintonPageHebrew from './pages/Sports/Badminton/BadmintonPageHebrew';
import BasketballPageHebrew from './pages/Sports/Basketball/BasketballPageHebrew';
import Basketball3vs3PageHebrew from './pages/Sports/Basketball3vs3/Basketball3vs3PageHebrew';
import BeachVolleyballPageHebrew from './pages/Sports/BeachVolleyball/BeachVolleyballPageHebrew';
import CanoeSlalomPageHebrew from './pages/Sports/CanoeSlalom/CanoeSlalomPageHebrew';
import CanoeSprintPageHebrew from './pages/Sports/CanoeSprint/CanoeSprintPageHebrew';
import CyclingBmxFreestylePageHebrew from './pages/Sports/CyclingBmxFreestyle/CyclingBmxFreestylePageHebrew';
import CyclingBmxRacingPageHebrew from './pages/Sports/CyclingBmxRacing/CyclingBmxRacingPageHebrew';
import CyclingMountainBikePageHebrew from './pages/Sports/CyclingMountainBike/CyclingMountainBikePageHebrew';
import DivingPageHebrew from './pages/Sports/Diving/DivingPageHebrew';
import FencingPageHebrew from './pages/Sports/Fencing/FencingPageHebrew';
import FieldHockeyPageHebrew from './pages/Sports/FieldHockey/FieldHockeyPageHebrew';
import FlagFootballPageHebrew from './pages/Sports/FlagFootball/FlagFootballPageHebrew';
import FootballPageHebrew from './pages/Sports/Football/FootballPageHebrew';
import HandballPageHebrew from './pages/Sports/Handball/HandballPageHebrew';
import JudoPageHebrew from './pages/Sports/Judo/JudoPageHebrew';
import LacrossePageHebrew from './pages/Sports/Lacrosse/LacrossePageHebrew';
import MarathonSwimmingPageHebrew from './pages/Sports/MarathonSwimming/MarathonSwimmingPageHebrew';
import RhythmicGymnasticsPageHebrew from './pages/Sports/RhythmicGymnastics/RhythmicGymnasticsPageHebrew';
import RoadCyclingPageHebrew from './pages/Sports/RoadCycling/RoadCyclingPageHebrew';
import RowingPageHebrew from './pages/Sports/Rowing/RowingPageHebrew';
import RugbySevenPageHebrew from './pages/Sports/RugbySeven/RugbySevenPageHebrew';
import Sailing470PageHebrew from './pages/Sports/Sailing470/Sailing470PageHebrew';
import Sailing49erPageHebrew from './pages/Sports/Sailing49er/Sailing49erPageHebrew';
import SailingFormulaKitePageHebrew from './pages/Sports/SailingFormulaKite/SailingFormulaKitePageHebrew';
import SailingIqFoilPageHebrew from './pages/Sports/SailingIqFoil/SailingIqFoilPageHebrew';
import SailingLaserClassPageHebrew from './pages/Sports/SailingLaserClass/SailingLaserClassPageHebrew';
import SailingNacra17PageHebrew from './pages/Sports/SailingNacra17/SailingNacra17PageHebrew';
import SportClimbingPageHebrew from './pages/Sports/SportClimbing/SportClimbingPageHebrew';
import SurfingPageHebrew from './pages/Sports/Surfing/SurfingPageHebrew';
import SwimmingPageHebrew from './pages/Sports/Swimming/SwimmingPageHebrew';
import TaekwondoPageHebrew from './pages/Sports/Taekwondo/TaekwondoPageHebrew';
import TennisPageHebrew from './pages/Sports/Tennis/TennisPageHebrew';
import TrackCyclingPageHebrew from './pages/Sports/TrackCycling/TrackCyclingPageHebrew';
import TrampolineGymnasticsPageHebrew from './pages/Sports/TrampolineGymnastics/TrampolineGymnasticsPageHebrew';
import VolleyballPageHebrew from './pages/Sports/Volleyball/VolleyballPageHebrew';
import WaterPoloPageHebrew from './pages/Sports/WaterPolo/WaterPoloPageHebrew';
import WrestlingPageHebrew from './pages/Sports/Wrestling/WrestlingPageHebrew';

// Tournament Pages

// Archery
import Archery2025WCu1Page from './pages/Tournaments/Archery/Archery2025WCu1';
import Archery2025WCu2Page from './pages/Tournaments/Archery/Archery2025WCu2';
import Archery2025WCu3Page from './pages/Tournaments/Archery/Archery2025WCu3';
import Archery2025WCu4Page from './pages/Tournaments/Archery/Archery2025WCu4';
import Archery2026WCu1Page from './pages/Tournaments/Archery/Archery2026WCu1';
import Archery2026WCu2Page from './pages/Tournaments/Archery/Archery2026WCu2';
import Archery2026WCu3Page from './pages/Tournaments/Archery/Archery2026WCu3';
import Archery2026WCu4Page from './pages/Tournaments/Archery/Archery2026WCu4';
import Archery2027WCu1Page from './pages/Tournaments/Archery/Archery2027WCu1';
import Archery2027WCu2Page from './pages/Tournaments/Archery/Archery2027WCu2';
import Archery2027WCu3Page from './pages/Tournaments/Archery/Archery2027WCu3';
import Archery2027WCu4Page from './pages/Tournaments/Archery/Archery2027WCu4';

// Artistic Gymnastics
import Agymnastics2025WChPage from './pages/Tournaments/ArtisticGymnastics/Agymnastics2025WCh';
import Agymnastics2025EChPage from './pages/Tournaments/ArtisticGymnastics/Agymnastics2025ECh';
import Agymnastics2026WChPage from './pages/Tournaments/ArtisticGymnastics/Agymnastics2026WCh';
import Agymnastics2027WChPage from './pages/Tournaments/ArtisticGymnastics/Agymnastics2027WCh';
import Agymnastics2025WC1Page from './pages/Tournaments/ArtisticGymnastics/Agymnastics2025WC1';
import Agymnastics2025WC2Page from './pages/Tournaments/ArtisticGymnastics/Agymnastics2025WC2';
import Agymnastics2025WC3Page from './pages/Tournaments/ArtisticGymnastics/Agymnastics2025WC3';
import Agymnastics2025WC4Page from './pages/Tournaments/ArtisticGymnastics/Agymnastics2025WC4';
import Agymnastics2025WC5Page from './pages/Tournaments/ArtisticGymnastics/Agymnastics2025WC5';
import Agymnastics2025WC6Page from './pages/Tournaments/ArtisticGymnastics/Agymnastics2025WC6';
import Agymnastics2025WoCha1Page from './pages/Tournaments/ArtisticGymnastics/Agymnastics2025WoCha1';
import Agymnastics2025WoCha2Page from './pages/Tournaments/ArtisticGymnastics/Agymnastics2025WoCha2';
import Agymnastics2025WoCha3Page from './pages/Tournaments/ArtisticGymnastics/Agymnastics2025WoCha3';
import Agymnastics2025WoCha4Page from './pages/Tournaments/ArtisticGymnastics/Agymnastics2025WoCha4';
import Agymnastics2025WoCha5Page from './pages/Tournaments/ArtisticGymnastics/Agymnastics2025WoCha5';

// Artistic Swimming
import ArtisticSwimming2025WChPage from './pages/Tournaments/ArtisticSwimming/ArtisticSwimming2025WCh';
import ArtisticSwimming2025EChPage from './pages/Tournaments/ArtisticSwimming/ArtisticSwimming2025ECh';
import ArtisticSwimming2025JEChPage from './pages/Tournaments/ArtisticSwimming/ArtisticSwimming2025JECh';
import ArtisticSwimming2024JWChPage from './pages/Tournaments/ArtisticSwimming/ArtisticSwimming2024JWCh';

// Athletics
import Athletics2025WChPage from './pages/Tournaments/Athletics/Athletics2025WCh';
import Athletics2026EChPage from './pages/Tournaments/Athletics/Athletics2026ECh';
import Athletics2024DL1Page from './pages/Tournaments/Athletics/Athletics2024DL1';
import Athletics2024DL2Page from './pages/Tournaments/Athletics/Athletics2024DL2';
import Athletics2024DL3Page from './pages/Tournaments/Athletics/Athletics2024DL3';
import Athletics2024DL4Page from './pages/Tournaments/Athletics/Athletics2024DL4';
import Athletics2024DL5Page from './pages/Tournaments/Athletics/Athletics2024DL5';
import Athletics2024U20WChPage from './pages/Tournaments/Athletics/Athletics2024U20WCh';
import Athletics2025IDWChPage from './pages/Tournaments/Athletics/Athletics2025IDWCh';
import Athletics2026IDWChPage from './pages/Tournaments/Athletics/Athletics2026IDWCh';
import Athletics2026U20WChPage from './pages/Tournaments/Athletics/Athletics2026U20WCh';
import Athletics2025U23EChPage from './pages/Tournaments/Athletics/Athletics2025U23ECh';
import Athletics2025U20EChPage from './pages/Tournaments/Athletics/Athletics2025U20ECh';

// Badminton
import Badminton2024JEChPage from './pages/Tournaments/Badminton/Badminton2024JECh';
import Badminton2024JWChTePage from './pages/Tournaments/Badminton/Badminton2024JWChTe';
import Badminton2024JWChInPage from './pages/Tournaments/Badminton/Badminton2024JWChIn';
import Badminton2024JWT1Page from './pages/Tournaments/Badminton/Badminton2024JWT1';
import Badminton2024JWTFiPage from './pages/Tournaments/Badminton/Badminton2024JWTFi';

// Basketball
import Basketball2025EChMPage from './pages/Tournaments/Basketball/Basketball2025EChM';
import Basketball2025EChWPage from './pages/Tournaments/Basketball/Basketball2025EChW';
import Basketball2027WChMPage from './pages/Tournaments/Basketball/Basketball2027WChM';
import Basketball2026WChWPage from './pages/Tournaments/Basketball/Basketball2026WChW';
import Basketball2025AChMPage from './pages/Tournaments/Basketball/Basketball2025AChM';
import Basketball2025AChWPage from './pages/Tournaments/Basketball/Basketball2025AChW';
import Basketball2025WChMU19Page from './pages/Tournaments/Basketball/Basketball2025WChMU19';
import Basketball2025WChWU19Page from './pages/Tournaments/Basketball/Basketball2025WChWU19';
import Basketball2027WChMU19Page from './pages/Tournaments/Basketball/Basketball2027WChMU19';
import Basketball2027WChWU19Page from './pages/Tournaments/Basketball/Basketball2027WChWU19';

// Basketball 3vs3
import Basketball3vs32024EChPage from './pages/Tournaments/Basketball3vs3/Basketball3vs32024ECh';
import Basketball3vs32024WChU18Page from './pages/Tournaments/Basketball3vs3/Basketball3vs32024WChU18';
import Basketball3vs32024WChU23Page from './pages/Tournaments/Basketball3vs3/Basketball3vs32024WChU23';
import Basketball3vs32025WChPage from './pages/Tournaments/Basketball3vs3/Basketball3vs32025WCh';

// Beach Volleyball
import BeachVolleyball2024E16BPT1Page from './pages/Tournaments/BeachVolleyball/BeachVolleyball2024E16BPT1';
import BeachVolleyball2024E16BPT2Page from './pages/Tournaments/BeachVolleyball/BeachVolleyball2024E16BPT2';
import BeachVolleyball2024FinalsBPTPage from './pages/Tournaments/BeachVolleyball/BeachVolleyball2024FinalsBPT';
import BeachVolleyball2025WChPage from './pages/Tournaments/BeachVolleyball/BeachVolleyball2025WCh';
import BeachVolleyball2024WChU19Page from './pages/Tournaments/BeachVolleyball/BeachVolleyball2024WChU19';

// Canoe Slalom
import CanoeSlalom2024WCu1Page from './pages/Tournaments/CanoeSlalom/CanoeSlalom2024WCu1';
import CanoeSlalom2024WCu2Page from './pages/Tournaments/CanoeSlalom/CanoeSlalom2024WCu2';
import CanoeSlalom2025WCu1Page from './pages/Tournaments/CanoeSlalom/CanoeSlalom2025WCu1';
import CanoeSlalom2025WCu2Page from './pages/Tournaments/CanoeSlalom/CanoeSlalom2025WCu2';
import CanoeSlalom2025WCu3Page from './pages/Tournaments/CanoeSlalom/CanoeSlalom2025WCu3';
import CanoeSlalom2025WCu4Page from './pages/Tournaments/CanoeSlalom/CanoeSlalom2025WCu4';
import CanoeSlalom2025WCu5Page from './pages/Tournaments/CanoeSlalom/CanoeSlalom2025WCu5';
import CanoeSlalom2025WChJuPage from './pages/Tournaments/CanoeSlalom/CanoeSlalom2025WChJu';
import CanoeSlalom2025WChPage from './pages/Tournaments/CanoeSlalom/CanoeSlalom2025WCh';
import CanoeSlalom2025EChJuPage from './pages/Tournaments/CanoeSlalom/CanoeSlalom2025EChJu';
import CanoeSlalom2025EChPage from './pages/Tournaments/CanoeSlalom/CanoeSlalom2025ECh';

// Canoe Sprint
import CanoeSprint2024WChPage from './pages/Tournaments/CanoeSprint/CanoeSprint2024WCh';
import CanoeSprint2025WCu1Page from './pages/Tournaments/CanoeSprint/CanoeSprint2025WCu1';
import CanoeSprint2025WCu2Page from './pages/Tournaments/CanoeSprint/CanoeSprint2025WCu2';
import CanoeSprint2024WChJuPage from './pages/Tournaments/CanoeSprint/CanoeSprint2024WChJu';
import CanoeSprint2025WChPage from './pages/Tournaments/CanoeSprint/CanoeSprint2025WCh';
import CanoeSprint2025EChPage from './pages/Tournaments/CanoeSprint/CanoeSprint2025ECh';
import CanoeSprint2025EChJuPage from './pages/Tournaments/CanoeSprint/CanoeSprint2025EChJu';

// Cycling BMX Freestyle
import CyclingBMXFreestyle2024EChPage from './pages/Tournaments/CyclingBMXFreestyle/CyclingBMXFreestyle2024ECh';
import CyclingBMXFreestyle2024WChPage from './pages/Tournaments/CyclingBMXFreestyle/CyclingBMXFreestyle2024WCh';
import CyclingBMXFreestyle2024WCuPage from './pages/Tournaments/CyclingBMXFreestyle/CyclingBMXFreestyle2024WCu';
import CyclingBMXFreestyle2025WChPage from './pages/Tournaments/CyclingBMXFreestyle/CyclingBMXFreestyle2025WCh';

// Cycling BMX Racing
import CyclingBMXRacing2025WChPage from './pages/Tournaments/CyclingBMXRacing/CyclingBMXRacing2025WCh';
import CyclingBMXRacing2024EChPage from './pages/Tournaments/CyclingBMXRacing/CyclingBMXRacing2024ECh';
import CyclingBMXRacing2025EChPage from './pages/Tournaments/CyclingBMXRacing/CyclingBMXRacing2025ECh';
import CyclingBMXRacing2027EChPage from './pages/Tournaments/CyclingBMXRacing/CyclingBMXRacing2027ECh';
import CyclingBMXRacing2024ECu1Page from './pages/Tournaments/CyclingBMXRacing/CyclingBMXRacing2024ECu1';

// Cycling Mountain Bike
import CyclingMountainBike2024WCu1Page from './pages/Tournaments/CyclingMountainBike/CyclingMountainBike2024WCu1';
import CyclingMountainBike2024WCu2Page from './pages/Tournaments/CyclingMountainBike/CyclingMountainBike2024WCu2';
import CyclingMountainBike2024WCu3Page from './pages/Tournaments/CyclingMountainBike/CyclingMountainBike2024WCu3';
import CyclingMountainBike2024WChPage from './pages/Tournaments/CyclingMountainBike/CyclingMountainBike2024WCh';
import CyclingMountainBike2025WChPage from './pages/Tournaments/CyclingMountainBike/CyclingMountainBike2025WCh';
import CyclingMountainBike2026WChPage from './pages/Tournaments/CyclingMountainBike/CyclingMountainBike2026WCh';
import CyclingMountainBike2025EChPage from './pages/Tournaments/CyclingMountainBike/CyclingMountainBike2025ECh';

// Diving
import Diving2024WChJuPage from './pages/Tournaments/Diving/Diving2024WChJu';
import Diving2025WChPage from './pages/Tournaments/Diving/Diving2025WCh';
import Diving2025WChJuPage from './pages/Tournaments/Diving/Diving2025WChJu';
import Diving2025EChPage from './pages/Tournaments/Diving/Diving2025ECh';

// Fencing
import Fencing2025WChPage from './pages/Tournaments/Fencing/Fancing2025Wch';
import Fencing2025GPxS1Page from './pages/Tournaments/Fencing/Fancing2025GPxS1';
import Fencing2025GPxS2Page from './pages/Tournaments/Fencing/Fancing2025GPxS2';
import Fencing2025GPxS3Page from './pages/Tournaments/Fencing/Fancing2025GPxS3';
import Fencing2025GPxE1Page from './pages/Tournaments/Fencing/Fancing2025GPxE1';
import Fencing2025GPxE2Page from './pages/Tournaments/Fencing/Fancing2025GPxE2';
import Fencing2025GPxE3Page from './pages/Tournaments/Fencing/Fancing2025GPxE3';
import Fencing2025GPxF1Page from './pages/Tournaments/Fencing/Fancing2025GPxF1';
import Fencing2025GPxF2Page from './pages/Tournaments/Fencing/Fancing2025GPxF2';
import Fencing2025GPxF3Page from './pages/Tournaments/Fencing/Fancing2025GPxF3';
import Fencing2025WChJuPage from './pages/Tournaments/Fencing/Fancing2025WchJu';
import Fencing2025EChPage from './pages/Tournaments/Fencing/Fancing2025Ech';
import Fencing2025EChJuPage from './pages/Tournaments/Fencing/Fancing2025EchJu';

// Field Hockey
import FieldHockey2025PAChPage from './pages/Tournaments/FieldHockey/FieldHockey2025PACh';
import FieldHockey2026WChPage from './pages/Tournaments/FieldHockey/FieldHockey2026WCh';
import FieldHockey2025EChPage from './pages/Tournaments/FieldHockey/FieldHockey2025ECh';

// Flag Football
import FlagFootball2024WChPage from './pages/Tournaments/FlagFootball/FlagFootball2024WCh';
import FlagFootball2025WGPage from './pages/Tournaments/FlagFootball/FlagFootball2025WG';
import FlagFootball2024EChJuPage from './pages/Tournaments/FlagFootball/FlagFootball2024EChJu';
import FlagFootball2025WChJuPage from './pages/Tournaments/FlagFootball/FlagFootball2025WChJu';

// Football
import Football2026WChMPage from './pages/Tournaments/Football/Football2026WChM';
import Football2030WChMPage from './pages/Tournaments/Football/Football2030WChM';
import Football2027WChFPage from './pages/Tournaments/Football/Football2027WChF';
import Football2028EChMPage from './pages/Tournaments/Football/Football2028EChM';
import Football2032EChMPage from './pages/Tournaments/Football/Football2032EChM';
import Football2025EChFPage from './pages/Tournaments/Football/Football2025EChF';
import Football2024WChFU20Page from './pages/Tournaments/Football/Football2024WChFU20';
import Football2024WChFU17Page from './pages/Tournaments/Football/Football2024WChFU17';

// Handball
import Handball2025WChMPage from './pages/Tournaments/Handball/Handball2025WChM';
import Handball2027WChMPage from './pages/Tournaments/Handball/Handball2027WChM';
import Handball2029WChMPage from './pages/Tournaments/Handball/Handball2029WChM';
import Handball2031WChMPage from './pages/Tournaments/Handball/Handball2031WChM';
import Handball2026EChMPage from './pages/Tournaments/Handball/Handball2026EChM';
import Handball2025JWChMPage from './pages/Tournaments/Handball/Handball2025JWChM';
import Handball2025WChWPage from './pages/Tournaments/Handball/Handball2025WChW';
import Handball2027WChWPage from './pages/Tournaments/Handball/Handball2027WChW';
import Handball2029WChWPage from './pages/Tournaments/Handball/Handball2029WChW';
import Handball2031WChWPage from './pages/Tournaments/Handball/Handball2031WChW';
import Handball2024EChWPage from './pages/Tournaments/Handball/Handball2024EChW';
import Handball2026EChWPage from './pages/Tournaments/Handball/Handball2026EChW';
import Handball2028EChWPage from './pages/Tournaments/Handball/Handball2028EChW';
import Handball2028EChMPage from './pages/Tournaments/Handball/Handball2028EChM';

// Judo
import Judo2024GS1Page from './pages/Tournaments/Judo/Judo2024GS1';
import Judo2024GS2Page from './pages/Tournaments/Judo/Judo2024GS2';
import Judo2024GP1Page from './pages/Tournaments/Judo/Judo2024GP1';
import Judo2024JWCPage from './pages/Tournaments/Judo/Judo2024JWC';
import Judo2024CWCPage from './pages/Tournaments/Judo/Judo2024CWC';
import Judo2024JECPage from './pages/Tournaments/Judo/Judo2024JEC';

// Lacrosse
import Lacrosse2024WChU20Page from './pages/Tournaments/Lacrosse/Lacrosse2024WChU20';
import Lacrosse2025WChU20Page from './pages/Tournaments/Lacrosse/Lacrosse2025WChU20';

// Marathon Swimming
import OpenWater2024WCu1Page from './pages/Tournaments/MarathonSwimming/OpenWater2024WCu1';
import OpenWater2024WCu2Page from './pages/Tournaments/MarathonSwimming/OpenWater2024WCu2';
import OpenWater2024WCu3Page from './pages/Tournaments/MarathonSwimming/OpenWater2024WCu3';
import OpenWater2026EChPage from './pages/Tournaments/MarathonSwimming/OpenWater2026ECh';
import OpenWater2025WChPage from './pages/Tournaments/MarathonSwimming/OpenWater2025WCh';
import OpenWater2024WChJuPage from './pages/Tournaments/MarathonSwimming/OpenWater2024WChJu';
import OpenWater2024SwCu1Page from './pages/Tournaments/MarathonSwimming/OpenWater2024SwCu1';
import OpenWater2024SwCu2Page from './pages/Tournaments/MarathonSwimming/OpenWater2024SwCu2';
import OpenWater2024SwCu3Page from './pages/Tournaments/MarathonSwimming/OpenWater2024SwCu3';

// Rhythmic Gymnastics
import Rgymnastics2025WGPage from './pages/Tournaments/RhythmicGymnastics/Rgymnastics2025WG';
import Rgymnastics2025WChPage from './pages/Tournaments/RhythmicGymnastics/Rgymnastics2025WCh';
import Rgymnastics2025EChPage from './pages/Tournaments/RhythmicGymnastics/Rgymnastics2025ECh';
import Rgymnastics2025WChJuPage from './pages/Tournaments/RhythmicGymnastics/Rgymnastics2025WChJu';
import Rgymnastics2025EChJuPage from './pages/Tournaments/RhythmicGymnastics/Rgymnastics2025EChJu';

// Road Cycling
import RoadCycling2024WChPage from './pages/Tournaments/RoadCycling/RoadCycling2024WCh';
import RoadCycling2024JWChPage from './pages/Tournaments/RoadCycling/RoadCycling2024JWCh';
import RoadCycling2024WChU23Page from './pages/Tournaments/RoadCycling/RoadCycling2024WChU23';
import RoadCycling2025WChPage from './pages/Tournaments/RoadCycling/RoadCycling2025WCh';
import RoadCycling2025JWChPage from './pages/Tournaments/RoadCycling/RoadCycling2025JWCh';
import RoadCycling2025WChU23Page from './pages/Tournaments/RoadCycling/RoadCycling2025WChU23';
import RoadCycling2025TdFMPage from './pages/Tournaments/RoadCycling/RoadCycling2025TdFM';
import RoadCycling2026TdFMPage from './pages/Tournaments/RoadCycling/RoadCycling2026TdFM';
import RoadCycling2024TdFMFPage from './pages/Tournaments/RoadCycling/RoadCycling2024TdFMF';
import RoadCycling2025TdFMFPage from './pages/Tournaments/RoadCycling/RoadCycling2025TdFMF';
import RoadCycling2025GdIMPage from './pages/Tournaments/RoadCycling/RoadCycling2025GdIM';
import RoadCycling2025GdIFPage from './pages/Tournaments/RoadCycling/RoadCycling2025GdIF';
import RoadCycling2024VdEMPage from './pages/Tournaments/RoadCycling/RoadCycling2024VdEM';
import RoadCycling2025VdEFPage from './pages/Tournaments/RoadCycling/RoadCycling2025VdEF';
import RoadCycling2025VdEMPage from './pages/Tournaments/RoadCycling/RoadCycling2025VdEM';

// Rowing
import Rowing202W4ChPage from './pages/Tournaments/Rowing/Rowing202W4Ch';
import Rowing2025WChPage from './pages/Tournaments/Rowing/Rowing2025WCh';
import Rowing2026WChPage from './pages/Tournaments/Rowing/Rowing2026WCh';
import Rowing2025WRC1Page from './pages/Tournaments/Rowing/Rowing2025WRC1';
import Rowing2025WRC2Page from './pages/Tournaments/Rowing/Rowing2025WRC2';
import Rowing2026WRC1Page from './pages/Tournaments/Rowing/Rowing2026WRC1';
import Rowing2026WRC2Page from './pages/Tournaments/Rowing/Rowing2026WRC2';
import Rowing2025EChPage from './pages/Tournaments/Rowing/Rowing2025ECh';
import Rowing2025WChU23Page from './pages/Tournaments/Rowing/Rowing2025WChU23';
import Rowing2024WChU23Page from './pages/Tournaments/Rowing/Rowing2024WChU23';
import Rowing2024WChU19Page from './pages/Tournaments/Rowing/Rowing2024WChU19';
import Rowing2024EChU23Page from './pages/Tournaments/Rowing/Rowing2024EChU23';
import Rowing2025WChU19Page from './pages/Tournaments/Rowing/Rowing2025WChU19';
import Rowing2025EChU23Page from './pages/Tournaments/Rowing/Rowing2025EChU23';
import Rowing2025HRRPage from './pages/Tournaments/Rowing/Rowing2025HRR';

// Rugby Sevens
import RugbySevens2025SVNSe1Page from './pages/Tournaments/RugbySevens/RugbySevens2025SVNSe1';
import RugbySevens2025SVNSe2Page from './pages/Tournaments/RugbySevens/RugbySevens2025SVNSe2';
import RugbySevens2025SVNSe3Page from './pages/Tournaments/RugbySevens/RugbySevens2025SVNSe3';
import RugbySevens2025SVNSe4Page from './pages/Tournaments/RugbySevens/RugbySevens2025SVNSe4';
import RugbySevens2025SVNSe5Page from './pages/Tournaments/RugbySevens/RugbySevens2025SVNSe5';

// Sailing 470
import Sai4702025WCPSRPage from './pages/Tournaments/Sailing470/Sai4702025WCPSR';
import Sai4702025WCHyRPage from './pages/Tournaments/Sailing470/Sai4702025WCHyR';
import Sai4702025WCKWPage from './pages/Tournaments/Sailing470/Sai4702025WCKW';
import Sai4702026WCKWPage from './pages/Tournaments/Sailing470/Sai4702026WCKW';
import Sai4702026WCPSRPage from './pages/Tournaments/Sailing470/Sai4702026WCPSR';
import Sai4702027WCPSRPage from './pages/Tournaments/Sailing470/Sai4702027WCPSR';
import Sai4702028WCPSRPage from './pages/Tournaments/Sailing470/Sai4702028WCPSR';
import Sai4702026WCHyRPage from './pages/Tournaments/Sailing470/Sai4702026WCHyR';
import Sai4702027WCHyRPage from './pages/Tournaments/Sailing470/Sai4702027WCHyR';
import Sai4702028WCHyRPage from './pages/Tournaments/Sailing470/Sai4702028WCHyR';
import Sai4702027WCKWPage from './pages/Tournaments/Sailing470/Sai4702027WCKW';
import Sai4702028WCKWPage from './pages/Tournaments/Sailing470/Sai4702028WCKW';
import Sai4702025WCAlRPage from './pages/Tournaments/Sailing470/Sai4702025WCAlR';
import Sai4702026WCAlRPage from './pages/Tournaments/Sailing470/Sai4702026WCAlR';
import Sai4702027WCAlRPage from './pages/Tournaments/Sailing470/Sai4702027WCAlR';
import Sai4702028WCAlRPage from './pages/Tournaments/Sailing470/Sai4702028WCAlR';
import Sai4702025EChPage from './pages/Tournaments/Sailing470/Sai4702025ECh';
import Sai4702025WChPage from './pages/Tournaments/Sailing470/Sai4702025WCh';
import Sai4702025JWChPage from './pages/Tournaments/Sailing470/Sai4702025JWCh';
import Sai4702025JEChPage from './pages/Tournaments/Sailing470/Sai4702025JECh';

// Sailing 49er
import Sai49er2025WChPage from './pages/Tournaments/Sailing49er/Sai49er2025WCh';
import Sai49er2024EChPage from './pages/Tournaments/Sailing49er/Sai49er2024ECh';
import Sai49er2025EChPage from './pages/Tournaments/Sailing49er/Sai49er2025ECh';
import Sai49er2025WCPSRPage from './pages/Tournaments/Sailing49er/Sai49er2025WCPSR';
import Sai49er2025WCHyRPage from './pages/Tournaments/Sailing49er/Sai49er2025WCHyR';
import Sai49er2025WCKWPage from './pages/Tournaments/Sailing49er/Sai49er2025WCKW';
import Sai49er2026WCKWPage from './pages/Tournaments/Sailing49er/Sai49er2026WCKW';
import Sai49er2026WCPSRPage from './pages/Tournaments/Sailing49er/Sai49er2026WCPSR';
import Sai49er2027WCPSRPage from './pages/Tournaments/Sailing49er/Sai49er2027WCPSR';
import Sai49er2028WCPSRPage from './pages/Tournaments/Sailing49er/Sai49er2028WCPSR';
import Sai49er2026WCHyRPage from './pages/Tournaments/Sailing49er/Sai49er2026WCHyR';
import Sai49er2027WCHyRPage from './pages/Tournaments/Sailing49er/Sai49er2027WCHyR';
import Sai49er2028WCHyRPage from './pages/Tournaments/Sailing49er/Sai49er2028WCHyR';
import Sai49er2027WCKWPage from './pages/Tournaments/Sailing49er/Sai49er2027WCKW';
import Sai49er2028WCKWPage from './pages/Tournaments/Sailing49er/Sai49er2028WCKW';
import Sai49er2025WCAlRPage from './pages/Tournaments/Sailing49er/Sai49er2025WCAlR';
import Sai49er2026WCAlRPage from './pages/Tournaments/Sailing49er/Sai49er2026WCAlR';
import Sai49er2027WCAlRPage from './pages/Tournaments/Sailing49er/Sai49er2027WCAlR';
import Sai49er2028WCAlRPage from './pages/Tournaments/Sailing49er/Sai49er2028WCAlR';
import Sai49er2024FXOS1Page from './pages/Tournaments/Sailing49er/Sai49er2024FXOS1';
import Sai49er2024FXOS2Page from './pages/Tournaments/Sailing49er/Sai49er2024FXOS2';

// Sailing Formula Kite
import SaiFormulaKite2024WS1Page from './pages/Tournaments/SailingFormulaKite/SaiFormulaKite2024WS1';
import SaiFormulaKite2024WS2Page from './pages/Tournaments/SailingFormulaKite/SaiFormulaKite2024WS2';
import SaiFormulaKite2024WS3Page from './pages/Tournaments/SailingFormulaKite/SaiFormulaKite2024WS3';
import SaiFormulaKite2024YEChPage from './pages/Tournaments/SailingFormulaKite/SaiFormulaKite2024YECh';
import SailFormulaKite2025WCPSRPage from './pages/Tournaments/SailingFormulaKite/SailFormulaKite2025WCPSR';
import SailFormulaKite2025WCHyRPage from './pages/Tournaments/SailingFormulaKite/SailFormulaKite2025WCHyR';
import SailFormulaKite2025WCKWPage from './pages/Tournaments/SailingFormulaKite/SailFormulaKite2025WCKW';
import SailFormulaKite2026WCKWPage from './pages/Tournaments/SailingFormulaKite/SailFormulaKite2026WCKW';
import SailFormulaKite2026WCPSRPage from './pages/Tournaments/SailingFormulaKite/SailFormulaKite2026WCPSR';
import SailFormulaKite2027WCPSRPage from './pages/Tournaments/SailingFormulaKite/SailFormulaKite2027WCPSR';
import SailFormulaKite2028WCPSRPage from './pages/Tournaments/SailingFormulaKite/SailFormulaKite2028WCPSR';
import SailFormulaKite2026WCHyRPage from './pages/Tournaments/SailingFormulaKite/SailFormulaKite2026WCHyR';
import SailFormulaKite2027WCHyRPage from './pages/Tournaments/SailingFormulaKite/SailFormulaKite2027WCHyR';
import SailFormulaKite2028WCHyRPage from './pages/Tournaments/SailingFormulaKite/SailFormulaKite2028WCHyR';
import SailFormulaKite2027WCKWPage from './pages/Tournaments/SailingFormulaKite/SailFormulaKite2027WCKW';
import SailFormulaKite2028WCKWPage from './pages/Tournaments/SailingFormulaKite/SailFormulaKite2028WCKW';
import SailFormulaKite2025WCAlRPage from './pages/Tournaments/SailingFormulaKite/SailFormulaKite2025WCAlR';
import SailFormulaKite2026WCAlRPage from './pages/Tournaments/SailingFormulaKite/SailFormulaKite2026WCAlR';
import SailFormulaKite2027WCAlRPage from './pages/Tournaments/SailingFormulaKite/SailFormulaKite2027WCAlR';
import SailFormulaKite2028WCAlRPage from './pages/Tournaments/SailingFormulaKite/SailFormulaKite2028WCAlR';

// Sailing IQFoil
import SailIQFoil2025WCPSRPage from './pages/Tournaments/SailingIQFoil/SailIQFoil2025WCPSR';
import SailIQFoil2025WCHyRPage from './pages/Tournaments/SailingIQFoil/SailIQFoil2025WCHyR';
import SailIQFoil2025WCKWPage from './pages/Tournaments/SailingIQFoil/SailIQFoil2025WCKW';
import SailIQFoil2026WCKWPage from './pages/Tournaments/SailingIQFoil/SailIQFoil2026WCKW';
import SailIQFoil2026WCPSRPage from './pages/Tournaments/SailingIQFoil/SailIQFoil2026WCPSR';
import SailIQFoil2027WCPSRPage from './pages/Tournaments/SailingIQFoil/SailIQFoil2027WCPSR';
import SailIQFoil2028WCPSRPage from './pages/Tournaments/SailingIQFoil/SailIQFoil2028WCPSR';
import SailIQFoil2026WCHyRPage from './pages/Tournaments/SailingIQFoil/SailIQFoil2026WCHyR';
import SailIQFoil2027WCHyRPage from './pages/Tournaments/SailingIQFoil/SailIQFoil2027WCHyR';
import SailIQFoil2028WCHyRPage from './pages/Tournaments/SailingIQFoil/SailIQFoil2028WCHyR';
import SailIQFoil2027WCKWPage from './pages/Tournaments/SailingIQFoil/SailIQFoil2027WCKW';
import SailIQFoil2028WCKWPage from './pages/Tournaments/SailingIQFoil/SailIQFoil2028WCKW';
import SailIQFoil2025WCAlRPage from './pages/Tournaments/SailingIQFoil/SailIQFoil2025WCAlR';
import SailIQFoil2026WCAlRPage from './pages/Tournaments/SailingIQFoil/SailIQFoil2026WCAlR';
import SailIQFoil2027WCAlRPage from './pages/Tournaments/SailingIQFoil/SailIQFoil2027WCAlR';
import SailIQFoil2028WCAlRPage from './pages/Tournaments/SailingIQFoil/SailIQFoil2028WCAlR';
import SailIQFoil2024WChU23Page from './pages/Tournaments/SailingIQFoil/SailIQFoil2024WChU23';
import SailIQFoil2024IQFGa3Page from './pages/Tournaments/SailingIQFoil/SailIQFoil2024IQFGa3';
import SailIQFoil2024EChPage from './pages/Tournaments/SailingIQFoil/SailIQFoil2024ECh';
import SailIQFoil2024IQFGa4Page from './pages/Tournaments/SailingIQFoil/SailIQFoil2024IQFGa4';
import SailIQFoil2025IQFGa1Page from './pages/Tournaments/SailingIQFoil/SailIQFoil2025IQFGa1';
import SailIQFoil2025IQFGa2Page from './pages/Tournaments/SailingIQFoil/SailIQFoil2025IQFGa2';
import SailIQFoil2025WChPage from './pages/Tournaments/SailingIQFoil/SailIQFoil2025WCh';
import SailIQFoil2025YWChPage from './pages/Tournaments/SailingIQFoil/SailIQFoil2025YWCh';
import SailIQFoil2025YEChPage from './pages/Tournaments/SailingIQFoil/SailIQFoil2025YECh';

// Sailing Laser Class
import SaiLaserClass2025WChPage from './pages/Tournaments/SailingLaserClass/SaiLaserClass2025WCh';
import SaiLaserClass2025WChU21Page from './pages/Tournaments/SailingLaserClass/SaiLaserClass2025WChU21';
import SaiLaserClass2025WCPSRPage from './pages/Tournaments/SailingLaserClass/SaiLaserClass2025WCPSR';
import SaiLaserClass2025WCHyRPage from './pages/Tournaments/SailingLaserClass/SaiLaserClass2025WCHyR';
import SaiLaserClass2025WCKWPage from './pages/Tournaments/SailingLaserClass/SaiLaserClass2025WCKW';
import SaiLaserClass2026WCKWPage from './pages/Tournaments/SailingLaserClass/SaiLaserClass2026WCKW';
import SaiLaserClass2026WCPSRPage from './pages/Tournaments/SailingLaserClass/SaiLaserClass2026WCPSR';
import SaiLaserClass2027WCPSRPage from './pages/Tournaments/SailingLaserClass/SaiLaserClass2027WCPSR';
import SaiLaserClass2028WCPSRPage from './pages/Tournaments/SailingLaserClass/SaiLaserClass2028WCPSR';
import SaiLaserClass2026WCHyRPage from './pages/Tournaments/SailingLaserClass/SaiLaserClass2026WCHyR';
import SaiLaserClass2027WCHyRPage from './pages/Tournaments/SailingLaserClass/SaiLaserClass2027WCHyR';
import SaiLaserClass2028WCHyRPage from './pages/Tournaments/SailingLaserClass/SaiLaserClass2028WCHyR';
import SaiLaserClass2027WCKWPage from './pages/Tournaments/SailingLaserClass/SaiLaserClass2027WCKW';
import SaiLaserClass2028WCKWPage from './pages/Tournaments/SailingLaserClass/SaiLaserClass2028WCKW';
import SaiLaserClass2025WCAlRPage from './pages/Tournaments/SailingLaserClass/SaiLaserClass2025WCAlR';
import SaiLaserClass2026WCAlRPage from './pages/Tournaments/SailingLaserClass/SaiLaserClass2026WCAlR';
import SaiLaserClass2027WCAlRPage from './pages/Tournaments/SailingLaserClass/SaiLaserClass2027WCAlR';
import SaiLaserClass2028WCAlRPage from './pages/Tournaments/SailingLaserClass/SaiLaserClass2028WCAlR';
import SaiLaserClass2024EuILEC1Page from './pages/Tournaments/SailingLaserClass/SaiLaserClass2024EuILEC1';
import SaiLaserClass2024EuILEC2Page from './pages/Tournaments/SailingLaserClass/SaiLaserClass2024EuILEC2';
import SaiLaserClass2024EuILEC3Page from './pages/Tournaments/SailingLaserClass/SaiLaserClass2024EuILEC3';
import SaiLaserClass2024EuILEC4Page from './pages/Tournaments/SailingLaserClass/SaiLaserClass2024EuILEC4';
import SaiLaserClass2025EuILEC1Page from './pages/Tournaments/SailingLaserClass/SaiLaserClass2025EuILEC1';
import SaiLaserClass2025EuILEC2Page from './pages/Tournaments/SailingLaserClass/SaiLaserClass2025EuILEC2';
import SaiLaserClass2025EuILEC3Page from './pages/Tournaments/SailingLaserClass/SaiLaserClass2025EuILEC3';
import SaiLaserClass2025EuILEC4Page from './pages/Tournaments/SailingLaserClass/SaiLaserClass2025EuILEC4';
import SaiLaserClass2025EuILEC5Page from './pages/Tournaments/SailingLaserClass/SaiLaserClass2025EuILEC5';
import SaiLaserClass2025EuILEC6Page from './pages/Tournaments/SailingLaserClass/SaiLaserClass2025EuILEC6';
import SaiLaserClass2025EuILEC7Page from './pages/Tournaments/SailingLaserClass/SaiLaserClass2025EuILEC7';
import SaiLaserClass2025EuILEC8Page from './pages/Tournaments/SailingLaserClass/SaiLaserClass2025EuILEC8';
import SaiLaserClass2025EuILEC9Page from './pages/Tournaments/SailingLaserClass/SaiLaserClass2025EuILEC9';

// Sailing Nacra17
import SaiNacra172025WChPage from './pages/Tournaments/SailingNacra17/SaiNacra172025WCh';
import SaiNacra172024EChPage from './pages/Tournaments/SailingNacra17/SaiNacra172024ECh';
import SaiNacra172025EChPage from './pages/Tournaments/SailingNacra17/SaiNacra172025ECh';
import SaiNacra172025WCPSRPage from './pages/Tournaments/SailingNacra17/SaiNacra172025WCPSR';
import SaiNacra172025WCHyRPage from './pages/Tournaments/SailingNacra17/SaiNacra172025WCHyR';
import SaiNacra172025WCKWPage from './pages/Tournaments/SailingNacra17/SaiNacra172025WCKW';
import SaiNacra172026WCKWPage from './pages/Tournaments/SailingNacra17/SaiNacra172026WCKW';
import SaiNacra172026WCPSRPage from './pages/Tournaments/SailingNacra17/SaiNacra172026WCPSR';
import SaiNacra172027WCPSRPage from './pages/Tournaments/SailingNacra17/SaiNacra172027WCPSR';
import SaiNacra172028WCPSRPage from './pages/Tournaments/SailingNacra17/SaiNacra172028WCPSR';
import SaiNacra172026WCHyRPage from './pages/Tournaments/SailingNacra17/SaiNacra172026WCHyR';
import SaiNacra172027WCHyRPage from './pages/Tournaments/SailingNacra17/SaiNacra172027WCHyR';
import SaiNacra172028WCHyRPage from './pages/Tournaments/SailingNacra17/SaiNacra172028WCHyR';
import SaiNacra172027WCKWPage from './pages/Tournaments/SailingNacra17/SaiNacra172027WCKW';
import SaiNacra172028WCKWPage from './pages/Tournaments/SailingNacra17/SaiNacra172028WCKW';
import SaiNacra172025WCAlRPage from './pages/Tournaments/SailingNacra17/SaiNacra172025WCAlR';
import SaiNacra172026WCAlRPage from './pages/Tournaments/SailingNacra17/SaiNacra172026WCAlR';
import SaiNacra172027WCAlRPage from './pages/Tournaments/SailingNacra17/SaiNacra172027WCAlR';
import SaiNacra172028WCAlRPage from './pages/Tournaments/SailingNacra17/SaiNacra172028WCAlR';

// Sport Climbing
import SportClimbing2024WChYoPage from './pages/Tournaments/SportClimbing/SportClimbing2024WChYo';
import SportClimbing2024EChPage from './pages/Tournaments/SportClimbing/SportClimbing2024ECh';
import SportClimbing2024WC1Page from './pages/Tournaments/SportClimbing/SportClimbing2024WC1';
import SportClimbing2024WC2Page from './pages/Tournaments/SportClimbing/SportClimbing2024WC2';
// Sport Climbing (continued)
import SportClimbing2024EChYoPage from './pages/Tournaments/SportClimbing/SportClimbing2024EChYo';
import SportClimbing2024WC3Page from './pages/Tournaments/SportClimbing/SportClimbing2024WC3';

// Surfing
import Surfing2024ChTo9Page from './pages/Tournaments/Surfing/Surfing2024ChTo9';
import Surfing2024ChTo10Page from './pages/Tournaments/Surfing/Surfing2024ChTo10';

// Swimming
import Swimming2024WCup1Page from './pages/Tournaments/Swimming/Swimming2024WCup1';
import Swimming2024WCup2Page from './pages/Tournaments/Swimming/Swimming2024WCup2';
import Swimming2024WCup3Page from './pages/Tournaments/Swimming/Swimming2024WCup3';
import Swimming2024WCh25mPage from './pages/Tournaments/Swimming/Swimming2024WCh25m';
import Swimming2025WChPage from './pages/Tournaments/Swimming/Swimming2025WCh';
import Swimming2026EChPage from './pages/Tournaments/Swimming/Swimming2026ECh';

// Taekwondo
import Taekwondo2024WChJuPage from './pages/Tournaments/Taekwondo/Taekwondo2024WchJu';

// Tennis
import Tennis2025AOPage from './pages/Tournaments/Tennis/Tennis2025AO';
import Tennis2025RGPage from './pages/Tournaments/Tennis/Tennis2025RG';
import Tennis2025WBPage from './pages/Tournaments/Tennis/Tennis2025WB';
import Tennis2025UOPage from './pages/Tournaments/Tennis/Tennis2025UO';

// Track Cycling
import TrackCycling2024WChPage from './pages/Tournaments/TrackCycling/TrackCycling2024Wch';
import TrackCycling2025WChPage from './pages/Tournaments/TrackCycling/TrackCycling2025Wch';
import TrackCycling2025EChPage from './pages/Tournaments/TrackCycling/TrackCycling2025Ech';

// Trampoline
import Trampoline2025WChPage from './pages/Tournaments/Trampoline/Trampoline2025WCh';
import Trampoline2025WChJuPage from './pages/Tournaments/Trampoline/Trampoline2025WChJu';
import Trampoline2027WChPage from './pages/Tournaments/Trampoline/Trampoline2027WCh';
import Trampoline2027WChJuPage from './pages/Tournaments/Trampoline/Trampoline2027WChJu';
import Trampoline2025WC1Page from './pages/Tournaments/Trampoline/Trampoline2025WC1';
import Trampoline2025WC2Page from './pages/Tournaments/Trampoline/Trampoline2025WC2';
import Trampoline2025WC3Page from './pages/Tournaments/Trampoline/Trampoline2025WC3';
import Trampoline2025WC4Page from './pages/Tournaments/Trampoline/Trampoline2025WC4';
import Trampoline2025WC5Page from './pages/Tournaments/Trampoline/Trampoline2025WC5';
import Trampoline2025WC6Page from './pages/Tournaments/Trampoline/Trampoline2025WC6';

// Volleyball
import VolleyballMVNL2025Page from './pages/Tournaments/Volleyball/VolleyballMVNL2025';
import VolleyballFVNL2025Page from './pages/Tournaments/Volleyball/VolleyballFVNL2025';
import VolleyballMVNL2026Page from './pages/Tournaments/Volleyball/VolleyballMVNL2026';
import VolleyballFVNL2026Page from './pages/Tournaments/Volleyball/VolleyballFVNL2026';
import VolleyballMVNL2027Page from './pages/Tournaments/Volleyball/VolleyballMVNL2027';
import VolleyballFVNL2027Page from './pages/Tournaments/Volleyball/VolleyballFVNL2027';
import VolleyballMVNL2028Page from './pages/Tournaments/Volleyball/VolleyballMVNL2028';
import VolleyballFVNL2028Page from './pages/Tournaments/Volleyball/VolleyballFVNL2028';
import VolleyballMWCh2025Page from './pages/Tournaments/Volleyball/VolleyballMWCh2025';
import VolleyballFWCh2025Page from './pages/Tournaments/Volleyball/VolleyballFWCh2025';
import VolleyballMWCh2027Page from './pages/Tournaments/Volleyball/VolleyballMWCh2027';
import VolleyballFWCh2027Page from './pages/Tournaments/Volleyball/VolleyballFWCh2027';
import VolleyballMPCh2026Page from './pages/Tournaments/Volleyball/VolleyballMPCh2026';
import VolleyballFPCh2026Page from './pages/Tournaments/Volleyball/VolleyballFPCh2026';
import VolleyballMPCh2028Page from './pages/Tournaments/Volleyball/VolleyballMPCh2028';
import VolleyballFPCh2028Page from './pages/Tournaments/Volleyball/VolleyballFPCh2028';
import VolleyballMECh2024U20Page from './pages/Tournaments/Volleyball/VolleyballMECh2024U20';
import VolleyballWECh2024U20Page from './pages/Tournaments/Volleyball/VolleyballWECh2024U20';
import VolleyballEPCh2026Page from './pages/Tournaments/Volleyball/VolleyballEPCh2026';
import VolleyballFECh2026Page from './pages/Tournaments/Volleyball/VolleyballFECh2026';
import VolleyballMECh2028Page from './pages/Tournaments/Volleyball/VolleyballMECh2028';
import VolleyballFECh2028Page from './pages/Tournaments/Volleyball/VolleyballFECh2028';

// Water Polo
import WaterPolo2025WChPage from './pages/Tournaments/WaterPolo/WaterPolo2025WCh';
import WaterPolo2024WChU18WPage from './pages/Tournaments/WaterPolo/WaterPolo2024WChU18W';
import WaterPolo2024EChU20WPage from './pages/Tournaments/WaterPolo/WaterPolo2024EChU20W';
import WaterPolo2024EChU20MPage from './pages/Tournaments/WaterPolo/WaterPolo2024EChU20M';

// Wrestling
import Wrestling2025EChPage from './pages/Tournaments/Wrestling/Wrestling2025ECh';
import Wrestling2026EChPage from './pages/Tournaments/Wrestling/Wrestling2026ECh';
import Wrestling2027EChPage from './pages/Tournaments/Wrestling/Wrestling2027ECh';
import Wrestling2025EChU17Page from './pages/Tournaments/Wrestling/Wrestling2025EChU17';
import Wrestling2026EChU17Page from './pages/Tournaments/Wrestling/Wrestling2026EChU17';
import Wrestling2027EChU17Page from './pages/Tournaments/Wrestling/Wrestling2027EChU17';
import Wrestling2025EChU20Page from './pages/Tournaments/Wrestling/Wrestling2025EChU20';
import Wrestling2026EChU20Page from './pages/Tournaments/Wrestling/Wrestling2026EChU20';
import Wrestling2027EChU20Page from './pages/Tournaments/Wrestling/Wrestling2027EChU20';
import Wrestling2025EChU23Page from './pages/Tournaments/Wrestling/Wrestling2025EChU23';
import Wrestling2026EChU23Page from './pages/Tournaments/Wrestling/Wrestling2026EChU23';
import Wrestling2027EChU23Page from './pages/Tournaments/Wrestling/Wrestling2027EChU23';
import Wrestling2025WChPage from './pages/Tournaments/Wrestling/Wrestling2025WCh';
import Wrestling2026WChPage from './pages/Tournaments/Wrestling/Wrestling2026WCh';
import Wrestling2027WChPage from './pages/Tournaments/Wrestling/Wrestling2027WCh';
import Wrestling2024WChU17Page from './pages/Tournaments/Wrestling/Wrestling2024WChU17';
import Wrestling2025WChU17Page from './pages/Tournaments/Wrestling/Wrestling2025WChU17';
import Wrestling2026WChU17Page from './pages/Tournaments/Wrestling/Wrestling2026WChU17';
import Wrestling2027WChU17Page from './pages/Tournaments/Wrestling/Wrestling2027WChU17';
import Wrestling2024WChU20Page from './pages/Tournaments/Wrestling/Wrestling2024WChU20';
import Wrestling2025WChU20Page from './pages/Tournaments/Wrestling/Wrestling2025WChU20';
import Wrestling2026WChU20Page from './pages/Tournaments/Wrestling/Wrestling2026WChU20';
import Wrestling2027WChU20Page from './pages/Tournaments/Wrestling/Wrestling2027WChU20';
import Wrestling2024WChU23Page from './pages/Tournaments/Wrestling/Wrestling2024WChU23';
import Wrestling2025WChU23Page from './pages/Tournaments/Wrestling/Wrestling2025WChU23';
import Wrestling2026WChU23Page from './pages/Tournaments/Wrestling/Wrestling2026WChU23';
import Wrestling2027WChU23Page from './pages/Tournaments/Wrestling/Wrestling2027WChU23';

// This completes the list of imports for all the tournaments.



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/he" element={<HomePageHebrew />} />
        <Route path="/sports" element={<SportsPage />} />
        <Route path="/he/sports" element={<SportsPageHebrew />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/he/calendar" element={<CalendarPageHebrew />} />
        <Route path="/user-settings" element={<UserSettingsPage />} />
        <Route path="/he/user-settings" element={<UserSettingsPageHebrew />} />
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/he/login" element={<LoginPageHebrew />} /> 
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/he/signup" element={<SignUpPageHebrew />} />

        <Route path="/sport/archery" element={<ArcheryPage />} />
        <Route path="/he/sport/archery" element={<ArcheryPageHebrew />} />
        <Route path="/sport/athletics" element={<AthleticsPage />} />
        <Route path="/he/sport/athletics" element={<AthleticsPageHebrew />} />
        <Route path="/sport/artistic-gymnastics" element={<ArtisticGymnasticsPage />} />
        <Route path="/he/sport/artistic-gymnastics" element={<ArtisticGymnasticsPageHebrew />} />
        <Route path="/sport/artistic-swimming" element={<ArtisticSwimmingPage />} />
        <Route path="/he/sport/artistic-swimming" element={<ArtisticSwimmingPageHebrew />} />
        <Route path="/sport/badminton" element={<BadmintonPage />} />
        <Route path="/he/sport/badminton" element={<BadmintonPageHebrew />} />
        <Route path="/sport/basketball" element={<BasketballPage />} />
        <Route path="/he/sport/basketball" element={<BasketballPageHebrew />} />
        <Route path="/sport/basketball3vs3" element={<Basketball3vs3Page />} />
        <Route path="/he/sport/basketball3vs3" element={<Basketball3vs3PageHebrew />} />
        <Route path="/sport/beach-volleyball" element={<BeachVolleyballPage />} />
        <Route path="/he/sport/beach-volleyball" element={<BeachVolleyballPageHebrew />} />
        <Route path="/sport/canoe-slalom" element={<CanoeSlalomPage />} />
        <Route path="/he/sport/canoe-slalom" element={<CanoeSlalomPageHebrew />} />
        <Route path="/sport/canoe-sprint" element={<CanoeSprintPage />} />
        <Route path="/he/sport/canoe-sprint" element={<CanoeSprintPageHebrew />} />
        <Route path="/sport/cycling-bmx-freestyle" element={<CyclingBmxFreestylePage />} />
        <Route path="/he/sport/cycling-bmx-freestyle" element={<CyclingBmxFreestylePageHebrew />} />
        <Route path="/sport/cycling-bmx-racing" element={<CyclingBmxRacingPage />} />
        <Route path="/he/sport/cycling-bmx-racing" element={<CyclingBmxRacingPageHebrew />} />
        <Route path="/sport/cycling-mountain-bike" element={<CyclingMountainBikePage />} />
        <Route path="/he/sport/cycling-mountain-bike" element={<CyclingMountainBikePageHebrew />} />
        <Route path="/sport/diving" element={<DivingPage />} />
        <Route path="/he/sport/diving" element={<DivingPageHebrew />} />
        <Route path="/sport/fencing" element={<FencingPage />} />
        <Route path="/he/sport/fencing" element={<FencingPageHebrew />} />
        <Route path="/sport/field-hockey" element={<FieldHockeyPage />} />
        <Route path="/he/sport/field-hockey" element={<FieldHockeyPageHebrew />} />
        <Route path="/sport/flag-football" element={<FlagFootballPage />} />
        <Route path="/he/sport/flag-football" element={<FlagFootballPageHebrew />} />
        <Route path="/sport/football" element={<FootballPage />} />
        <Route path="/he/sport/football" element={<FootballPageHebrew />} />
        <Route path="/sport/handball" element={<HandballPage />} />
        <Route path="/he/sport/handball" element={<HandballPageHebrew />} />
        <Route path="/sport/judo" element={<JudoPage />} />
        <Route path="/he/sport/judo" element={<JudoPageHebrew />} />
        <Route path="/sport/lacrosse" element={<LacrossePage />} />
        <Route path="/he/sport/lacrosse" element={<LacrossePageHebrew />} />
        <Route path="/sport/marathon-swimming" element={<MarathonSwimmingPage />} />
        <Route path="/he/sport/marathon-swimming" element={<MarathonSwimmingPageHebrew />} />
        <Route path="/sport/rhythmic-gymnastics" element={<RhythmicGymnasticsPage />} />
        <Route path="/he/sport/rhythmic-gymnastics" element={<RhythmicGymnasticsPageHebrew />} />
        <Route path="/sport/road-cycling" element={<RoadCyclingPage />} />
        <Route path="/he/sport/road-cycling" element={<RoadCyclingPageHebrew />} />
        <Route path="/sport/rowing" element={<RowingPage />} />
        <Route path="/he/sport/rowing" element={<RowingPageHebrew />} />
        <Route path="/sport/rugby-sevens" element={<RugbySevenPage />} />
        <Route path="/he/sport/rugby-sevens" element={<RugbySevenPageHebrew />} />
        <Route path="/sport/sailing-470" element={<Sailing470Page />} />
        <Route path="/he/sport/sailing-470" element={<Sailing470PageHebrew />} />
        <Route path="/sport/sailing-49er" element={<Sailing49erPage />} />
        <Route path="/he/sport/sailing-49er" element={<Sailing49erPageHebrew />} />
        <Route path="/sport/sailing-formula-kite" element={<SailingFormulaKitePage />} />
        <Route path="/he/sport/sailing-formula-kite" element={<SailingFormulaKitePageHebrew />} />
        <Route path="/sport/sailing-iqfoil" element={<SailingIqFoilPage />} />
        <Route path="/he/sport/sailing-iqfoil" element={<SailingIqFoilPageHebrew />} />
        <Route path="/sport/sailing-laser-class" element={<SailingLaserClassPage />} />
        <Route path="/he/sport/sailing-laser-class" element={<SailingLaserClassPageHebrew />} />
        <Route path="/sport/sailing-nacra17" element={<SailingNacra17Page />} />
        <Route path="/he/sport/sailing-nacra17" element={<SailingNacra17PageHebrew />} />
        <Route path="/sport/sport-climbing" element={<SportClimbingPage />} />
        <Route path="/he/sport/sport-climbing" element={<SportClimbingPageHebrew />} />
        <Route path="/sport/surfing" element={<SurfingPage />} />
        <Route path="/he/sport/surfing" element={<SurfingPageHebrew />} />
        <Route path="/sport/swimming" element={<SwimmingPage />} />
        <Route path="/he/sport/swimming" element={<SwimmingPageHebrew />} />
        <Route path="/sport/taekwondo" element={<TaekwondoPage />} />
        <Route path="/he/sport/taekwondo" element={<TaekwondoPageHebrew />} />
        <Route path="/sport/tennis" element={<TennisPage />} />
        <Route path="/he/sport/tennis" element={<TennisPageHebrew />} />
        <Route path="/sport/track-cycling" element={<TrackCyclingPage />} />
        <Route path="/he/sport/track-cycling" element={<TrackCyclingPageHebrew />} />
        <Route path="/sport/trampoline" element={<TrampolineGymnasticsPage />} />
        <Route path="/he/sport/trampoline" element={<TrampolineGymnasticsPageHebrew />} />
        <Route path="/sport/volleyball" element={<VolleyballPage />} />
        <Route path="/he/sport/volleyball" element={<VolleyballPageHebrew />} />
        <Route path="/sport/water-polo" element={<WaterPoloPage />} />
        <Route path="/he/sport/water-polo" element={<WaterPoloPageHebrew />} />
        <Route path="/sport/wrestling" element={<WrestlingPage />} />
        <Route path="/he/sport/wrestling" element={<WrestlingPageHebrew />} />
        // Archery Routes
<Route path="/tournament/Archery2025WCu1" element={<Archery2025WCu1Page />} />
<Route path="/tournament/Archery2025WCu2" element={<Archery2025WCu2Page />} />
<Route path="/tournament/Archery2025WCu3" element={<Archery2025WCu3Page />} />
<Route path="/tournament/Archery2025WCu4" element={<Archery2025WCu4Page />} />
<Route path="/tournament/Archery2026WCu1" element={<Archery2026WCu1Page />} />
<Route path="/tournament/Archery2026WCu2" element={<Archery2026WCu2Page />} />
<Route path="/tournament/Archery2026WCu3" element={<Archery2026WCu3Page />} />
<Route path="/tournament/Archery2026WCu4" element={<Archery2026WCu4Page />} />
<Route path="/tournament/Archery2027WCu1" element={<Archery2027WCu1Page />} />
<Route path="/tournament/Archery2027WCu2" element={<Archery2027WCu2Page />} />
<Route path="/tournament/Archery2027WCu3" element={<Archery2027WCu3Page />} />
<Route path="/tournament/Archery2027WCu4" element={<Archery2027WCu4Page />} />

// Artistic Gymnastics Routes
<Route path="/tournament/Agymnastics2025WCh" element={<Agymnastics2025WChPage />} />
<Route path="/tournament/Agymnastics2025ECh" element={<Agymnastics2025EChPage />} />
<Route path="/tournament/Agymnastics2026WCh" element={<Agymnastics2026WChPage />} />
<Route path="/tournament/Agymnastics2027WCh" element={<Agymnastics2027WChPage />} />
<Route path="/tournament/Agymnastics2025WC1" element={<Agymnastics2025WC1Page />} />
<Route path="/tournament/Agymnastics2025WC2" element={<Agymnastics2025WC2Page />} />
<Route path="/tournament/Agymnastics2025WC3" element={<Agymnastics2025WC3Page />} />
<Route path="/tournament/Agymnastics2025WC4" element={<Agymnastics2025WC4Page />} />
<Route path="/tournament/Agymnastics2025WC5" element={<Agymnastics2025WC5Page />} />
<Route path="/tournament/Agymnastics2025WC6" element={<Agymnastics2025WC6Page />} />
<Route path="/tournament/Agymnastics2025WoCha1" element={<Agymnastics2025WoCha1Page />} />
<Route path="/tournament/Agymnastics2025WoCha2" element={<Agymnastics2025WoCha2Page />} />
<Route path="/tournament/Agymnastics2025WoCha3" element={<Agymnastics2025WoCha3Page />} />
<Route path="/tournament/Agymnastics2025WoCha4" element={<Agymnastics2025WoCha4Page />} />
<Route path="/tournament/Agymnastics2025WoCha5" element={<Agymnastics2025WoCha5Page />} />

// Artistic Swimming Routes
<Route path="/tournament/ArtisticSwimming2025WCh" element={<ArtisticSwimming2025WChPage />} />
<Route path="/tournament/ArtisticSwimming2025ECh" element={<ArtisticSwimming2025EChPage />} />
<Route path="/tournament/ArtisticSwimming2025JECh" element={<ArtisticSwimming2025JEChPage />} />
<Route path="/tournament/ArtisticSwimming2024JWCh" element={<ArtisticSwimming2024JWChPage />} />

// Athletics Routes
<Route path="/tournament/Athletics2025WCh" element={<Athletics2025WChPage />} />
<Route path="/tournament/Athletics2026ECh" element={<Athletics2026EChPage />} />
<Route path="/tournament/Athletics2024DL1" element={<Athletics2024DL1Page />} />
<Route path="/tournament/Athletics2024DL2" element={<Athletics2024DL2Page />} />
<Route path="/tournament/Athletics2024DL3" element={<Athletics2024DL3Page />} />
<Route path="/tournament/Athletics2024DL4" element={<Athletics2024DL4Page />} />
<Route path="/tournament/Athletics2024DL5" element={<Athletics2024DL5Page />} />
<Route path="/tournament/Athletics2024U20WCh" element={<Athletics2024U20WChPage />} />
<Route path="/tournament/Athletics2025IDWCh" element={<Athletics2025IDWChPage />} />
<Route path="/tournament/Athletics2026IDWCh" element={<Athletics2026IDWChPage />} />
<Route path="/tournament/Athletics2026U20WCh" element={<Athletics2026U20WChPage />} />
<Route path="/tournament/Athletics2025U23ECh" element={<Athletics2025U23EChPage />} />
<Route path="/tournament/Athletics2025U20ECh" element={<Athletics2025U20EChPage />} />

// Badminton Routes
<Route path="/tournament/Badminton2024JECh" element={<Badminton2024JEChPage />} />
<Route path="/tournament/Badminton2024JWChTe" element={<Badminton2024JWChTePage />} />
<Route path="/tournament/Badminton2024JWChIn" element={<Badminton2024JWChInPage />} />
<Route path="/tournament/Badminton2024JWT1" element={<Badminton2024JWT1Page />} />
<Route path="/tournament/Badminton2024JWTFi" element={<Badminton2024JWTFiPage />} />

// Basketball Routes
<Route path="/tournament/Basketball2025EChM" element={<Basketball2025EChMPage />} />
<Route path="/tournament/Basketball2025EChW" element={<Basketball2025EChWPage />} />
<Route path="/tournament/Basketball2027WChM" element={<Basketball2027WChMPage />} />
<Route path="/tournament/Basketball2026WChW" element={<Basketball2026WChWPage />} />
<Route path="/tournament/Basketball2025AChM" element={<Basketball2025AChMPage />} />
<Route path="/tournament/Basketball2025AChW" element={<Basketball2025AChWPage />} />
<Route path="/tournament/Basketball2025WChMU19" element={<Basketball2025WChMU19Page />} />
<Route path="/tournament/Basketball2025WChWU19" element={<Basketball2025WChWU19Page />} />
<Route path="/tournament/Basketball2027WChMU19" element={<Basketball2027WChMU19Page />} />
<Route path="/tournament/Basketball2027WChWU19" element={<Basketball2027WChWU19Page />} />

// Basketball 3x3 Routes
<Route path="/tournament/Basketball3vs32024ECh" element={<Basketball3vs32024EChPage />} />
<Route path="/tournament/Basketball3vs32024WChU18" element={<Basketball3vs32024WChU18Page />} />
<Route path="/tournament/Basketball3vs32024WChU23" element={<Basketball3vs32024WChU23Page />} />
<Route path="/tournament/Basketball3vs32025WCh" element={<Basketball3vs32025WChPage />} />

// Beach Volleyball Routes
<Route path="/tournament/BeachVolleyball2024E16BPT1" element={<BeachVolleyball2024E16BPT1Page />} />
<Route path="/tournament/BeachVolleyball2024E16BPT2" element={<BeachVolleyball2024E16BPT2Page />} />
<Route path="/tournament/BeachVolleyball2024FinalsBPT" element={<BeachVolleyball2024FinalsBPTPage />} />
<Route path="/tournament/BeachVolleyball2025WCh" element={<BeachVolleyball2025WChPage />} />
<Route path="/tournament/BeachVolleyball2024WChU19" element={<BeachVolleyball2024WChU19Page />} />

// Canoe Slalom Routes
<Route path="/tournament/CanoeSlalom2024WCu1" element={<CanoeSlalom2024WCu1Page />} />
<Route path="/tournament/CanoeSlalom2024WCu2" element={<CanoeSlalom2024WCu2Page />} />
<Route path="/tournament/CanoeSlalom2025WCu1" element={<CanoeSlalom2025WCu1Page />} />
// Canoe Slalom Routes (Continued)
<Route path="/tournament/CanoeSlalom2025WCu2" element={<CanoeSlalom2025WCu2Page />} />
<Route path="/tournament/CanoeSlalom2025WCu3" element={<CanoeSlalom2025WCu3Page />} />
<Route path="/tournament/CanoeSlalom2025WCu4" element={<CanoeSlalom2025WCu4Page />} />
<Route path="/tournament/CanoeSlalom2025WCu5" element={<CanoeSlalom2025WCu5Page />} />
<Route path="/tournament/CanoeSlalom2025WChJu" element={<CanoeSlalom2025WChJuPage />} />
<Route path="/tournament/CanoeSlalom2025WCh" element={<CanoeSlalom2025WChPage />} />
<Route path="/tournament/CanoeSlalom2025EChJu" element={<CanoeSlalom2025EChJuPage />} />
<Route path="/tournament/CanoeSlalom2025ECh" element={<CanoeSlalom2025EChPage />} />

// Canoe Sprint Routes
<Route path="/tournament/CanoeSprint2024WCh" element={<CanoeSprint2024WChPage />} />
<Route path="/tournament/CanoeSprint2025WCu1" element={<CanoeSprint2025WCu1Page />} />
<Route path="/tournament/CanoeSprint2025WCu2" element={<CanoeSprint2025WCu2Page />} />
<Route path="/tournament/CanoeSprint2024WChJu" element={<CanoeSprint2024WChJuPage />} />
<Route path="/tournament/CanoeSprint2025WCh" element={<CanoeSprint2025WChPage />} />
<Route path="/tournament/CanoeSprint2025ECh" element={<CanoeSprint2025EChPage />} />
<Route path="/tournament/CanoeSprint2025EChJu" element={<CanoeSprint2025EChJuPage />} />

// Cycling BMX Freestyle Routes
<Route path="/tournament/CyclingBMXFreestyle2024ECh" element={<CyclingBMXFreestyle2024EChPage />} />
<Route path="/tournament/CyclingBMXFreestyle2024WCh" element={<CyclingBMXFreestyle2024WChPage />} />
<Route path="/tournament/CyclingBMXFreestyle2024WCu" element={<CyclingBMXFreestyle2024WCuPage />} />
<Route path="/tournament/CyclingBMXFreestyle2025WCh" element={<CyclingBMXFreestyle2025WChPage />} />

// Cycling BMX Racing Routes
<Route path="/tournament/CyclingBMXRacing2025WCh" element={<CyclingBMXRacing2025WChPage />} />
<Route path="/tournament/CyclingBMXRacing2024ECh" element={<CyclingBMXRacing2024EChPage />} />
<Route path="/tournament/CyclingBMXRacing2025ECh" element={<CyclingBMXRacing2025EChPage />} />
<Route path="/tournament/CyclingBMXRacing2027ECh" element={<CyclingBMXRacing2027EChPage />} />
<Route path="/tournament/CyclingBMXRacing2024ECu1" element={<CyclingBMXRacing2024ECu1Page />} />

// Cycling Mountain Bike Routes
<Route path="/tournament/CyclingMountainBike2024WCu1" element={<CyclingMountainBike2024WCu1Page />} />
<Route path="/tournament/CyclingMountainBike2024WCu2" element={<CyclingMountainBike2024WCu2Page />} />
<Route path="/tournament/CyclingMountainBike2024WCu3" element={<CyclingMountainBike2024WCu3Page />} />
<Route path="/tournament/CyclingMountainBike2024WCh" element={<CyclingMountainBike2024WChPage />} />
<Route path="/tournament/CyclingMountainBike2025WCh" element={<CyclingMountainBike2025WChPage />} />
<Route path="/tournament/CyclingMountainBike2026WCh" element={<CyclingMountainBike2026WChPage />} />
<Route path="/tournament/CyclingMountainBike2025ECh" element={<CyclingMountainBike2025EChPage />} />

// Diving Routes
<Route path="/tournament/Diving2024WChJu" element={<Diving2024WChJuPage />} />
<Route path="/tournament/Diving2025WCh" element={<Diving2025WChPage />} />
<Route path="/tournament/Diving2025WChJu" element={<Diving2025WChJuPage />} />
<Route path="/tournament/Diving2025ECh" element={<Diving2025EChPage />} />

// Fencing Routes
<Route path="/tournament/Fencing2025WCh" element={<Fencing2025WChPage />} />
<Route path="/tournament/Fencing2025GPxS1" element={<Fencing2025GPxS1Page />} />
<Route path="/tournament/Fencing2025GPxS2" element={<Fencing2025GPxS2Page />} />
<Route path="/tournament/Fencing2025GPxS3" element={<Fencing2025GPxS3Page />} />
<Route path="/tournament/Fencing2025GPxE1" element={<Fencing2025GPxE1Page />} />
<Route path="/tournament/Fencing2025GPxE2" element={<Fencing2025GPxE2Page />} />
<Route path="/tournament/Fencing2025GPxE3" element={<Fencing2025GPxE3Page />} />
<Route path="/tournament/Fencing2025GPxF1" element={<Fencing2025GPxF1Page />} />
<Route path="/tournament/Fencing2025GPxF2" element={<Fencing2025GPxF2Page />} />
<Route path="/tournament/Fencing2025GPxF3" element={<Fencing2025GPxF3Page />} />
<Route path="/tournament/Fencing2025WChJu" element={<Fencing2025WChJuPage />} />
<Route path="/tournament/Fencing2025ECh" element={<Fencing2025EChPage />} />
<Route path="/tournament/Fencing2025EChJu" element={<Fencing2025EChJuPage />} />

// Field Hockey Routes
<Route path="/tournament/FieldHockey2025PACh" element={<FieldHockey2025PAChPage />} />
<Route path="/tournament/FieldHockey2026WCh" element={<FieldHockey2026WChPage />} />
<Route path="/tournament/FieldHockey2025ECh" element={<FieldHockey2025EChPage />} />

// Flag Football Routes
<Route path="/tournament/FlagFootball2024WCh" element={<FlagFootball2024WChPage />} />
<Route path="/tournament/FlagFootball2025WG" element={<FlagFootball2025WGPage />} />
<Route path="/tournament/FlagFootball2024EChJu" element={<FlagFootball2024EChJuPage />} />
<Route path="/tournament/FlagFootball2025WChJu" element={<FlagFootball2025WChJuPage />} />

// Football Routes
<Route path="/tournament/Football2026WChM" element={<Football2026WChMPage />} />
<Route path="/tournament/Football2030WChM" element={<Football2030WChMPage />} />
<Route path="/tournament/Football2027WChF" element={<Football2027WChFPage />} />
<Route path="/tournament/Football2028EChM" element={<Football2028EChMPage />} />
<Route path="/tournament/Football2032EChM" element={<Football2032EChMPage />} />
<Route path="/tournament/Football2025EChF" element={<Football2025EChFPage />} />
<Route path="/tournament/Football2024WChFU20" element={<Football2024WChFU20Page />} />
<Route path="/tournament/Football2024WChFU17" element={<Football2024WChFU17Page />} />

// Handball Routes
<Route path="/tournament/Handball2025WChM" element={<Handball2025WChMPage />} />
<Route path="/tournament/Handball2027WChM" element={<Handball2027WChMPage />} />
<Route path="/tournament/Handball2029WChM" element={<Handball2029WChMPage />} />
<Route path="/tournament/Handball2031WChM" element={<Handball2031WChMPage />} />
<Route path="/tournament/Handball2026EChM" element={<Handball2026EChMPage />} />
<Route path="/tournament/Handball2025JWChM" element={<Handball2025JWChMPage />} />
<Route path="/tournament/Handball2025WChW" element={<Handball2025WChWPage />} />
<Route path="/tournament/Handball2027WChW" element={<Handball2027WChWPage />} />
<Route path="/tournament/Handball2029WChW" element={<Handball2029WChWPage />} />
<Route path="/tournament/Handball2031WChW" element={<Handball2031WChWPage />} />
<Route path="/tournament/Handball2024EChW" element={<Handball2024EChWPage />} />
<Route path="/tournament/Handball2026EChW" element={<Handball2026EChWPage />} />
<Route path="/tournament/Handball2028EChW" element={<Handball2028EChWPage />} />
<Route path="/tournament/Handball2028EChM" element={<Handball2028EChMPage />} />

// Judo Routes
<Route path="/tournament/Judo2024GS1" element={<Judo2024GS1Page />} />
<Route path="/tournament/Judo2024GS2" element={<Judo2024GS2Page />} />
<Route path="/tournament/Judo2024GP1" element={<Judo2024GP1Page />} />
<Route path="/tournament/Judo2024JWC" element={<Judo2024JWCPage />} />
<Route path="/tournament/Judo2024CWC" element={<Judo2024CWCPage />} />
<Route path="/tournament/Judo2024JEC" element={<Judo2024JECPage />} />

// Lacrosse Routes
<Route path="/tournament/Lacrosse2024WChU20" element={<Lacrosse2024WChU20Page />} />
<Route path="/tournament/Lacrosse2025WChU20" element={<Lacrosse2025WChU20Page />} />

// Marathon Swimming Routes
<Route path="/tournament/OpenWater2024WCu1" element={<OpenWater2024WCu1Page />} />
<Route path="/tournament/OpenWater2024WCu2" element={<OpenWater2024WCu2Page />} />
<Route path="/tournament/OpenWater2024WCu3" element={<OpenWater2024WCu3Page />} />
<Route path="/tournament/OpenWater2026ECh" element={<OpenWater2026EChPage />} />
<Route path="/tournament/OpenWater2025WCh" element={<OpenWater2025WChPage />} />
<Route path="/tournament/OpenWater2024WChJu" element={<OpenWater2024WChJuPage />} />
<Route path="/tournament/OpenWater2024SwCu1" element={<OpenWater2024SwCu1Page />} />
<Route path="/tournament/OpenWater2024SwCu2" element={<OpenWater2024SwCu2Page />} />
<Route path="/tournament/OpenWater2024SwCu3" element={<OpenWater2024SwCu3Page />} />

// Rhythmic Gymnastics Routes
<Route path="/tournament/Rgymnastics2025WG" element={<Rgymnastics2025WGPage />} />
<Route path="/tournament/Rgymnastics2025WCh" element={<Rgymnastics2025WChPage />} />
<Route path="/tournament/Rgymnastics2025ECh" element={<Rgymnastics2025EChPage />} />
<Route path="/tournament/Rgymnastics2025WChJu" element={<Rgymnastics2025WChJuPage />} />
<Route path="/tournament/Rgymnastics2025EChJu" element={<Rgymnastics2025EChJuPage />} />

// Road Cycling Routes
<Route path="/tournament/RoadCycling2024WCh" element={<RoadCycling2024WChPage />} />
<Route path="/tournament/RoadCycling2024JWCh" element={<RoadCycling2024JWChPage />} />
<Route path="/tournament/RoadCycling2024WChU23" element={<RoadCycling2024WChU23Page />} />
<Route path="/tournament/RoadCycling2025WCh" element={<RoadCycling2025WChPage />} />
<Route path="/tournament/RoadCycling2025JWCh" element={<RoadCycling2025JWChPage />} />
<Route path="/tournament/RoadCycling2025WChU23" element={<RoadCycling2025WChU23Page />} />
<Route path="/tournament/RoadCycling2025TdFM" element={<RoadCycling2025TdFMPage />} />
<Route path="/tournament/RoadCycling2026TdFM" element={<RoadCycling2026TdFMPage />} />
<Route path="/tournament/RoadCycling2024TdFMF" element={<RoadCycling2024TdFMFPage />} />
<Route path="/tournament/RoadCycling2025TdFMF" element={<RoadCycling2025TdFMFPage />} />
<Route path="/tournament/RoadCycling2025GdIM" element={<RoadCycling2025GdIMPage />} />
<Route path="/tournament/RoadCycling2025GdIF" element={<RoadCycling2025GdIFPage />} />
<Route path="/tournament/RoadCycling2024VdEM" element={<RoadCycling2024VdEMPage />} />
<Route path="/tournament/RoadCycling2025VdEF" element={<RoadCycling2025VdEFPage />} />
<Route path="/tournament/RoadCycling2025VdEM" element={<RoadCycling2025VdEMPage />} />

// Rowing Routes
<Route path="/tournament/Rowing202W4Ch" element={<Rowing202W4ChPage />} />
<Route path="/tournament/Rowing2025WCh" element={<Rowing2025WChPage />} />
<Route path="/tournament/Rowing2026WCh" element={<Rowing2026WChPage />} />
<Route path="/tournament/Rowing2025WRC1" element={<Rowing2025WRC1Page />} />
<Route path="/tournament/Rowing2025WRC2" element={<Rowing2025WRC2Page />} />
<Route path="/tournament/Rowing2026WRC1" element={<Rowing2026WRC1Page />} />
<Route path="/tournament/Rowing2026WRC2" element={<Rowing2026WRC2Page />} />
<Route path="/tournament/Rowing2025ECh" element={<Rowing2025EChPage />} />
<Route path="/tournament/Rowing2025WChU23" element={<Rowing2025WChU23Page />} />
<Route path="/tournament/Rowing2024WChU23" element={<Rowing2024WChU23Page />} />
<Route path="/tournament/Rowing2024WChU19" element={<Rowing2024WChU19Page />} />
<Route path="/tournament/Rowing2024EChU23" element={<Rowing2024EChU23Page />} />
<Route path="/tournament/Rowing2025WChU19" element={<Rowing2025WChU19Page />} />
<Route path="/tournament/Rowing2025EChU23" element={<Rowing2025EChU23Page />} />
<Route path="/tournament/Rowing2025HRR" element={<Rowing2025HRRPage />} />

// Rugby Sevens Routes
<Route path="/tournament/RugbySevens2025SVNSe1" element={<RugbySevens2025SVNSe1Page />} />
<Route path="/tournament/RugbySevens2025SVNSe2" element={<RugbySevens2025SVNSe2Page />} />
<Route path="/tournament/RugbySevens2025SVNSe3" element={<RugbySevens2025SVNSe3Page />} />
<Route path="/tournament/RugbySevens2025SVNSe4" element={<RugbySevens2025SVNSe4Page />} />
<Route path="/tournament/RugbySevens2025SVNSe5" element={<RugbySevens2025SVNSe5Page />} />

// Sailing 470 Routes
<Route path="/tournament/Sai4702025WCPSR" element={<Sai4702025WCPSRPage />} />
<Route path="/tournament/Sai4702025WCHyR" element={<Sai4702025WCHyRPage />} />
<Route path="/tournament/Sai4702025WCKW" element={<Sai4702025WCKWPage />} />
<Route path="/tournament/Sai4702026WCKW" element={<Sai4702026WCKWPage />} />
<Route path="/tournament/Sai4702026WCPSR" element={<Sai4702026WCPSRPage />} />
<Route path="/tournament/Sai4702027WCPSR" element={<Sai4702027WCPSRPage />} />
<Route path="/tournament/Sai4702028WCPSR" element={<Sai4702028WCPSRPage />} />
<Route path="/tournament/Sai4702026WCHyR" element={<Sai4702026WCHyRPage />} />
<Route path="/tournament/Sai4702027WCHyR" element={<Sai4702027WCHyRPage />} />
<Route path="/tournament/Sai4702028WCHyR" element={<Sai4702028WCHyRPage />} />
<Route path="/tournament/Sai4702027WCKW" element={<Sai4702027WCKWPage />} />
// Sailing 470 Routes (Continued)
<Route path="/tournament/Sai4702028WCKW" element={<Sai4702028WCKWPage />} />
<Route path="/tournament/Sai4702025WCAlR" element={<Sai4702025WCAlRPage />} />
<Route path="/tournament/Sai4702026WCAlR" element={<Sai4702026WCAlRPage />} />
<Route path="/tournament/Sai4702027WCAlR" element={<Sai4702027WCAlRPage />} />
<Route path="/tournament/Sai4702028WCAlR" element={<Sai4702028WCAlRPage />} />
<Route path="/tournament/Sai4702025ECh" element={<Sai4702025EChPage />} />
<Route path="/tournament/Sai4702025WCh" element={<Sai4702025WChPage />} />
<Route path="/tournament/Sai4702025JWCh" element={<Sai4702025JWChPage />} />
<Route path="/tournament/Sai4702025JECh" element={<Sai4702025JEChPage />} />

// Sailing 49er Routes
<Route path="/tournament/Sai49er2025WCh" element={<Sai49er2025WChPage />} />
<Route path="/tournament/Sai49er2024ECh" element={<Sai49er2024EChPage />} />
<Route path="/tournament/Sai49er2025ECh" element={<Sai49er2025EChPage />} />
<Route path="/tournament/Sai49er2025WCPSR" element={<Sai49er2025WCPSRPage />} />
<Route path="/tournament/Sai49er2025WCHyR" element={<Sai49er2025WCHyRPage />} />
<Route path="/tournament/Sai49er2025WCKW" element={<Sai49er2025WCKWPage />} />
<Route path="/tournament/Sai49er2026WCKW" element={<Sai49er2026WCKWPage />} />
<Route path="/tournament/Sai49er2026WCPSR" element={<Sai49er2026WCPSRPage />} />
<Route path="/tournament/Sai49er2027WCPSR" element={<Sai49er2027WCPSRPage />} />
<Route path="/tournament/Sai49er2028WCPSR" element={<Sai49er2028WCPSRPage />} />
<Route path="/tournament/Sai49er2026WCHyR" element={<Sai49er2026WCHyRPage />} />
<Route path="/tournament/Sai49er2027WCHyR" element={<Sai49er2027WCHyRPage />} />
<Route path="/tournament/Sai49er2028WCHyR" element={<Sai49er2028WCHyRPage />} />
<Route path="/tournament/Sai49er2027WCKW" element={<Sai49er2027WCKWPage />} />
<Route path="/tournament/Sai49er2028WCKW" element={<Sai49er2028WCKWPage />} />
<Route path="/tournament/Sai49er2025WCAlR" element={<Sai49er2025WCAlRPage />} />
<Route path="/tournament/Sai49er2026WCAlR" element={<Sai49er2026WCAlRPage />} />
<Route path="/tournament/Sai49er2027WCAlR" element={<Sai49er2027WCAlRPage />} />
<Route path="/tournament/Sai49er2028WCAlR" element={<Sai49er2028WCAlRPage />} />
<Route path="/tournament/Sai49er2024FXOS1" element={<Sai49er2024FXOS1Page />} />
<Route path="/tournament/Sai49er2024FXOS2" element={<Sai49er2024FXOS2Page />} />

// Sailing Formula Kite Routes
<Route path="/tournament/SaiFormulaKite2024WS1" element={<SaiFormulaKite2024WS1Page />} />
<Route path="/tournament/SaiFormulaKite2024WS2" element={<SaiFormulaKite2024WS2Page />} />
<Route path="/tournament/SaiFormulaKite2024WS3" element={<SaiFormulaKite2024WS3Page />} />
<Route path="/tournament/SaiFormulaKite2024YECh" element={<SaiFormulaKite2024YEChPage />} />
<Route path="/tournament/SailFormulaKite2025WCPSR" element={<SailFormulaKite2025WCPSRPage />} />
<Route path="/tournament/SailFormulaKite2025WCHyR" element={<SailFormulaKite2025WCHyRPage />} />
<Route path="/tournament/SailFormulaKite2025WCKW" element={<SailFormulaKite2025WCKWPage />} />
<Route path="/tournament/SailFormulaKite2026WCKW" element={<SailFormulaKite2026WCKWPage />} />
<Route path="/tournament/SailFormulaKite2026WCPSR" element={<SailFormulaKite2026WCPSRPage />} />
<Route path="/tournament/SailFormulaKite2027WCPSR" element={<SailFormulaKite2027WCPSRPage />} />
<Route path="/tournament/SailFormulaKite2028WCPSR" element={<SailFormulaKite2028WCPSRPage />} />
<Route path="/tournament/SailFormulaKite2026WCHyR" element={<SailFormulaKite2026WCHyRPage />} />
<Route path="/tournament/SailFormulaKite2027WCHyR" element={<SailFormulaKite2027WCHyRPage />} />
<Route path="/tournament/SailFormulaKite2028WCHyR" element={<SailFormulaKite2028WCHyRPage />} />
<Route path="/tournament/SailFormulaKite2027WCKW" element={<SailFormulaKite2027WCKWPage />} />
<Route path="/tournament/SailFormulaKite2028WCKW" element={<SailFormulaKite2028WCKWPage />} />
<Route path="/tournament/SailFormulaKite2025WCAlR" element={<SailFormulaKite2025WCAlRPage />} />
<Route path="/tournament/SailFormulaKite2026WCAlR" element={<SailFormulaKite2026WCAlRPage />} />
<Route path="/tournament/SailFormulaKite2027WCAlR" element={<SailFormulaKite2027WCAlRPage />} />
<Route path="/tournament/SailFormulaKite2028WCAlR" element={<SailFormulaKite2028WCAlRPage />} />

// Sailing IQFoil Routes
<Route path="/tournament/SailIQFoil2025WCPSR" element={<SailIQFoil2025WCPSRPage />} />
<Route path="/tournament/SailIQFoil2025WCHyR" element={<SailIQFoil2025WCHyRPage />} />
<Route path="/tournament/SailIQFoil2025WCKW" element={<SailIQFoil2025WCKWPage />} />
<Route path="/tournament/SailIQFoil2026WCKW" element={<SailIQFoil2026WCKWPage />} />
<Route path="/tournament/SailIQFoil2026WCPSR" element={<SailIQFoil2026WCPSRPage />} />
<Route path="/tournament/SailIQFoil2027WCPSR" element={<SailIQFoil2027WCPSRPage />} />
<Route path="/tournament/SailIQFoil2028WCPSR" element={<SailIQFoil2028WCPSRPage />} />
<Route path="/tournament/SailIQFoil2026WCHyR" element={<SailIQFoil2026WCHyRPage />} />
<Route path="/tournament/SailIQFoil2027WCHyR" element={<SailIQFoil2027WCHyRPage />} />
<Route path="/tournament/SailIQFoil2028WCHyR" element={<SailIQFoil2028WCHyRPage />} />
<Route path="/tournament/SailIQFoil2027WCKW" element={<SailIQFoil2027WCKWPage />} />
<Route path="/tournament/SailIQFoil2028WCKW" element={<SailIQFoil2028WCKWPage />} />
<Route path="/tournament/SailIQFoil2025WCAlR" element={<SailIQFoil2025WCAlRPage />} />
<Route path="/tournament/SailIQFoil2026WCAlR" element={<SailIQFoil2026WCAlRPage />} />
<Route path="/tournament/SailIQFoil2027WCAlR" element={<SailIQFoil2027WCAlRPage />} />
<Route path="/tournament/SailIQFoil2028WCAlR" element={<SailIQFoil2028WCAlRPage />} />
<Route path="/tournament/SailIQFoil2024WChU23" element={<SailIQFoil2024WChU23Page />} />
<Route path="/tournament/SailIQFoil2024IQFGa3" element={<SailIQFoil2024IQFGa3Page />} />
// Sailing IQFoil Routes (Continued)
<Route path="/tournament/SailIQFoil2024IQFGa3" element={<SailIQFoil2024IQFGa3Page />} />
<Route path="/tournament/SailIQFoil2024ECh" element={<SailIQFoil2024EChPage />} />
<Route path="/tournament/SailIQFoil2024IQFGa4" element={<SailIQFoil2024IQFGa4Page />} />
<Route path="/tournament/SailIQFoil2025IQFGa1" element={<SailIQFoil2025IQFGa1Page />} />
<Route path="/tournament/SailIQFoil2025IQFGa2" element={<SailIQFoil2025IQFGa2Page />} />
<Route path="/tournament/SailIQFoil2025WCh" element={<SailIQFoil2025WChPage />} />
<Route path="/tournament/SailIQFoil2025YWCh" element={<SailIQFoil2025YWChPage />} />
<Route path="/tournament/SailIQFoil2025YECh" element={<SailIQFoil2025YEChPage />} />

// Sailing Laser Class Routes
<Route path="/tournament/SaiLaserClass2025WCh" element={<SaiLaserClass2025WChPage />} />
<Route path="/tournament/SaiLaserClass2025WChU21" element={<SaiLaserClass2025WChU21Page />} />
<Route path="/tournament/SaiLaserClass2025WCPSR" element={<SaiLaserClass2025WCPSRPage />} />
<Route path="/tournament/SaiLaserClass2025WCHyR" element={<SaiLaserClass2025WCHyRPage />} />
<Route path="/tournament/SaiLaserClass2025WCKW" element={<SaiLaserClass2025WCKWPage />} />
<Route path="/tournament/SaiLaserClass2026WCKW" element={<SaiLaserClass2026WCKWPage />} />
<Route path="/tournament/SaiLaserClass2026WCPSR" element={<SaiLaserClass2026WCPSRPage />} />
<Route path="/tournament/SaiLaserClass2027WCPSR" element={<SaiLaserClass2027WCPSRPage />} />
<Route path="/tournament/SaiLaserClass2028WCPSR" element={<SaiLaserClass2028WCPSRPage />} />
<Route path="/tournament/SaiLaserClass2026WCHyR" element={<SaiLaserClass2026WCHyRPage />} />
<Route path="/tournament/SaiLaserClass2027WCHyR" element={<SaiLaserClass2027WCHyRPage />} />
<Route path="/tournament/SaiLaserClass2028WCHyR" element={<SaiLaserClass2028WCHyRPage />} />
<Route path="/tournament/SaiLaserClass2027WCKW" element={<SaiLaserClass2027WCKWPage />} />
<Route path="/tournament/SaiLaserClass2028WCKW" element={<SaiLaserClass2028WCKWPage />} />
<Route path="/tournament/SaiLaserClass2025WCAlR" element={<SaiLaserClass2025WCAlRPage />} />
<Route path="/tournament/SaiLaserClass2026WCAlR" element={<SaiLaserClass2026WCAlRPage />} />
<Route path="/tournament/SaiLaserClass2027WCAlR" element={<SaiLaserClass2027WCAlRPage />} />
<Route path="/tournament/SaiLaserClass2028WCAlR" element={<SaiLaserClass2028WCAlRPage />} />
<Route path="/tournament/SaiLaserClass2024EuILEC1" element={<SaiLaserClass2024EuILEC1Page />} />
<Route path="/tournament/SaiLaserClass2024EuILEC2" element={<SaiLaserClass2024EuILEC2Page />} />
<Route path="/tournament/SaiLaserClass2024EuILEC3" element={<SaiLaserClass2024EuILEC3Page />} />
<Route path="/tournament/SaiLaserClass2024EuILEC4" element={<SaiLaserClass2024EuILEC4Page />} />
<Route path="/tournament/SaiLaserClass2025EuILEC1" element={<SaiLaserClass2025EuILEC1Page />} />
<Route path="/tournament/SaiLaserClass2025EuILEC2" element={<SaiLaserClass2025EuILEC2Page />} />
<Route path="/tournament/SaiLaserClass2025EuILEC3" element={<SaiLaserClass2025EuILEC3Page />} />
<Route path="/tournament/SaiLaserClass2025EuILEC4" element={<SaiLaserClass2025EuILEC4Page />} />
<Route path="/tournament/SaiLaserClass2025EuILEC5" element={<SaiLaserClass2025EuILEC5Page />} />
<Route path="/tournament/SaiLaserClass2025EuILEC6" element={<SaiLaserClass2025EuILEC6Page />} />
<Route path="/tournament/SaiLaserClass2025EuILEC7" element={<SaiLaserClass2025EuILEC7Page />} />
<Route path="/tournament/SaiLaserClass2025EuILEC8" element={<SaiLaserClass2025EuILEC8Page />} />
<Route path="/tournament/SaiLaserClass2025EuILEC9" element={<SaiLaserClass2025EuILEC9Page />} />

// Sailing Nacra 17 Routes
<Route path="/tournament/SaiNacra172025WCh" element={<SaiNacra172025WChPage />} />
<Route path="/tournament/SaiNacra172024ECh" element={<SaiNacra172024EChPage />} />
<Route path="/tournament/SaiNacra172025ECh" element={<SaiNacra172025EChPage />} />
<Route path="/tournament/SaiNacra172025WCPSR" element={<SaiNacra172025WCPSRPage />} />
<Route path="/tournament/SaiNacra172025WCHyR" element={<SaiNacra172025WCHyRPage />} />
<Route path="/tournament/SaiNacra172025WCKW" element={<SaiNacra172025WCKWPage />} />
<Route path="/tournament/SaiNacra172026WCKW" element={<SaiNacra172026WCKWPage />} />
<Route path="/tournament/SaiNacra172026WCPSR" element={<SaiNacra172026WCPSRPage />} />
<Route path="/tournament/SaiNacra172027WCPSR" element={<SaiNacra172027WCPSRPage />} />
<Route path="/tournament/SaiNacra172028WCPSR" element={<SaiNacra172028WCPSRPage />} />
<Route path="/tournament/SaiNacra172026WCHyR" element={<SaiNacra172026WCHyRPage />} />
<Route path="/tournament/SaiNacra172027WCHyR" element={<SaiNacra172027WCHyRPage />} />
<Route path="/tournament/SaiNacra172028WCHyR" element={<SaiNacra172028WCHyRPage />} />
<Route path="/tournament/SaiNacra172027WCKW" element={<SaiNacra172027WCKWPage />} />
<Route path="/tournament/SaiNacra172028WCKW" element={<SaiNacra172028WCKWPage />} />
<Route path="/tournament/SaiNacra172025WCAlR" element={<SaiNacra172025WCAlRPage />} />
<Route path="/tournament/SaiNacra172026WCAlR" element={<SaiNacra172026WCAlRPage />} />
<Route path="/tournament/SaiNacra172027WCAlR" element={<SaiNacra172027WCAlRPage />} />
<Route path="/tournament/SaiNacra172028WCAlR" element={<SaiNacra172028WCAlRPage />} />

// Sport Climbing Routes
<Route path="/tournament/SportClimbing2024WChYo" element={<SportClimbing2024WChYoPage />} />
<Route path="/tournament/SportClimbing2024ECh" element={<SportClimbing2024EChPage />} />
<Route path="/tournament/SportClimbing2024WC1" element={<SportClimbing2024WC1Page />} />
<Route path="/tournament/SportClimbing2024WC2" element={<SportClimbing2024WC2Page />} />
<Route path="/tournament/SportClimbing2024EChYo" element={<SportClimbing2024EChYoPage />} />
<Route path="/tournament/SportClimbing2024WC3" element={<SportClimbing2024WC3Page />} />

// Surfing Routes
<Route path="/tournament/Surfing2024ChTo9" element={<Surfing2024ChTo9Page />} />
<Route path="/tournament/Surfing2024ChTo10" element={<Surfing2024ChTo10Page />} />

// Swimming Routes
<Route path="/tournament/Swimming2024WCup1" element={<Swimming2024WCup1Page />} />
<Route path="/tournament/Swimming2024WCup2" element={<Swimming2024WCup2Page />} />
// Swimming Routes (Continued)
<Route path="/tournament/Swimming2024WCup3" element={<Swimming2024WCup3Page />} />
<Route path="/tournament/Swimming2024WCh25m" element={<Swimming2024WCh25mPage />} />
<Route path="/tournament/Swimming2025WCh" element={<Swimming2025WChPage />} />
<Route path="/tournament/Swimming2026ECh" element={<Swimming2026EChPage />} />

// Taekwondo Routes
<Route path="/tournament/Taekwondo2024WchJu" element={<Taekwondo2024WChJuPage />} />

// Tennis Routes
<Route path="/tournament/Tennis2025AO" element={<Tennis2025AOPage />} />
<Route path="/tournament/Tennis2025RG" element={<Tennis2025RGPage />} />
<Route path="/tournament/Tennis2025WB" element={<Tennis2025WBPage />} />
<Route path="/tournament/Tennis2025UO" element={<Tennis2025UOPage />} />

// Track Cycling Routes
<Route path="/tournament/TrackCycling2024Wch" element={<TrackCycling2024WChPage />} />
<Route path="/tournament/TrackCycling2025Wch" element={<TrackCycling2025WChPage />} />
<Route path="/tournament/TrackCycling2025Ech" element={<TrackCycling2025EChPage />} />

// Trampoline Routes
<Route path="/tournament/Trampoline2025WCh" element={<Trampoline2025WChPage />} />
<Route path="/tournament/Trampoline2025WChJu" element={<Trampoline2025WChJuPage />} />
<Route path="/tournament/Trampoline2027WCh" element={<Trampoline2027WChPage />} />
<Route path="/tournament/Trampoline2027WChJu" element={<Trampoline2027WChJuPage />} />
<Route path="/tournament/Trampoline2025WC1" element={<Trampoline2025WC1Page />} />
<Route path="/tournament/Trampoline2025WC2" element={<Trampoline2025WC2Page />} />
<Route path="/tournament/Trampoline2025WC3" element={<Trampoline2025WC3Page />} />
<Route path="/tournament/Trampoline2025WC4" element={<Trampoline2025WC4Page />} />
<Route path="/tournament/Trampoline2025WC5" element={<Trampoline2025WC5Page />} />
<Route path="/tournament/Trampoline2025WC6" element={<Trampoline2025WC6Page />} />

// Volleyball Routes
<Route path="/tournament/VolleyballMVNL2025" element={<VolleyballMVNL2025Page />} />
<Route path="/tournament/VolleyballFVNL2025" element={<VolleyballFVNL2025Page />} />
<Route path="/tournament/VolleyballMVNL2026" element={<VolleyballMVNL2026Page />} />
<Route path="/tournament/VolleyballFVNL2026" element={<VolleyballFVNL2026Page />} />
<Route path="/tournament/VolleyballMVNL2027" element={<VolleyballMVNL2027Page />} />
<Route path="/tournament/VolleyballFVNL2027" element={<VolleyballFVNL2027Page />} />
<Route path="/tournament/VolleyballMVNL2028" element={<VolleyballMVNL2028Page />} />
<Route path="/tournament/VolleyballFVNL2028" element={<VolleyballFVNL2028Page />} />
<Route path="/tournament/VolleyballMWCh2025" element={<VolleyballMWCh2025Page />} />
<Route path="/tournament/VolleyballFWCh2025" element={<VolleyballFWCh2025Page />} />
<Route path="/tournament/VolleyballMWCh2027" element={<VolleyballMWCh2027Page />} />
<Route path="/tournament/VolleyballFWCh2027" element={<VolleyballFWCh2027Page />} />
<Route path="/tournament/VolleyballMPCh2026" element={<VolleyballMPCh2026Page />} />
<Route path="/tournament/VolleyballFPCh2026" element={<VolleyballFPCh2026Page />} />
<Route path="/tournament/VolleyballMPCh2028" element={<VolleyballMPCh2028Page />} />
<Route path="/tournament/VolleyballFPCh2028" element={<VolleyballFPCh2028Page />} />
<Route path="/tournament/VolleyballMECh2024U20" element={<VolleyballMECh2024U20Page />} />
<Route path="/tournament/VolleyballWECh2024U20" element={<VolleyballWECh2024U20Page />} />
<Route path="/tournament/VolleyballEPCh2026" element={<VolleyballEPCh2026Page />} />
<Route path="/tournament/VolleyballFECh2026" element={<VolleyballFECh2026Page />} />
<Route path="/tournament/VolleyballMECh2028" element={<VolleyballMECh2028Page />} />
<Route path="/tournament/VolleyballFECh2028" element={<VolleyballFECh2028Page />} />

// Water Polo Routes
<Route path="/tournament/WaterPolo2025WCh" element={<WaterPolo2025WChPage />} />
<Route path="/tournament/WaterPolo2024WChU18W" element={<WaterPolo2024WChU18WPage />} />
<Route path="/tournament/WaterPolo2024EChU20W" element={<WaterPolo2024EChU20WPage />} />
<Route path="/tournament/WaterPolo2024EChU20M" element={<WaterPolo2024EChU20MPage />} />

// Wrestling Routes
<Route path="/tournament/Wrestling2025ECh" element={<Wrestling2025EChPage />} />
<Route path="/tournament/Wrestling2026ECh" element={<Wrestling2026EChPage />} />
<Route path="/tournament/Wrestling2027ECh" element={<Wrestling2027EChPage />} />
<Route path="/tournament/Wrestling2025EChU17" element={<Wrestling2025EChU17Page />} />
<Route path="/tournament/Wrestling2026EChU17" element={<Wrestling2026EChU17Page />} />
<Route path="/tournament/Wrestling2027EChU17" element={<Wrestling2027EChU17Page />} />
<Route path="/tournament/Wrestling2025EChU20" element={<Wrestling2025EChU20Page />} />
<Route path="/tournament/Wrestling2026EChU20" element={<Wrestling2026EChU20Page />} />
<Route path="/tournament/Wrestling2027EChU20" element={<Wrestling2027EChU20Page />} />
<Route path="/tournament/Wrestling2025EChU23" element={<Wrestling2025EChU23Page />} />
<Route path="/tournament/Wrestling2026EChU23" element={<Wrestling2026EChU23Page />} />
<Route path="/tournament/Wrestling2027EChU23" element={<Wrestling2027EChU23Page />} />
<Route path="/tournament/Wrestling2025WCh" element={<Wrestling2025WChPage />} />
<Route path="/tournament/Wrestling2026WCh" element={<Wrestling2026WChPage />} />
<Route path="/tournament/Wrestling2027WCh" element={<Wrestling2027WChPage />} />
<Route path="/tournament/Wrestling2024WChU17" element={<Wrestling2024WChU17Page />} />
<Route path="/tournament/Wrestling2025WChU17" element={<Wrestling2025WChU17Page />} />
<Route path="/tournament/Wrestling2026WChU17" element={<Wrestling2026WChU17Page />} />
<Route path="/tournament/Wrestling2027WChU17" element={<Wrestling2027WChU17Page />} />
<Route path="/tournament/Wrestling2024WChU20" element={<Wrestling2024WChU20Page />} />
<Route path="/tournament/Wrestling2025WChU20" element={<Wrestling2025WChU20Page />} />
<Route path="/tournament/Wrestling2026WChU20" element={<Wrestling2026WChU20Page />} />
<Route path="/tournament/Wrestling2027WChU20" element={<Wrestling2027WChU20Page />} />
<Route path="/tournament/Wrestling2024WChU23" element={<Wrestling2024WChU23Page />} />
<Route path="/tournament/Wrestling2025WChU23" element={<Wrestling2025WChU23Page />} />
<Route path="/tournament/Wrestling2026WChU23" element={<Wrestling2026WChU23Page />} />
<Route path="/tournament/Wrestling2027WChU23" element={<Wrestling2027WChU23Page />} />

      </Routes>
    </Router>
  );
}

export default App;
