import React from "react";
import languageContext from "./context/languageContext";
import successContext from "./context/successContext";
import strings from "./helpers/strings";
const Congrats = () => {
  const [success, setSuccess] = successContext.useSuccess();
  const value = React.useContext(languageContext);
  const congrat = strings.getStringByLanguage(value, "congrats");

  return (
    <div data-test="c-congrat" className="alert alert-success">
      {success ? <span data-test="congrat-message">{congrat}</span> : null}
    </div>
  );
};

export default Congrats;
