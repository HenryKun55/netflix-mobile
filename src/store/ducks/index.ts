import {combineReducers} from 'redux';
import auth from './auth';
import genre from './genre';
import movie from './movie';
import cast from './cast';
import search from './search';

export default combineReducers({
  auth,
  genre,
  movie,
  cast,
  search
});
