import checkPropTypes from "check-prop-types";


export const findByTestAttribute = (wrapper, attr) => {
  return wrapper.find(`[data-test='${attr}']`);
};

export const checkProps=(component,propsToCheck)=>{
  const propError = checkPropTypes(
    component.propTypes,
    propsToCheck,
    "prop",
    component.name
  );
 
  return  expect(propError).toBeUndefined();
}