import React from "react";
import PropTypes from "prop-types";
const Input = ({ secretWord = "party" }) => {
  return <div className="container" data-test="comp-input"></div>;
};

export default Input;

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};
