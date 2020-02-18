import {all, takeLatest} from 'redux-saga/effects';

import {AuthTypes} from '../ducks/auth/types';
import {login} from '../ducks/auth/sagas';

export default function* rootSaga() {
  yield all([takeLatest(AuthTypes.LOGIN_REQUEST, login)]);
}
