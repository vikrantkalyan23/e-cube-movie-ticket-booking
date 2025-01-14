import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './MoviesSlice'; // Adjust based on actual file name

import eventsReducer from './slices/eventsSlice';
import bookingReducer from './slices/bookingSlice';
import { setLatestMovies, setUpcomingMovies, setMovieDetails } from './moviesSlice';


const store = configureStore({
  reducer: {
    movies: moviesReducer,
    events: eventsReducer,
    booking: bookingReducer,
  },
});

export default store;
