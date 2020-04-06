import {Reducer} from 'redux';
import update from 'react-addons-update';
import {MovieState, MovieTypes} from './types';
import { IUser } from '../../../types/IUser';

const INITIAL_STATE: MovieState = {
  pageNumber: 1,
  data: [],
  modal: false,
  selectedMovies: [],
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
      return {
        ...state,
        data: [...state.data, ...action.payload],
        loading: false,
      };
    case MovieTypes.SET_MOVIE_REQUEST:
      return {...state, loading: true};
    case MovieTypes.SET_MOVIE_SUCCESS:
      return {...state, loading: false, selectedMovies: [...state.selectedMovies, action.payload ]};
    case MovieTypes.REMOVE_MOVIE_SUCCESS:
      return {...state, selectedMovies: state.selectedMovies.filter( (_,i) => i !== state.selectedMovies.length - 1) };
    case MovieTypes.LIKE_MOVIE_REQUEST:
      return {...state, loading: true};
    case MovieTypes.LIKE_MOVIE_SUCCESS:
      return update (state, { selectedMovies: { [state.selectedMovies.length - 1]: { users: { $set: action.payload.users } } }, loading: { $set: false } })
    case MovieTypes.CLEAR_MOVIES:
      return {...state, loading: false, data: []};
    case MovieTypes.SET_PAGE_NUMBER_REQUEST:
      return {...state, loading: true};
    case MovieTypes.SET_PAGE_NUMBER_SUCCESS:
      return {...state, loading: false, pageNumber: action.payload};
    case MovieTypes.RATING_MOVIE_SUCCESS:
      return update (state, { selectedMovies: { [state.selectedMovies.length - 1]: { ratings: { $set: action.payload.ratings } } }, loading: { $set: false } })
    case MovieTypes.SET_RATING_REQUEST:
      return {...state, loading: true};
    case MovieTypes.SET_RATING_SUCCESS:
      console.log(action.payload)
      return update (state, { selectedMovies: { [state.selectedMovies.length - 1]: { ratings: { $push: [action.payload] } } }, loading: { $set: false } })
    case MovieTypes.CANCEL_LOADING:
      return {...state, loading: false};
    case MovieTypes.CLOSE_MODAL:
      return {...state, modal: false};
    case MovieTypes.OPEN_MODAL:
      return {...state, modal: true};
    default:
      return state;
  }
};

export default movie;
