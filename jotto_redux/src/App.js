import React from "react";
import { connect } from "react-redux";
import "./App.css";
import Congrats from "./Congrats";
import GuessedWord from "./GuessWord";
import Input from "./Input";
import { getSecretWord } from "./actions/index";
export class UnconnectedApp extends React.Component {
  componentDidMount() {
    this.props.getSecretWord();
  }

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
export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
