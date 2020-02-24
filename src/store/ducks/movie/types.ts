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
}
