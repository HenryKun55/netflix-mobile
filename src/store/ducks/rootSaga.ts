import {all, takeLatest, takeLeading, takeEvery} from 'redux-saga/effects';

//  Auth
import {AuthTypes} from '../ducks/auth/types';
import {authUser, storeUser, getUser, removeUser} from '../ducks/auth/sagas';

//  Genre
import {GenreTypes} from '../ducks/genre/types';
import {getGenres, setGenre} from '../ducks/genre/sagas';

//Movie
import {MovieTypes} from '../ducks/movie/types';
import {setMovies, setLikeMovie, getLikeMovie} from '../ducks/movie/sagas';

export default function* rootSaga() {
  yield all([
    //Genres
    takeLatest(GenreTypes.GENRE_REQUEST, getGenres),
    takeLatest(GenreTypes.SET_GENRE_REQUEST, setGenre),

    //Movie
    takeLeading(MovieTypes.SET_MOVIES_REQUEST, setMovies),
    takeLeading(MovieTypes.LIKE_MOVIE_REQUEST, setLikeMovie),
    takeLeading(MovieTypes.GET_MOVIE_REQUEST, getLikeMovie),

    //Auth
    takeLatest(AuthTypes.AUTH_REQUEST, authUser),
    takeLatest(AuthTypes.STORE_REQUEST, storeUser),
    takeEvery(AuthTypes.GET_AUTH, getUser),
    takeLatest(AuthTypes.REMOVE_AUTH, removeUser),
  ]);
}
