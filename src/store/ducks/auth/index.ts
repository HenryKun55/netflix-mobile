import {Reducer} from 'redux';
import {AuthState, AuthTypes} from './types';

const INITIAL_STATE: AuthState = {
  data: {},
  loading: false,
  state: 'signup',
  loadInit: false,
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
    case AuthTypes.GET_AUTH:
      return {...state, loadInit: true};
    case AuthTypes.LOAD_INIT_CANCEL:
      return {...state, loadInit: false};
    case AuthTypes.TOKEN_SUCCESS:
      const {id, token, url, name} = action.payload;
      return {...state, loading: false, loadInit: false, data: {...state.data, name, token, _id: id, url}};
    case AuthTypes.REMOVE_AUTH:
      return {...state, data: {}};
    case AuthTypes.CHANGE_STATE:
      return {...state, state: action.payload, loading: false};
    case AuthTypes.CANCEL_LOADING:
      return {...state, loading: false};
    case AuthTypes.IMAGE_REQUEST:
      return {...state, loading: true};
    case AuthTypes.IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {...state.data, url: action.payload},
      };
    default:
      return state;
  }
};

export default auth;
