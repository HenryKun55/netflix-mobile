import {Reducer} from 'redux';
import {CastState, CastTypes} from './types';

const INITIAL_STATE: CastState = {
  data: [],
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
    case CastTypes.SET_ACTOR:
      return {...state, selected: action.payload};
    case CastTypes.SET_PERSON_REQUEST:
      return {...state, loading: true};
    case CastTypes.SET_PERSON_SUCCESS:
      return {...state, selected: action.payload};
    case CastTypes.SET_CAST_MOVIE_SUCCESS:
      return {...state, loading: false, selected: { ...state.selected, movies: action.payload }};
    default:
      return state;
  }
};

export default cast;
