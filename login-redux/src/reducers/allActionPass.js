const PASS = 'PASS';

const allActionPass = (state='', action) => {
  switch(action.type) {
    case PASS:
      return(
        state, action.payload
      )
    default:
      return state
  }
}

export default allActionPass;