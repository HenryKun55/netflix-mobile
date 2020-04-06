import {call, put} from 'redux-saga/effects';
import {
  authSuccess,
  removeAuth,
  tokenSuccess,
  changeState,
  cancelLoading,
  imageSuccess,
  loadInitCancel,
} from './actions';
import {login, store, image, checkToken} from '../../../services/auth';
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
    yield call(checkToken, token);
    const id = yield call(getStorage, '@_id');
    const name = yield call(getStorage, '@name');
    const url = yield call(getStorage, '@url');
    if (token) {
      yield put(tokenSuccess({token, id, url, name}));
    }
  } catch (err) {
    yield put(loadInitCancel());
    // showMessage({
    //   message: 'Sua internet ta funcionando? 🤔',
    //   description: 'Verifique a conexão ai consagrado(a) !',
    //   duration: 3000,
    // });
  }
}

export function* removeUser() {
  yield call(removeStorage, '@token');
  yield call(removeStorage, '@_id');
  yield call(removeStorage, '@name');
  yield call(removeStorage, '@url');  
  yield call(removeAuth);
  showMessage({
    message: '👋 Tchauzinho',
    description: 'Volta depois por favor !',
    duration: 3000,
  });
}

export function* imageStore(payload: any) {
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
