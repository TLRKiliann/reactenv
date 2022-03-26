const INCREMENT = 'INCREMENT';
const DECREMENT ='DECREMENT';
const SIGN_IN = 'SIGN_IN';

export const increment = (na) => {
	return {
		type: INCREMENT,
		payload: na
	}
}

export const decrement = (nb) => {
	return {
		type: DECREMENT,
		payload: nb
	}
}

export const logger = (state) => {
	return {
		type: SIGN_IN,
		payload: state
	}
}