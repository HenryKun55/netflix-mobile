import {IUser} from '../../../types/IUser';

/**
 * Types
 */

export interface AuthState {
  data: IUser;
}

export enum AuthTypes {
  AUTH_REQUEST = 'auth/AUTH_REQUEST',
  AUTH_SUCCESS = 'auth/AUTH_SUCCESS',
  TOKEN_SUCCESS = 'auth/TOKEN_SUCCESS',
  REMOVE_AUTH = 'auth/REMOVE_AUTH',
  GET_AUTH = 'auth/GET_AUTH',
}
