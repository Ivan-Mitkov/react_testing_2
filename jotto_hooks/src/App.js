import React from "react";
import "./App.css";
import Congrats from "./Congrats";
import GuessedWord from "./GuessWord";
import hookActions from "./actions/hookActions";

export const SET_SECRET_WORD = "SET_SECRET_WORD";
function reducer(state, action) {
  switch (action.type) {
    case SET_SECRET_WORD:
      return {
        ...state,
        secretWord: action.payload,
      };
    default:
      return state;
  }
}
const App = () => {
  const initialState = { secretWord: null };
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const setSecretWord = (secretWord) =>
    dispatch({ type: SET_SECRET_WORD, payload: secretWord });

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord);
  }, []);
  return (
    <div className="container" data-test="comp-app">
      <Congrats success={true} />
      <GuessedWord
        guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
      />
    </div>
  );
};

export default App;
