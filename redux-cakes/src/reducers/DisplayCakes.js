const DISPLAYCAKES = "DISPLAYCAKES";

const loggedReducers = (state=false, action) => {
  switch (action.type) {
    case DISPLAYCAKES:
      return !state;
    default:
      return state;
  }
}

export default loggedReducers;