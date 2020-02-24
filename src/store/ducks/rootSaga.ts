import {all, takeLatest, takeLeading} from 'redux-saga/effects';

//  Auth
import {AuthTypes} from '../ducks/auth/types';
import {login} from '../ducks/auth/sagas';

//  Genre
import {GenreTypes} from '../ducks/genre/types';
import {getGenres, setGenre} from '../ducks/genre/sagas';

//Movie
import {MovieTypes} from '../ducks/movie/types';
import {setMovies} from '../ducks/movie/sagas';

export default function* rootSaga() {
  yield all([
    //Genres
    takeLatest(GenreTypes.GENRE_REQUEST, getGenres),
    takeLatest(GenreTypes.SET_GENRE_REQUEST, setGenre),

    //Movie
    takeLeading(MovieTypes.SET_MOVIES_REQUEST, setMovies),
  ]);
}
