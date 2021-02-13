import React from "react";
import PropTypes from "prop-types";
const Input = ({ secretWord = "party" }) => {
  const [currentGuess, setCurrentGuess] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentGuess("");
  };
  return (
    <div className="container" data-test="comp-input">
      <form className="form-inline" data-test="form-box">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder="enter guess"
          onChange={(e) => setCurrentGuess(e.target.value)}
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Input;

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};
