import React from "react";
import strings from "./helpers/strings";
import languageContext from "./context/languageContext";
import guessedWordsContext from "./context/guessedWordsContext";

const GuessWord = () => {
  const value = React.useContext(languageContext);
  const [guessedWords] = guessedWordsContext.useGuessedWords();
  const renderInstructions = () => {
    if (guessedWords.length === 0) {
      return (
        <span data-test="guess-instructions">
          {strings.getStringByLanguage(value, "guessPrompt")}
        </span>
      );
    }
    let gwRows = guessedWords.map((word, i) => {
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
              <th>
                {strings.getStringByLanguage(
                  value,
                  "matchingLettersColumnHeader"
                )}
              </th>
            </tr>
          </thead>
          <tbody>{gwRows}</tbody>
        </table>
      </div>
    );
  };
  return <div data-test="c-guessword">{renderInstructions()}</div>;
};

export default GuessWord;
