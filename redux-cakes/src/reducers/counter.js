const INCREMENT = 'INCREMENT';
const INCREMENTONE = 'INCREMENTONE';
const DECREMENT = 'DECREMENT';


/*const initialState = {
   deliv: 100,
   delivone: 50,
   number: 20
};*/

const counterReducers = (state=0, action) => {
  switch (action.type) {
    case INCREMENT:
      return (
        state + action.payload
      )
    case INCREMENTONE:
      return (
        state + action.payload
      )
    case DECREMENT:
      return (
        state - action.payload
      )
    default:
      return state;
  }
}

export default counterReducers;
