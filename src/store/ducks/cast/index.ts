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
    
    default:
      return state;
  }
};

export default cast;
