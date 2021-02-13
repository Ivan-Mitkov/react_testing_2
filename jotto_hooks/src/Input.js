import React from "react";
import PropTypes from "prop-types";
const Input = ({ secretWord = "party" }) => {
  const [currentGuess, setCurrentGuess] = React.useState("");
  
  return (
    <div className="container" data-test="comp-input">
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder="enter guess"
        />
        <button data-test="submit-button" className="btn btn-primary mb-2">
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
