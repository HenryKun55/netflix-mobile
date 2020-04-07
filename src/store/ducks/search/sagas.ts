import {call, put} from 'redux-saga/effects';
import {searchMovies} from '../../../services/movie';
import {
  searchSuccess,
  clearMovies,
  setSearchPageSuccess,
} from './actions';

export function* search(payload: any) {
  const {query, pageNumber} = payload.payload;
  try {
    const data = yield call(searchMovies, { query, pageNumber });
    yield put(searchSuccess(data.results));
  } catch (error) {
    console.log(error);
  }
}

export function* setSearchPageNumber(payload: any) {
  try {
    if (payload.payload === 1) {
      yield put(clearMovies());
    }
    yield put(setSearchPageSuccess(payload.payload));
  } catch (error) {
    console.log(error);
  }
}