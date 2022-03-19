export const increment = (na) => {
  return {
    type: 'INCREMENT',
    payload: na
  };
};

export const decrement = (ns) => {
  return {
    type: 'DECREMENT',
    payload: ns
  };
};

export const logger = (state) => {
  return {
    type: 'SIGN_IN',
    payload: state
  }
}