import {combineReducers} from 'redux';
import auth from './auth';
import genre from './genre';
import movie from './movie';

export default combineReducers({
  auth,
  genre,
  movie,
});
