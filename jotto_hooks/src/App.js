import React from "react";
import "./App.css";
import Congrats from "./Congrats";
import GuessedWord from "./GuessWord";
const App = () => {
  return (
    <div className="container" data-test='comp-app'>
      <Congrats success={true} />
      <GuessedWord
        guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
      />
    </div>
  );
};

export default App;
