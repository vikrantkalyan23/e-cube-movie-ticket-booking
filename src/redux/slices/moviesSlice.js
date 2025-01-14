import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: { latest: [], upcoming: [], details: null },
  reducers: {
    setLatestMovies: (state, action) => {
      state.latest = action.payload;
    },
    setUpcomingMovies: (state, action) => {
      state.upcoming = action.payload;
    },
    setMovieDetails: (state, action) => {
      state.details = action.payload;
    },
  },
});

export const { setLatestMovies, setUpcomingMovies, setMovieDetails } = moviesSlice.actions;
export default moviesSlice.reducer;
