import {Genre} from '../../../types/Genre';

/**
 * Types
 */

export interface GenreState {
  selected: number;
  readonly data: Genre[];
  readonly loading: boolean;
  readonly error: boolean;
}

export enum GenreTypes {
  GENRE_REQUEST = 'genre/GENRE_REQUEST',
  GENRE_SUCCESS = 'genre/GENRE_SUCCESS',
  SET_GENRE_REQUEST = 'genre/SET_GENRE_REQUEST',
  SET_GENRE_SUCCESS = 'genre/SET_GENRE_SUCCESS',
}
