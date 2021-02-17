import React from "react";

const guessedWordsContext = React.createContext();

function useGuessedWords() {
  const context = React.useContext(guessedWordsContext);
  if (!context) {
    throw new Error("useSuccess must be used within a provider");
  }

  return context;
}

//https://kentcdodds.com/blog/application-state-management-with-react
function GuessedWordsContextProvider(props) {
  const [guessedWords, setGuessedWords] = React.useState([]);
  const value = React.useMemo(() => [guessedWords, setGuessedWords], [
    guessedWords,
  ]);
  return (
    <guessedWordsContext.Provider
      value={value}
      {...props}
    ></guessedWordsContext.Provider>
  );
}

export default {
  useGuessedWords,
  GuessedWordsContextProvider,
};
