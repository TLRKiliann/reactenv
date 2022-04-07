import { combineReducers } from 'redux';
import counterReduccers from './counter';
import loggedReducers from './isLogged';


const allReducers = combineReducers({
  counter: counterReduccers,
  isLogged: loggedReducers
});

export default allReducers;