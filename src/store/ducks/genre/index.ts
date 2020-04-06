import {Reducer} from 'redux';
import {GenreState, GenreTypes} from './types';

const INITIAL_STATE: GenreState = {
  selected: 999,
  data: [],
  loading: false,
  error: false,
};

/**
 * Reducer
 */
const genre: Reducer<GenreState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GenreTypes.GENRE_REQUEST:
      return {...state, loading: true};
    case GenreTypes.GENRE_SUCCESS:
      return {...state, loading: false, data: action.payload.genres};
    case GenreTypes.SET_GENRE_REQUEST:
      return {...state, loading: true};
    case GenreTypes.SET_GENRE_SUCCESS:
      return {...state, loading: false, selected: action.payload};
    default:
      return state;
  }
};

export default genre;
