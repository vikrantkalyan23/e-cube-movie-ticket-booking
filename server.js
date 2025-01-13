const express = require('express');
const app = express();
const PORT = 3001;

const movies = require('./movies.json'); // Import the JSON file

// Endpoint for latest movies
app.get('/api/movies/latest', (req, res) => {
  res.json(movies.latestMovies);
});

// Endpoint for upcoming movies
app.get('/api/movies/upcoming', (req, res) => {
  res.json(movies.upcomingMovies);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
