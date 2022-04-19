import allActionName from './allActionName';
import allActionPass from './allActionPass';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
	addName: allActionName, 
	addPass: allActionPass
})

export default allReducers;