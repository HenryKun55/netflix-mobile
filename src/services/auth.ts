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
