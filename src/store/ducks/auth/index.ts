import {Reducer} from 'redux';
import {AuthState, AuthTypes} from './types';

const INITIAL_STATE: AuthState = {
  data: {},
};

/**
 * Reducer
 */
const auth: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.AUTH_REQUEST:
      return {...state};
    case AuthTypes.AUTH_SUCCESS:
      const obj = {
        ...state.data,
        ...action.payload.user,
        token: action.payload.token,
      };
      console.log(obj);
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload.user,
          token: action.payload.token,
        },
      };
    case AuthTypes.TOKEN_SUCCESS:
      return {...state, data: {...state.data, token: action.payload}};
    case AuthTypes.REMOVE_AUTH:
      return {...state, data: {}};
    default:
      return state;
  }
};

export default auth;
