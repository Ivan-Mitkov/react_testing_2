import React from "react";
import "./App.css";
import Congrats from "./Congrats";
import GuessedWord from "./GuessWord";
import Input from "./Input";
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Congrats success={false} />
        <GuessedWord
          guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
        />
        <Input />
      </div>
    );
  }
}

export default App;
