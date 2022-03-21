export const increment = (deliv) => {
  return {
    type: 'INCREMENT',
    payload: deliv
  }
}

export const decrement = (buy) => {
  return {
    type: 'DECREMENT',
    payload: buy
  }
}

export const logged = (state) => {
  return {
    type: 'SIGN_IN',
    payload: state
  }
}
