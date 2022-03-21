import { combineReducers } from 'redux';
import counterReduccers from './counter';
//import counteroneReduccers from './counterone';
//import counterdecReduccers from './counterdec';
import loggedReducers from './isLogged';


const allReducers = combineReducers({
  counter: counterReduccers,
  //ounterone: counteroneReduccers,
  //counterdec: counterdecReduccers,
  isLogged: loggedReducers
});

export default allReducers;