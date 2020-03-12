import {call, put} from 'redux-saga/effects';
import {authSuccess, removeAuth, tokenSuccess} from './actions';
import {login} from '../../../services/auth';
import {setStorage, getStorage, removeStorage} from '../../../util';

export function* authUser(payload: any) {
  try {
    const data = yield call(login, payload.payload);
    yield call(setStorage, '@user', data.token);
    yield put(authSuccess(data));
  } catch (err) {
    console.log(err);
  }
}

export function* getUser() {
  try {
    const token = yield call(getStorage, '@user');
    if (token) {
      yield put(tokenSuccess(token));
    }
  } catch (err) {
    console.log(err);
  }
}

export function* removeUser() {
  yield call(removeStorage, '@user');
  yield call(removeAuth);
}
