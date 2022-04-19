const NAME = 'NAME';

const allActionName = (state='', action) => {
  switch(action.type) {
    case NAME:
      return (
        state, action.payload
      )
    default:
      return state
  }
}

export default allActionName;