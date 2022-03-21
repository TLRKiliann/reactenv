const INCREMENTONE = 'INCREMENTONE';

/*
const initialState = {
  deliv: 100,
  delivone: 50
};*/

const counteroneReducers = (state=50, action) => {
  switch (action.type) {
    case INCREMENTONE:
      return (
        state + action.payload
      )
    default:
      return state
  }
}

export default counteroneReducers;
