import {action} from 'typesafe-actions';
import {CastTypes} from './types';
import { Cast } from 'src/types/Cast';

export const setCastRequest = (movieId: number) =>
  action(CastTypes.SET_CAST_REQUEST, {movieId});

export const setCastSuccess = (data: Cast[]) =>
  action(CastTypes.SET_CAST_SUCCESS, data);
