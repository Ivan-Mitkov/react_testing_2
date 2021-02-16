import React from "react";
import PropTypes, { string } from "prop-types";
import strings from "./helpers/strings";
import languageContext from "./context/languageContext";

const GuessWord = (props) => {
  const value = React.useContext(languageContext);

  const renderInstructions = () => {
    if (props.guessedWords.length === 0) {
      return (
        <span data-test="guess-instructions">
          {strings.getStringByLanguage(value, "guessPrompt")}
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
        <h3>{strings.getStringByLanguage(value, "guessedWords")}</h3>
        <table className="table table-sm table-hover table-success table-striped">
          <thead className="thead-dark">
            <tr>
              <th>{strings.getStringByLanguage(value, "guessColumnHeader")}</th>
              <th>{strings.getStringByLanguage(value, "matchingLettersColumnHeader")}</th>
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
