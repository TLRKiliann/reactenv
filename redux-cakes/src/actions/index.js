const INCREMENT = 'INCREMENT';
const INCREMENTONE = 'INCREMENTONE';
const DECREMENT = 'DECREMENT';
const DISPLAYCAKES = "DISPLAYCAKES";

export const increment = (deliv) => {
  return {
    type: INCREMENT,
    payload: deliv
  }
}

export const incrementone = (delivone) => {
  return {
    type: INCREMENTONE,
    payload: delivone
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
    type: DISPLAYCAKES,
    payload: state
  }
}
