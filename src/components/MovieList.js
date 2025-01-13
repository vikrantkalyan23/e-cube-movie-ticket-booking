import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/movies/latest') // Ensure the endpoint matches your backend
      .then((response) => {
        setMovies(response.data);
      })
      .catch((err) => {
        setError('Error fetching movies');
        console.error(err);
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Latest Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>Release Date: {movie.releaseDate}</p>
            <p>Rating: {movie.rating || 'N/A'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
