import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import AllMeetupsPage from './pages/AllMeetups';
import FavouritesPage from './pages/Favourites';
import NewMeetupPage from './pages/NewMeetup';
import MainNavigation from './components/layout/MainNavigation';
import Layout from './components/layout/Layout';
function App() {
  return (
    <Layout>
        <Routes>
          <Route path="/" element={<AllMeetupsPage />} />
          <Route path="/new-meetup" element={<NewMeetupPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
