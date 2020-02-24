import {call, put} from 'redux-saga/effects';
import {discoverMovies} from '../../../services/movie';
import {setMoviesRequest, setMoviesSuccess} from './actions';

export function* setMovies(payload: any) {
  const {genre, pageNumber} = payload.payload;
  console.log(genre, pageNumber);
  try {
    yield call(setMoviesRequest, genre, pageNumber);
    const data = yield call(discoverMovies, {genre, pageNumber});
    yield put(setMoviesSuccess(data.results));
  } catch (error) {
    return error;
  }
}
