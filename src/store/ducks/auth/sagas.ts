import {call} from 'redux-saga/effects';
import {store} from '../../../services/auth';
import {IUser} from '../../../types/IUser';

export function* login({payload}: {payload: IUser}) {
  try {
    const {data} = yield call(store, payload);
    return data;
  } catch (error) {
    return error;
  }
}
