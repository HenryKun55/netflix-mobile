import {Reducer} from 'redux';
import {AuthState, AuthTypes} from './types';

const INITIAL_STATE: AuthState = {
  data: {},
  loading: false,
  state: 'signup',
};

/**
 * Reducer
 */
const auth: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.AUTH_REQUEST:
      return {...state, loading: true};
    case AuthTypes.AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          ...action.payload.user,
          token: action.payload.token,
        },
      };
    case AuthTypes.STORE_REQUEST:
      return {...state, loading: true};
    case AuthTypes.TOKEN_SUCCESS:
      const {id, token} = action.payload;
      return {...state, data: {...state.data, token, _id: id}};
    case AuthTypes.REMOVE_AUTH:
      return {...state, data: {}};
    case AuthTypes.CHANGE_STATE:
      return {...state, state: action.payload, loading: false};
    case AuthTypes.CANCEL_LOADING:
      return {...state, loading: false};
    default:
      return state;
  }
};

export default auth;
