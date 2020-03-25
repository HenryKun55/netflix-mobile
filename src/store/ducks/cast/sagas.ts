import {call, put} from 'redux-saga/effects';
import {getCast} from '../../../services/movie';
import {
  setCastSuccess,
} from './actions';

export function* setCast(payload: any) {
  const {movieId} = payload.payload;
  console.log(payload);
  try {
    const data = yield call(getCast, { movieId });
    yield put(setCastSuccess(data));
  } catch (error) {
    console.log(error);
  }
}