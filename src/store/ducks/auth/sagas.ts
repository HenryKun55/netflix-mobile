import {call, put} from 'redux-saga/effects';
import {store} from '../../../services/auth';
import {IUser} from '../../../types/IUser';
import {loginRequest} from '../../ducks/auth/actions';

export function* login({payload}: {payload: IUser}) {
  try {
    const response = yield call(store, payload);
    console.log(response);
  } catch (error) {}
}
