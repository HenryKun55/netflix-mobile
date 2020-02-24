import {action} from 'typesafe-actions';
import {GenreTypes} from './types';
import {Genre} from '../../../types/Genre';

export const genreRequest = () => action(GenreTypes.GENRE_REQUEST);

export const genreSuccess = (data: Genre[]) =>
  action(GenreTypes.GENRE_SUCCESS, data);

export const setGenreRequest = (id: number) =>
  action(GenreTypes.SET_GENRE_REQUEST, id);

export const setGenreSuccess = (genreSelected: number) =>
  action(GenreTypes.SET_GENRE_SUCCESS, genreSelected);
