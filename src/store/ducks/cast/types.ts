
import {CastMovie} from '../../../types/CastMovie';
import {Person} from '../../../types/Person';

/**
 * Types
 */

export interface CastState {
  selected?: Person;
  readonly data: CastMovie[];
  readonly loading: boolean;
  readonly error: boolean;
}

export enum CastTypes {
  SET_CAST_REQUEST = 'movie/SET_CAST_REQUEST',
  SET_CAST_SUCCESS = 'movie/SET_CAST_SUCCESS',
  SET_ACTOR = 'movie/SET_ACTOR',
  SET_PERSON_REQUEST = 'movie/SET_PERSON_REQUEST',
  SET_PERSON_SUCCESS = 'movie/SET_PERSON_SUCCESS',
  SET_CAST_MOVIE_SUCCESS = 'movie/SET_CAST_MOVIE_SUCCESS',
}
