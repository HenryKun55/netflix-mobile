import {call, put} from 'redux-saga/effects';
import {discoverMovies, likeMovie, getMovie} from '../../../services/movie';
import {
  setMoviesRequest,
  setMoviesSuccess,
  likeMovieSuccess,
  setPageSuccess,
  clearMovies,
} from './actions';

import {getStorage} from '../../../util';

export function* setMovies(payload: any) {
  const {genre, pageNumber} = payload.payload;
  try {
    yield call(setMoviesRequest, genre, pageNumber);
    const data = yield call(discoverMovies, {genre, pageNumber});
    yield put(setMoviesSuccess(data.results));
  } catch (error) {
    console.log(error);
  }
}

export function* getLikeMovie(payload: any) {
  try {
    const token = yield call(getStorage, '@token');
    const data = yield call(getMovie, {
      token,
      movieId: payload.payload,
    });
    const {movieId, users} = data;
    yield put(likeMovieSuccess({movieId, users}));
  } catch (error) {
    console.log('Filme não encontrado na base');
  }
}

export function* setLikeMovie(payload: any) {
  try {
    const token = yield call(getStorage, '@token');
    const data = yield call(likeMovie, {token, movieId: payload.payload});
    const {movieId, users} = data;
    yield put(likeMovieSuccess({movieId, users}));
  } catch (error) {
    console.log(error);
  }
}

export function* setPageNumber(payload: any) {
  try {
    if (payload.payload === 1) {
      yield put(clearMovies());
    }
    yield put(setPageSuccess(payload.payload));
  } catch (error) {
    console.log(error);
  }
}
