import {call, put} from 'redux-saga/effects';
import {
  authSuccess,
  removeAuth,
  tokenSuccess,
  changeState,
  cancelLoading,
  imageSuccess,
} from './actions';
import {login, store, image} from '../../../services/auth';
import {setStorage, getStorage, removeStorage} from '../../../util';
import {showMessage} from 'react-native-flash-message';

export function* authUser(payload: any) {
  try {
    const data = yield call(login, payload.payload);
    yield call(setStorage, '@token', data.token);
    yield call(setStorage, '@_id', data.user._id);
    yield call(setStorage, '@name', data.user.name);
    yield call(setStorage, '@url', data.user.url);
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
    const id = yield call(getStorage, '@_id');
    const name = yield call(getStorage, '@name');
    const url = yield call(getStorage, '@url');
    if (token) {
      yield put(tokenSuccess({token, id, url, name}));
    }
  } catch (err) {
    console.log(err);
  }
}

export function* removeUser() {
  yield call(removeStorage, '@token');
  yield call(removeAuth);
  showMessage({
    message: '👋 Tchauzinho',
    description: 'Volta depois por favor !',
    duration: 3000,
  });
}

export function* imageStore(payload: any) {
  console.log(payload);
  try {
    const token = yield call(getStorage, '@token');
    const data = yield call(image, {file: payload.payload, token});
    if (data.success) {
      yield call(setStorage, '@url', data.user.urlImage);
      yield put(imageSuccess(data.user.urlImage));
    } else {
      yield put(cancelLoading());
      showMessage({
        message: '😔 Rapaz',
        description: 'Tenta de novo, acho que agora vai',
        type: 'danger',
        duration: 3000,
      });
    }
  } catch (err) {
    console.log(err);
  }
}
