import {Reducer} from 'redux';
import {MovieState, MovieTypes} from './types';
import {IMovie} from 'src/types/IMovie';

const INITIAL_STATE: MovieState = {
  pageNumber: 1,
  data: [],
  loading: false,
  error: false,
};

/**
 * Reducer
 */
const movie: Reducer<MovieState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MovieTypes.SET_MOVIES_REQUEST:
      return {...state, loading: true};
    case MovieTypes.SET_MOVIES_SUCCESS:
      return {...state, loading: false, data: action.payload};
    case MovieTypes.SET_MOVIE_REQUEST:
      return {...state, loading: true};
    case MovieTypes.SET_MOVIE_SUCCESS:
      return {...state, loading: false, selected: action.payload};
    case MovieTypes.LIKE_MOVIE_REQUEST:
      return {...state, loading: true};
    case MovieTypes.LIKE_MOVIE_SUCCESS:
      if (state.data.find(_movie => _movie.id === action.payload.movieId)) {
        const m = state.data.findIndex(
          (_m: IMovie) => _m.id === action.payload.movieId,
        );
        const update: IMovie = {
          ...state.data[m],
          users: [...action.payload.users],
        };
        return {
          ...state,
          data: [...state.data.slice(0, m), update, ...state.data.slice(m + 1)],
        };
      }
      return {...state};
    case MovieTypes.CLEAR_MOVIES:
      return {...state, loading: false, data: []};
    default:
      return state;
  }
};

export default movie;
