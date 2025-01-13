import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({ movie }) => (
  <div className="movie-card">
    <img src={movie.poster} alt={movie.title} />
    <h3>{movie.title}</h3>
    <p>{movie.genre}</p>
    <Link to={`/movies/${movie.id}`}>Details</Link>
  </div>
);

export default MovieCard;
