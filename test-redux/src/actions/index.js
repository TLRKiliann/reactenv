export const increment = (na) => {
	return {
		type: 'INCREMENT',
		payload: na
	}
}

export const decrement = (nb) => {
	return {
		type: 'DECREMENT',
		payload: nb
	}
}

export const logger = (state) => {
	return {
		type: 'SIGN_IN',
		payload: state
	}
}