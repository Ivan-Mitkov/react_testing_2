import React from "react";

const successContext = React.createContext();

function useSuccess() {
  const context = React.useContext(successContext);
  if (!context) {
    throw new Error("useSuccess must be used within a provider");
  }

  return context;
}

//https://kentcdodds.com/blog/application-state-management-with-react
function SuccessProvider(props) {
  const [success, setSuccess] = React.useState(false);
  const value = React.useMemo(() => [success, setSuccess], [success]);
  return (
    <successContext.Provider value={value} {...props}></successContext.Provider>
  );
}

export default {
  useSuccess,
  SuccessProvider,
};
