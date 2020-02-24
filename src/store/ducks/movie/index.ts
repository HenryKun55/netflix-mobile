import {Reducer} from 'redux';
import {MovieState, MovieTypes} from './types';

const INITIAL_STATE: MovieState = {
  pageNumber: 1,
  data: [],
  loading: false,
  error: false,
};

/**
 * Reducer
 */
const movie: Reducer<MovieState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MovieTypes.SET_MOVIES_REQUEST:
      return {...state, loading: true};
    case MovieTypes.SET_MOVIES_SUCCESS:
      return {...state, loading: false, data: action.payload};
    case MovieTypes.SET_MOVIE_REQUEST:
      return {...state, loading: true};
    case MovieTypes.SET_MOVIE_SUCCESS:
      return {...state, loading: false, selected: action.payload};
    default:
      return state;
  }
};

export default movie;
