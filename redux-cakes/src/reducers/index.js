import { combineReducers } from 'redux';
import counterReduccers from './counter';
import loggedReducers from './DisplayCakes';


const allReducers = combineReducers({
  counter: counterReduccers,
  displayCakes: loggedReducers
});

export default allReducers;