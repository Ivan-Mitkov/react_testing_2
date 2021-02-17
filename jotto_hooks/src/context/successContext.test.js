import React from "react";
import { shallow, mount } from "enzyme";
import successContext from "./successContext";

//functional component that calls useSuccess
const FuncComponent = () => {
  successContext.useSuccess();
  return <div></div>;
};

test("should throw an error when outside of Provider", () => {
  expect(() => {
    shallow(<FuncComponent />);
  }).toThrow("useSuccess must be used within a provider");
});
test("should not throw an error when outside of Provider", () => {
  expect(() => {
    mount(
      //value is embedded don't need to provide a value
      <successContext.SuccessProvider>
        <FuncComponent />
      </successContext.SuccessProvider>
    );
  }).not.toThrow();
});
