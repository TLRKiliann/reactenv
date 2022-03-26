const SIGN_IN = 'SIGN_IN';

const loggerReducers = (state=false, action) => {
	switch(action.type) {
		case SIGN_IN:
			return !state
		default:
			return state
	}
}

export default loggerReducers;