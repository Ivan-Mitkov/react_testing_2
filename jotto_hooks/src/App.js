import React from "react";
import "./App.css";

import hookActions from "./actions/hookActions";
import Input from "./Input";
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

  return state.secretWord ? (
    <div className="container" data-test="comp-app">
      <Input secretWord={state.secretWord} />
    </div>
  ) : (
    <div className="container" data-test="spinner-comp">
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default App;
