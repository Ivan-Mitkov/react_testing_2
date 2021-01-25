import React from "react";

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

export default Congrats;
