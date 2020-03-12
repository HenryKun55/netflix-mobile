import {IMovie} from '../../../types/IMovie';

/**
 * Types
 */

export interface MovieState {
  selected?: IMovie;
  pageNumber: number;
  readonly data: IMovie[];
  readonly loading: boolean;
  readonly error: boolean;
}

export enum MovieTypes {
  SET_MOVIES_REQUEST = 'movie/SET_MOVIES_REQUEST',
  SET_MOVIES_SUCCESS = 'movie/SET_MOVIES_SUCCESS',
  SET_MOVIE_REQUEST = 'movie/SET_MOVIE_REQUEST',
  SET_MOVIE_SUCCESS = 'movie/SET_MOVIES_SUCCESS',
  LIKE_MOVIE_REQUEST = 'movie/LIKE_MOVIE_REQUEST',
  LIKE_MOVIE_SUCCESS = 'movie/LIKE_MOVIE_SUCCESS',
  GET_MOVIE_REQUEST = 'movie/GET_MOVIE_REQUEST',
  GET_MOVIE_SUCCESS = 'movie/GET_MOVIE_SUCCESS',
  CLEAR_MOVIES = 'movie/CLEAR_MOVIES',
}
