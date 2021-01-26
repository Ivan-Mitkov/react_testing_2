import React from "react";
import PropTypes from "prop-types";
const Congrats = (props) => {
  return (
    <div data-test="c-congrat">
      {props.success ? (
        <span data-test="congrat-message">
          Congratulations! You guessed the word!
        </span>
      ) : null}
    </div>
  );
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
