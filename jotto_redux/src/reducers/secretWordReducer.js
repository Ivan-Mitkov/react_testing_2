import { actionTypes } from "../actions/index";
export default (state = null, action) => {
  switch (action.type) {
    case actionTypes.SET_SECRET_WORD:
      // secretWordreducer controls piece of state called secretWord
      //so return this piece of state with value action.payload
      return action.payload;
    default:
      return state;
  }
};
