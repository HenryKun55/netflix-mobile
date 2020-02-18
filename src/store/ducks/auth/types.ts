import {IUser} from '../../../types/IUser';

/**
 * Types
 */

export interface AuthState {
  token: Promise<string | null>;
  readonly data: IUser;
  readonly loading: boolean;
  readonly error: boolean;
}

export enum AuthTypes {
  LOGIN_REQUEST = 'auth/LOGIN_REQUEST',
  LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS',
}
