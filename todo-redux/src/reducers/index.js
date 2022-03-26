import counterReducers from './counter';
import loggerReducers from './isLogged';
import { combineReducers } from 'redux';


const allReducers = combineReducers({
	counter: counterReducers,
	isLogged: loggerReducers
});

export default allReducers;