import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import BookingPage from './components/BookingPage';
import FinalTicket from './components/FinalTicket';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/ticket" element={<FinalTicket />} />
      </Routes>
    </Router>
  );
};

export default App;