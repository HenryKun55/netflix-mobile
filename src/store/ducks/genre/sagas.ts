import {call, put} from 'redux-saga/effects';
import {discoverGenres} from '../../../services/movie';
import {
  genreRequest,
  genreSuccess,
  setGenreRequest,
  setGenreSuccess,
} from './actions';

export function* getGenres() {
  try {
    yield call(genreRequest);
    const data = yield call(discoverGenres);
    yield put(genreSuccess(data));
    return data;
  } catch (error) {
    return error;
  }
}

export function* setGenre(request: any) {
  const {payload} = request;
  try {
    yield call(setGenreRequest, payload);
    yield put(setGenreSuccess(payload));
  } catch (error) {
    return error;
  }
}
