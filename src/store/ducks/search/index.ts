import {Reducer} from 'redux';
import update from 'react-addons-update';
import {SearchState, SearchTypes} from './types';

const INITIAL_STATE: SearchState = {
  data: [],
  pageNumber: 1,
  loading: false,
  error: false,
};

/**
 * Reducer
 */
const cast: Reducer<SearchState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SearchTypes.SEARCH_REQUEST:
      return {...state, loading: true};
    case SearchTypes.SEARCH_SUCCESS:
      return {...state, loading: false, data: action.payload };
    case SearchTypes.CLEAR_MOVIES:
      return {...state, loading: false, data: []};
    case SearchTypes.SET_PAGE_NUMBER_REQUEST:
      return {...state, loading: true};
    case SearchTypes.SET_PAGE_NUMBER_SUCCESS:
      return {...state, loading: false, pageNumber: action.payload};
    default:
      return state;
  }
};

export default cast;
