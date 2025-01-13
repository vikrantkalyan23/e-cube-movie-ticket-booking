import React from 'react';
import { Link } from 'react-router-dom';
//import './styles/Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/">Home</Link>
    <Link to="/latest-movies">Latest Movies</Link>
    <Link to="/upcoming-movies">Upcoming Movies</Link>
    <Link to="/events">Events</Link>
  </nav>
);

export default Navbar;
