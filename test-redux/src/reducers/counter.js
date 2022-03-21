const counterReducers = (state=20, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return (
        state + action.payload
      )
    case 'DECREMENT':
      return (
        state - action.payload
      )
    default:
      return state
  }
}

export default counterReducers;