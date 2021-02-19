import React from "react";
import PropTypes from "prop-types";
import languageContext from "./context/languageContext";
import successContext from "./context/successContext";
import strings from "./helpers/strings";

const Input = ({ secretWord = "party" }) => {
  const [currentGuess, setCurrentGuess] = React.useState("");
  const value = React.useContext(languageContext);
  const [success, setSuccess] = successContext.useSuccess();

  const submit = strings.getStringByLanguage(value, "submit");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentGuess === secretWord) {
      setSuccess(true);
    }
    setCurrentGuess("");
  };

  if (success) {
    return null;
  }
  return (
    <div className="container" data-test="comp-input">
      <form className="form-inline" data-test="form-box">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder={strings.getStringByLanguage(
            value,
            "guessInputPlaceholder"
          )}
          onChange={(e) => setCurrentGuess(e.target.value)}
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          onClick={handleSubmit}
        >
          {submit}
        </button>
      </form>
    </div>
  );
};

export default Input;

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};
