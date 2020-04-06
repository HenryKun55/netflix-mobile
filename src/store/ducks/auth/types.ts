import {IUser} from '../../../types/IUser';

/**
 * Types
 */

export interface AuthState {
  data: IUser;
  state: string;
  loading: boolean;
  loadInit: boolean;
}

export enum AuthTypes {
  AUTH_REQUEST = 'auth/AUTH_REQUEST',
  AUTH_SUCCESS = 'auth/AUTH_SUCCESS',
  STORE_REQUEST = 'store/STORE_REQUEST',
  TOKEN_SUCCESS = 'auth/TOKEN_SUCCESS',
  REMOVE_AUTH = 'auth/REMOVE_AUTH',
  GET_AUTH = 'auth/GET_AUTH',
  LOAD_INIT_CANCEL = 'auth/LOAD_INIT_CANCEL',
  CHANGE_STATE = 'auth/CHANGE_STATE',
  CANCEL_LOADING = 'auth/CANCEL_LOADING',
  IMAGE_REQUEST = 'auth/IMAGE_REQUEST',
  IMAGE_SUCCESS = 'auth/IMAGE_SUCCESS',
}
