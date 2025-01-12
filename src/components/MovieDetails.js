import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  // Fetch and display movie details based on ID
  return (
    <div>
      <h2>Movie Details</h2>
      <p>Details about movie ID: {id}</p>
    </div>
  );
};

export default MovieDetails;