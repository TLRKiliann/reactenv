import { combineReducers } from 'redux';
import counterReduccers from './counter';
import loggedReducers from './isLogged';
//import countbuyReducers from './countBuy';


const allReducers = combineReducers({
	counter: counterReduccers,
	isLogged: loggedReducers,
	//countBuy: countbuyReducers
});

export default allReducers;