import {call, put} from 'redux-saga/effects';
import {discoverMovies, likeMovie, getMovie} from '../../../services/movie';
import {
  setMoviesRequest,
  setMoviesSuccess,
  likeMovieSuccess,
  clearMovies,
} from './actions';

import {getStorage} from '../../../util';

export function* setMovies(payload: any) {
  const {genre, pageNumber} = payload.payload;
  try {
    yield put(clearMovies());
    yield call(setMoviesRequest, genre, pageNumber);
    const data = yield call(discoverMovies, {genre, pageNumber});
    yield put(setMoviesSuccess(data.results));
  } catch (error) {
    console.log(error);
  }
}

export function* getLikeMovie(payload: any) {
  try {
    const token = yield call(getStorage, '@user');
    const data = yield call(getMovie, {
      token,
      movieId: payload.payload,
    });
    const {movieId, users} = data;
    yield put(likeMovieSuccess({movieId, users}));
  } catch (error) {
    console.log(error);
  }
}

export function* setLikeMovie(payload: any) {
  try {
    const token = yield call(getStorage, '@user');
    const data = yield call(likeMovie, {token, movieId: payload.payload});
    const {movieId, users} = data;
    yield put(likeMovieSuccess({movieId, users}));
  } catch (error) {
    console.log(error);
  }
}
