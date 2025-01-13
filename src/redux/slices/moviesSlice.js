import API from '../../api';
import { setLatestMovies, setUpcomingMovies, setMovieDetails } from './moviesSlice';

export const fetchLatestMovies = () => async (dispatch) => {
  const response = await API.get('/movies/latest');
  dispatch(setLatestMovies(response.data));
};

export const fetchUpcomingMovies = () => async (dispatch) => {
  const response = await API.get('/movies/upcoming');
  dispatch(setUpcomingMovies(response.data));
};

export const fetchMovieDetails = (id) => async (dispatch) => {
  const response = await API.get(`/movies/${id}`);
  dispatch(setMovieDetails(response.data));
};
