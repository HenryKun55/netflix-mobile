import {action} from 'typesafe-actions';
import {MovieTypes} from './types';
import {IMovie} from '../../../types/IMovie';

export const setMoviesRequest = (genre: number, pageNumber: number) =>
  action(MovieTypes.SET_MOVIES_REQUEST, {genre, pageNumber});

export const setMoviesSuccess = (data: IMovie[]) =>
  action(MovieTypes.SET_MOVIES_SUCCESS, data);

export const setMovieRequest = () => action(MovieTypes.SET_MOVIE_REQUEST);

export const setMovieSuccess = (data: IMovie) =>
  action(MovieTypes.SET_MOVIE_SUCCESS, data);
