import {Reducer} from 'redux';
import {AsyncStorage} from 'react-native';
import {AuthState, AuthTypes} from './types';

const INITIAL_STATE: AuthState = {
  token: AsyncStorage.getItem('token'),
  data: {
    id: '',
    name: '',
    email: '',
  },
  loading: false,
  error: false,
};

/**
 * Reducer
 */
const auth: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.LOGIN_REQUEST:
      return {...state, loading: true};
    case AuthTypes.LOGIN_SUCCESS:
      return {...state, loading: false, data: action.payload.data};
    default:
      return state;
  }
};

export default auth;
