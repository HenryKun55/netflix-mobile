import {all, takeLatest, takeLeading, takeEvery} from 'redux-saga/effects';

//  Auth
import {AuthTypes} from '../ducks/auth/types';
import {
  authUser,
  storeUser,
  getUser,
  removeUser,
  imageStore,
} from '../ducks/auth/sagas';

//  Genre
import {GenreTypes} from '../ducks/genre/types';
import {getGenres, setGenre} from '../ducks/genre/sagas';

//Movie
import {MovieTypes} from '../ducks/movie/types';
import {
  setMovies,
  setLikeMovie,
  getLikeMovie,
  setPageNumber,
} from '../ducks/movie/sagas';

//Cast
import { CastTypes } from './cast/types';
import {
  setCast, setActor,
} from '../ducks/cast/sagas';


export default function* rootSaga() {
  yield all([
    //Genres
    takeLatest(GenreTypes.GENRE_REQUEST, getGenres),
    takeLatest(GenreTypes.SET_GENRE_REQUEST, setGenre),

    //Movie
    takeLeading(MovieTypes.SET_MOVIES_REQUEST, setMovies),
    takeLeading(MovieTypes.LIKE_MOVIE_REQUEST, setLikeMovie),
    takeLeading(MovieTypes.GET_MOVIE_REQUEST, getLikeMovie),
    takeLeading(MovieTypes.SET_PAGE_NUMBER_REQUEST, setPageNumber),
    
    //Auth
    takeLatest(AuthTypes.AUTH_REQUEST, authUser),
    takeLatest(AuthTypes.STORE_REQUEST, storeUser),
    takeEvery(AuthTypes.GET_AUTH, getUser),
    takeLatest(AuthTypes.REMOVE_AUTH, removeUser),
    takeLatest(AuthTypes.IMAGE_REQUEST, imageStore),
    
    //Actor
    takeLeading(CastTypes.SET_CAST_REQUEST, setCast),
    takeLeading(CastTypes.SET_PERSON_REQUEST, setActor),
  ]);
}
