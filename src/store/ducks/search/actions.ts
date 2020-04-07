import {action} from 'typesafe-actions';
import {SearchTypes} from './types';
import { IMovie } from 'src/types/IMovie';

export const searchRequest = (query: string) =>
  action(SearchTypes.SEARCH_REQUEST, { query });
  
export const searchSuccess = (movies: IMovie[]) =>
  action(SearchTypes.SEARCH_SUCCESS, movies);

export const setSearchPageRequest = (pageNumber: number) =>
  action(SearchTypes.SET_PAGE_NUMBER_REQUEST, pageNumber);
  
export const setSearchPageSuccess = (pageNumber: number) =>
  action(SearchTypes.SET_PAGE_NUMBER_SUCCESS, pageNumber);
  
export const clearMovies = () => action(SearchTypes.CLEAR_MOVIES);