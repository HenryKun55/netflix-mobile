import {action} from 'typesafe-actions';
import {AuthTypes} from './types';
import {IUser} from '../../../types/IUser';

export const authRequest = (user: IUser) =>
  action(AuthTypes.AUTH_REQUEST, user);

export const authSuccess = ({token, user}: {token: string; user: IUser}) =>
  action(AuthTypes.AUTH_SUCCESS, {token, user});

export const tokenSuccess = (token: string) =>
  action(AuthTypes.TOKEN_SUCCESS, token);

export const getAuth = () => action(AuthTypes.GET_AUTH);

export const removeAuth = () => action(AuthTypes.REMOVE_AUTH);
