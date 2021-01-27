import { createStore } from "redux";
import checkPropTypes from "check-prop-types";
import RootReducer from "../reducers";

export const findByTestAttribute = (wrapper, attr) => {
  return wrapper.find(`[data-test='${attr}']`);
};

export const checkProps = (component, propsToCheck) => {
  const propError = checkPropTypes(
    component.propTypes,
    propsToCheck,
    "prop",
    component.name
  );

  return expect(propError).toBeUndefined();
};

//Create store for use in connected components
export const storeFactory = (initialState) => {
  return createStore(RootReducer, initialState);
};
