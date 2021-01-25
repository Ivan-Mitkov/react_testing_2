export const findByTestAttribute = (wrapper, attr) => {
  return wrapper.find(`[data-test='${attr}']`);
};
