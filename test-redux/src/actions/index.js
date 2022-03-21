const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const increment = (deliv) => {
  return {
    type: INCREMENT,
    payload: deliv
  }
}

export const decrement = (number) => {
  return {
    type: DECREMENT,
    payload: number
  }
}

export const logged = (state) => {
  return {
    type: 'SIGN_IN',
    payload: state
  }
}
