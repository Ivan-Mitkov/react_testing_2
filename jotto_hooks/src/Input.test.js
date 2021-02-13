import React from "react";
import { shallow } from "enzyme";
import { findByTestAttribute, checkProps } from "./test/testUtils";
import Input from "./Input";

const defaultProps = { secretWord: "party" };

const setup = (props = {}) => {
  const setupProps = { ...props, ...defaultProps };
  return shallow(<Input {...setupProps} />);
};

test("Input should render without error", () => {
  const wrapper = setup();
  const component = findByTestAttribute(wrapper, "comp-input");
  expect(component.length).toBe(1);
});

test("does not throw warning with expected props ", () => {
  const expectedProps = { secretWord: "party" };
  checkProps(Input, expectedProps);
});

describe("state controlled input field", () => {
  test("state update with value from input box ", () => {
    //use state return an array with this fn as a second function
    const mockCurrentGuess = jest.fn();
    React.useState = jest.fn(() => ["", mockCurrentGuess]);
    const wrapper = setup();
    const inputBox = findByTestAttribute(wrapper, "input-box");
    //simulate input box getting a value train
    //apply mock event to change event
    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockEvent);

    expect(mockCurrentGuess).toHaveBeenCalledWith("train");
  });
});
