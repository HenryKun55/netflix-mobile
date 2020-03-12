import {action} from 'typesafe-actions';
import {MovieTypes} from './types';
import {IMovie} from '../../../types/IMovie';

export const setMoviesRequest = (genre: number, pageNumber: number) =>
  action(MovieTypes.SET_MOVIES_REQUEST, {genre, pageNumber});

export const setMoviesSuccess = (data: IMovie[]) =>
  action(MovieTypes.SET_MOVIES_SUCCESS, data);

export const setMovieRequest = () => action(MovieTypes.SET_MOVIE_REQUEST);

export const getMovieLikeRequest = (movieId: string) =>
  action(MovieTypes.GET_MOVIE_REQUEST, movieId);

export const likeMovieRequest = (movieId: number) =>
  action(MovieTypes.LIKE_MOVIE_REQUEST, movieId);

export const likeMovieSuccess = ({
  movieId,
  users,
}: {
  movieId: string;
  users: string[];
}) => action(MovieTypes.LIKE_MOVIE_SUCCESS, {movieId, users});

export const setMovieSuccess = (data: IMovie) =>
  action(MovieTypes.SET_MOVIE_SUCCESS, data);

export const clearMovies = () => action(MovieTypes.CLEAR_MOVIES);
