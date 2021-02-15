import React from "react";
import PropTypes from "prop-types";
import languageContext from "./context/languageContext";
import strings from "./helpers/strings";
const Congrats = (props) => {
  const value = React.useContext(languageContext);
  const congrat = strings.getStringByLanguage(value, "congrats");
  return (
    <div data-test="c-congrat" className="alert alert-success">
      {props.success ? (
        <span data-test="congrat-message">{congrat}</span>
      ) : null}
    </div>
  );
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
