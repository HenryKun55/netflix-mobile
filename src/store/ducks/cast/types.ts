
import {Cast} from '../../../types/Cast';

/**
 * Types
 */

export interface CastState {
  selected?: Cast;
  readonly data: Cast[];
  readonly loading: boolean;
  readonly error: boolean;
}

export enum CastTypes {
  SET_CAST_REQUEST = 'movie/SET_CAST_REQUEST',
  SET_CAST_SUCCESS = 'movie/SET_CAST_SUCCESS',
}
