import React from "react";
import { connect } from "react-redux";
import "./App.css";
import Congrats from "./Congrats";
import GuessedWord from "./GuessWord";
import Input from "./Input";
import { guessword } from "./actions/index";
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Congrats success={this.props.success} />
        <GuessedWord guessedWords={this.props.guessedWords} />
        <Input />
      </div>
    );
  }
}

const mapStateToProps = ({ success, guessedWords, secretWord }, ownProps) => {
  return {
    success,
    guessedWords,
    secretWord,
  };
};
export default connect(mapStateToProps, { guessword })(App);
