import {apiLocal} from './api';
import {IUser} from '../types/IUser';

export const store = async (user: IUser) => {
  try {
    const {data} = await apiLocal.post('/login', user);
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
