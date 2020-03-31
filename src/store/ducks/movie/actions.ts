import {action} from 'typesafe-actions';
import {MovieTypes} from './types';
import {IMovie} from '../../../types/IMovie';
import { Rating } from '../../../types/Rating';

export const setMoviesRequest = (genre: number, pageNumber: number) =>
  action(MovieTypes.SET_MOVIES_REQUEST, {genre, pageNumber});

export const setMoviesSuccess = (data: IMovie[]) =>
  action(MovieTypes.SET_MOVIES_SUCCESS, data);

export const getMovieLikeRequest = (movieId: string) =>
  action(MovieTypes.GET_MOVIE_REQUEST, movieId);

export const likeMovieRequest = (movieId: number) =>
  action(MovieTypes.LIKE_MOVIE_REQUEST, movieId);

export const likeMovieSuccess = ({
  users,
}: {
  users: string[];
}) => action(MovieTypes.LIKE_MOVIE_SUCCESS, {users});

export const ratingMovieSuccess = ({
  movieId,
  ratings,
}: {
  movieId: string;
  ratings: Rating[];
}) => action(MovieTypes.RATING_MOVIE_SUCCESS, {movieId, ratings});

export const setMovieRequest = (data: IMovie) =>
  action(MovieTypes.SET_MOVIE_REQUEST, data);

export const setMovieSuccess = (data: IMovie) =>
  action(MovieTypes.SET_MOVIE_SUCCESS, data);

export const clearMovies = () => action(MovieTypes.CLEAR_MOVIES);

export const setPageRequest = (pageNumber: number) =>
  action(MovieTypes.SET_PAGE_NUMBER_REQUEST, pageNumber);

export const setPageSuccess = (pageNumber: number) =>
  action(MovieTypes.SET_PAGE_NUMBER_SUCCESS, pageNumber);
