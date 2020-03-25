import {action} from 'typesafe-actions';
import {AuthTypes} from './types';
import {IUser} from '../../../types/IUser';
import {ImagePickerResponse} from 'react-native-image-picker';

export const authRequest = (user: IUser) =>
  action(AuthTypes.AUTH_REQUEST, user);

export const authSuccess = ({token, user}: {token: string; user: IUser}) =>
  action(AuthTypes.AUTH_SUCCESS, {token, user});

export const storeRequest = (user: IUser) =>
  action(AuthTypes.STORE_REQUEST, user);

export const tokenSuccess = ({
  token,
  id,
  url,
  name,
}: {
  token: string;
  id: string;
  url: string;
  name: string;
}) => action(AuthTypes.TOKEN_SUCCESS, {token, id, url, name});

export const getAuth = () => action(AuthTypes.GET_AUTH);

export const removeAuth = () => action(AuthTypes.REMOVE_AUTH);

export const changeState = (state: string) =>
  action(AuthTypes.CHANGE_STATE, state);

export const cancelLoading = () => action(AuthTypes.CANCEL_LOADING);

export const imageRequest = (imageUrl: ImagePickerResponse) =>
  action(AuthTypes.IMAGE_REQUEST, imageUrl);

export const imageSuccess = (imageUrl: string) =>
  action(AuthTypes.IMAGE_SUCCESS, imageUrl);
