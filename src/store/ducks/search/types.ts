import { IMovie } from '../../../types/IMovie';

/**
 * Types
 */

export interface SearchState {
  data: IMovie[];
  pageNumber: number;
  readonly loading: boolean;
  readonly error: boolean;
}

export enum SearchTypes {
  SEARCH_REQUEST = 'search/SEARCH_REQUEST',
  SEARCH_SUCCESS = 'search/SEARCH_SUCCESS',
  SET_PAGE_NUMBER_REQUEST = 'search/SET_PAGE_NUMBER_REQUEST',
  SET_PAGE_NUMBER_SUCCESS = 'search/SET_PAGE_NUMBER_SUCCESS',
  CLEAR_MOVIES = 'search/CLEAR_MOVIES',
}
