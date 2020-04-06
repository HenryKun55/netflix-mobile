import {IMovie} from '../../../types/IMovie';

/**
 * Types
 */

export interface MovieState {
  selectedMovies: IMovie[];
  pageNumber: number;
  modal: boolean;
  readonly data: IMovie[];
  readonly loading: boolean;
  readonly error: boolean;
}

export enum MovieTypes {
  SET_MOVIES_REQUEST = 'movie/SET_MOVIES_REQUEST',
  SET_MOVIES_SUCCESS = 'movie/SET_MOVIES_SUCCESS',
  SET_MOVIE_REQUEST = 'movie/SET_MOVIE_REQUEST',
  SET_MOVIE_SUCCESS = 'movie/SET_MOVIE_SUCCESS',
  REMOVE_MOVIE_REQUEST = 'movie/REMOVE_MOVIE_REQUEST',
  REMOVE_MOVIE_SUCCESS = 'movie/REMOVE_MOVIE_SUCCESS',
  LIKE_MOVIE_REQUEST = 'movie/LIKE_MOVIE_REQUEST',
  LIKE_MOVIE_SUCCESS = 'movie/LIKE_MOVIE_SUCCESS',
  GET_MOVIE_REQUEST = 'movie/GET_MOVIE_REQUEST',
  GET_MOVIE_SUCCESS = 'movie/GET_MOVIE_SUCCESS',
  CLEAR_MOVIES = 'movie/CLEAR_MOVIES',
  SET_PAGE_NUMBER_REQUEST = 'movie/SET_PAGE_NUMBER_REQUEST',
  SET_PAGE_NUMBER_SUCCESS = 'movie/SET_PAGE_NUMBER_SUCCESS',
  RATING_MOVIE_SUCCESS = 'movie/RATING_MOVIE_SUCCESS',
  SET_RATING_REQUEST = 'movie/SET_RATING_REQUEST',
  SET_RATING_SUCCESS = 'movie/SET_RATING_SUCCESS',
  CANCEL_LOADING = 'movie/CANCEL_LOADING',
  CLOSE_MODAL = 'movie/CLOSE_MODAL',
  OPEN_MODAL = 'movie/OPEN_MODAL',
}
