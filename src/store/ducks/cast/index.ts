import {Reducer} from 'redux';
import update from 'react-addons-update';
import {CastState, CastTypes} from './types';

const INITIAL_STATE: CastState = {
  data: [],
  selectedCast: [],
  loading: false,
  error: false,
};

/**
 * Reducer
 */
const cast: Reducer<CastState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CastTypes.SET_CAST_REQUEST:
      return {...state, loading: true};
      case CastTypes.SET_CAST_SUCCESS:
        return {
          ...state,
          data: action.payload,
          loading: false,
        };
    case CastTypes.SET_PERSON_REQUEST:
      return {...state, loading: true};
    case CastTypes.SET_PERSON_SUCCESS:
      return {...state, loading: false, selected: action.payload, selectedCast: [...state.selectedCast, action.payload]};
    case CastTypes.SET_CAST_MOVIE_SUCCESS:
      return update (state, { selectedCast: { [state.selectedCast.length - 1]: { movies: { $set: [...action.payload] } } }, loading: { $set: false } })
      case CastTypes.REMOVE_CAST_SUCCESS:
        return {...state, selectedCast: state.selectedCast.filter( (_,i) => i !== state.selectedCast.length - 1)};
    default:
      return state;
  }
};

export default cast;
