import {apiLocal} from './api';
import {IUser} from '../types/IUser';

export const store = async (user: IUser) => {
  try {
    const {data} = await apiLocal.post('/user', user);
    return data;
  } catch (error) {
    throw error;
  }
};

export const login = async (user: IUser) => {
  try {
    const {data} = await apiLocal.post('/login', user);
    return data;
  } catch (error) {
    throw error;
  }
};

export const checkToken = async (payload: any) => {
  try {
    const response = await apiLocal.post('/token', null,
    {
      headers: {
        Authorization: `Bearer ${payload}`,
      }
    });
  } catch (error) {
    throw error;
  }
};

export const image = async (payload: any) => {
  const {
    file: {uri, fileName, type},
    token,
  } = payload;
  const file = new FormData();
  file.append('file', {
    uri,
    name: fileName,
    type,
  });
  try {
    const {data} = await apiLocal.post('/user/photo', file, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};
