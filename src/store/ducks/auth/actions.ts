import {action} from 'typesafe-actions';
import {AuthTypes} from './types';
import {IUser} from '../../../types/IUser';

export const loginRequest = (user: IUser) =>
  action(AuthTypes.LOGIN_REQUEST, {user});

export const loginSuccess = (data: IUser) =>
  action(AuthTypes.LOGIN_SUCCESS, data);
