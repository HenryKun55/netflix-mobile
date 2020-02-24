import {apiLocal} from './api';
import {IUser} from '../types/IUser';
import {AsyncStorage} from 'react-native';

export const store = async (user: IUser) => {
  try {
    const {data} = await apiLocal.post('/login', user);
    AsyncStorage.setItem('token', data.token);
    return data;
  } catch (error) {
    throw error;
  }
};
