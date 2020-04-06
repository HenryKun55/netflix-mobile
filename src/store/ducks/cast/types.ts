
import {CastMovie} from '../../../types/CastMovie';
import {Person} from '../../../types/Person';

/**
 * Types
 */

export interface CastState {
  selected?: Person;
  selectedCast: Person[];
  readonly data: CastMovie[];
  readonly loading: boolean;
  readonly error: boolean;
}

export enum CastTypes {
  SET_CAST_REQUEST = 'cast/SET_CAST_REQUEST',
  SET_CAST_SUCCESS = 'cast/SET_CAST_SUCCESS',
  SET_ACTOR = 'cast/SET_ACTOR',
  SET_PERSON_REQUEST = 'cast/SET_PERSON_REQUEST',
  SET_PERSON_SUCCESS = 'cast/SET_PERSON_SUCCESS',
  SET_CAST_MOVIE_SUCCESS = 'cast/SET_CAST_MOVIE_SUCCESS',
  REMOVE_CAST_REQUEST = 'cast/REMOVE_CAST_REQUEST',
  REMOVE_CAST_SUCCESS = 'cast/REMOVE_CAST_SUCCESS',
}
