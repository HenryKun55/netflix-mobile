import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware, Store} from 'redux';

import {AuthState} from '../store/ducks/auth/types';
import {GenreState} from '../store/ducks/genre/types';
import {MovieState} from '../store/ducks/movie/types';
import { CastState } from './ducks/cast/types';

import reducers from './ducks';
import rootSaga from './ducks/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  reducers,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export interface ApplicationState {
  auth: AuthState;
  genre: GenreState;
  movie: MovieState;
  cast: CastState;
}

export default store;
