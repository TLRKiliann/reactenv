const DECREMENT = 'DECREMENT';

/*
const initialState = {
  number: 20,
};*/

const counterdecReducers = (state=20, action) => {
  switch (action.type) {
    case DECREMENT:
      return (
        state - action.payload
      )
    default:
      return state
  }
}

export default counterdecReducers;
