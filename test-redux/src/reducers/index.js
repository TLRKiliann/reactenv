import { combineReducers } from 'redux';
import counterReducer from './counter';
import loggerReducers from './isLogged';

const allReducers = combineReducers({
	counter: counterReducer,
	isLogged: loggerReducers
})

export default allReducers;