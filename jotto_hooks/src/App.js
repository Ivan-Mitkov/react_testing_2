import React from "react";
import "./App.css";
import languageContext from "./context/languageContext";
import successContext from "./context/successContext";
import guessedWordsContext from "./context/guessedWordsContext";
import hookActions from "./actions/hookActions";
import Input from "./Input";
import LanguagePicker from "./LanguagePicker";
import Congrats from "./Congrats";
import GuessWords from "./GuessWord";

export const SET_SECRET_WORD = "SET_SECRET_WORD";
export const SET_LANGUAGE = "SET_LANGUAGE";

function reducer(state, action) {
  switch (action.type) {
    case SET_SECRET_WORD:
      return {
        ...state,
        secretWord: action.payload,
      };
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
}
const App = () => {
  const initialState = { secretWord: null, language: "en" };
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const setSecretWord = (secretWord) =>
    dispatch({ type: SET_SECRET_WORD, payload: secretWord });
  const setLanguage = (lg) => {
    dispatch({ type: SET_LANGUAGE, payload: lg });
  };
  React.useEffect(() => {
    //dispatch action
    hookActions.getSecretWord(setSecretWord);
  }, []);

  return state.secretWord ? (
    <div className="container" data-test="comp-app">
      <languageContext.Provider value={state.language}>
        <h1>Jotto</h1>
        <LanguagePicker setLanguage={setLanguage}></LanguagePicker>
        <guessedWordsContext.GuessedWordsContextProvider>
          <successContext.SuccessProvider>
            <Congrats />
            <Input secretWord={state.secretWord} />
          </successContext.SuccessProvider>
          <GuessWords />
        </guessedWordsContext.GuessedWordsContextProvider>
      </languageContext.Provider>
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
