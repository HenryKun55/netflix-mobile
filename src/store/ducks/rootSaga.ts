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
  setMovie,
  removeMovie,
  setRating,
  setLikeRating,
  favoritesMovies
} from '../ducks/movie/sagas';

//Cast
import { CastTypes } from './cast/types';
import {
  setCast, setActor, removeCast,
} from '../ducks/cast/sagas';

//Search
import { SearchTypes } from './search/types';
import {
  search, setSearchPageNumber
} from '../ducks/search/sagas';


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
    takeLeading(MovieTypes.SET_MOVIE_REQUEST, setMovie),
    takeLeading(MovieTypes.REMOVE_MOVIE_REQUEST, removeMovie),
    takeLeading(MovieTypes.SET_RATING_REQUEST, setRating),
    takeLeading(MovieTypes.SET_LIKE_RATING_REQUEST, setLikeRating),
    takeLeading(MovieTypes.GET_FAVORITES_REQUEST, favoritesMovies),
    
    //Auth
    takeLatest(AuthTypes.AUTH_REQUEST, authUser),
    takeLatest(AuthTypes.STORE_REQUEST, storeUser),
    takeEvery(AuthTypes.GET_AUTH, getUser),
    takeLatest(AuthTypes.REMOVE_AUTH, removeUser),
    takeLatest(AuthTypes.IMAGE_REQUEST, imageStore),
    
    //Actor
    takeLeading(CastTypes.SET_CAST_REQUEST, setCast),
    takeLeading(CastTypes.SET_PERSON_REQUEST, setActor),
    takeLeading(CastTypes.REMOVE_CAST_REQUEST, removeCast),

    //Search
    takeLeading(SearchTypes.SEARCH_REQUEST, search),
    takeLeading(SearchTypes.SET_PAGE_NUMBER_REQUEST, setSearchPageNumber),
  ]);
}
