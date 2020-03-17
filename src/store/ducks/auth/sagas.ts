import {call, put} from 'redux-saga/effects';
import {
  authSuccess,
  removeAuth,
  tokenSuccess,
  changeState,
  cancelLoading,
} from './actions';
import {login, store} from '../../../services/auth';
import {setStorage, getStorage, removeStorage} from '../../../util';
import {showMessage} from 'react-native-flash-message';

export function* authUser(payload: any) {
  console.log(payload);
  try {
    const data = yield call(login, payload.payload);
    yield call(setStorage, '@token', data.token);
    yield call(setStorage, '@user', data.user._id);
    yield put(authSuccess(data));
  } catch (err) {
    yield put(cancelLoading());
    showMessage({
      message: '🙃 Mamma Mia!',
      description: 'Verifica teu e-mail e senha por favorzinho ',
      type: 'danger',
      duration: 3000,
    });
  }
}

export function* storeUser(payload: any) {
  try {
    const data = yield call(store, payload.payload);
    if (data.success) {
      yield put(changeState('signin'));
    } else {
      yield put(cancelLoading());
      showMessage({
        message: '😔 Que pena',
        description: 'Provavelmente o nome e e-mail já existem',
        type: 'danger',
        duration: 3000,
      });
    }
  } catch (err) {
    console.log(err);
  }
}

export function* getUser() {
  try {
    const token = yield call(getStorage, '@token');
    const id = yield call(getStorage, '@user');
    if (token) {
      yield put(tokenSuccess({token, id}));
    }
  } catch (err) {
    console.log(err);
  }
}

export function* removeUser() {
  yield call(removeStorage, '@token');
  yield call(removeAuth);
}
