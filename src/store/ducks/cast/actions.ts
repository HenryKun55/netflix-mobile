import {action} from 'typesafe-actions';
import {CastTypes} from './types';
import { Cast } from 'src/types/Cast';
import { Person } from 'src/types/Person';
import { CastMovie } from 'src/types/CastMovie';

export const setCastRequest = (movieId: number) =>
  action(CastTypes.SET_CAST_REQUEST, {movieId});
  
export const setCastSuccess = (data: Cast[]) =>
  action(CastTypes.SET_CAST_SUCCESS, data);

export const setPersonRequest = (personId: number) =>
  action(CastTypes.SET_PERSON_REQUEST, {personId});

export const setPersonSuccess = (person: Person) =>
  action(CastTypes.SET_PERSON_SUCCESS, person);

export const setCastMovieSuccess = (castMovies: CastMovie[]) =>
  action(CastTypes.SET_CAST_MOVIE_SUCCESS, castMovies);

export const removeCastRequest = () =>
  action(CastTypes.REMOVE_CAST_REQUEST);
  
export const removeCastSuccess = () =>
  action(CastTypes.REMOVE_CAST_SUCCESS);
  