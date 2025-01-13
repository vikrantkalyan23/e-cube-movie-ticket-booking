import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import LatestMovies from './pages/LatestMovies';
import UpcomingMovies from './pages/UpcomingMovies';
import Events from './pages/Events';
import MovieDetails from './pages/MovieDetails';

const App = () => (
  <Provider store={store}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/latest-movies" element={<LatestMovies />} />
        <Route path="/upcoming-movies" element={<UpcomingMovies />} />
        <Route path="/events" element={<Events />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
