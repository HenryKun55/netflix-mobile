import {apiLocal} from './api';
import {IUser} from '../types/IUser';

export const store = async (user: IUser) => {
  try {
    const {data} = await apiLocal.post('/user', user); // password, name, email
    return data;
  } catch (error) {
    throw error;
  }
};
