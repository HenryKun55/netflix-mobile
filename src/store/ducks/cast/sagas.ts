import {call, put} from 'redux-saga/effects';
import {getCast} from '../../../services/movie';
import { getActor, getMoviesFromActor } from '../../../services/cast';
import {
  setCastSuccess, setPersonSuccess, setCastMovieSuccess, removeCastSuccess
} from './actions';

export function* setCast(payload: any) {
  const {movieId} = payload.payload;
  try {
    const data = yield call(getCast, { movieId });
    yield put(setCastSuccess(data));
  } catch (error) {
    console.log(error);
  }
}

export function* setActor(payload: any) {
  const {personId} = payload.payload;
  try {
    const actor = yield call(getActor, {personId});
    yield put(setPersonSuccess(actor));
    const moviesFromActor = yield call(getMoviesFromActor, {personId});
    yield put(setCastMovieSuccess(moviesFromActor));
  } catch (error) {
    console.log(error);
  }
}

export function* removeCast() {
  yield put(removeCastSuccess());
}