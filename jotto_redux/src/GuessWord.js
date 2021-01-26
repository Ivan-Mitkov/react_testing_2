import React from "react";
import PropTypes from "prop-types";

const GuessWord = (props) => {
  const renderInstructions = () => {
    if (props.guessedWords.length === 0) {
      return (
        <span data-test="guess-instructions">
          Try to guess the secret word!
        </span>
      );
    }
    let gwRows = props.guessedWords.map((word, i) => {
      return (
        <tr key={i} data-test="guess-w">
          <td>{word.guessedWord}</td>
          <td>{word.letterMatchCount}</td>
        </tr>
      );
    });
    return (
      <div data-test="guessed-words">
        <h3>Guessed Words</h3>
        <table className="table table-sm table-hover table-success table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>{gwRows}</tbody>
        </table>
      </div>
    );
  };
  return <div data-test="c-guessword">{renderInstructions()}</div>;
};

GuessWord.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessWord;
