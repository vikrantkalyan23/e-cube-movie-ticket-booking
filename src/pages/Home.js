import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Welcome to E-Cube</h1>
    <Link to="/latest-movies">Browse Latest Movies</Link>
    <Link to="/events">View Events</Link>
  </div>
);

export default Home;
