import {action} from 'typesafe-actions';
import {AuthTypes} from './types';
import {IUser} from '../../../types/IUser';

export const authRequest = (user: IUser) =>
  action(AuthTypes.AUTH_REQUEST, user);

export const authSuccess = ({token, user}: {token: string; user: IUser}) =>
  action(AuthTypes.AUTH_SUCCESS, {token, user});

export const storeRequest = (user: IUser) =>
  action(AuthTypes.STORE_REQUEST, user);

export const tokenSuccess = ({token, id}: {token: string; id: string}) =>
  action(AuthTypes.TOKEN_SUCCESS, {token, id});

export const getAuth = () => action(AuthTypes.GET_AUTH);

export const removeAuth = () => action(AuthTypes.REMOVE_AUTH);

export const changeState = (state: string) =>
  action(AuthTypes.CHANGE_STATE, state);

export const cancelLoading = () => action(AuthTypes.CANCEL_LOADING);
