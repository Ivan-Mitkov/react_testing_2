import React from "react";
import "./App.css";
import Congrats from "./Congrats";
import GuessedWord from "./GuessWord";
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Congrats success={true} />
        <GuessedWord
          guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
        />
      </div>
    );
  }
}

export default App;
