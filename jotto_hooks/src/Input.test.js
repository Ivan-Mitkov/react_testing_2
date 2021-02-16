import React from "react";
import { shallow, mount } from "enzyme";
import { findByTestAttribute, checkProps } from "./test/testUtils";
import languageContext from "./context/languageContext";
import Input from "./Input";

const defaultProps = { secretWord: "party" };

const setup = ({ language, secretWord }) => {
  language = language || "en";
  secretWord = secretWord || "party";
  return mount(
    <languageContext.Provider value={language}>
      <Input secretWord={secretWord} />
    </languageContext.Provider>
  );
};

test("Input should render without error", () => {
  const wrapper = setup({});
  const component = findByTestAttribute(wrapper, "comp-input");
  expect(component.length).toBe(1);
});

test("does not throw warning with expected props ", () => {
  const expectedProps = { secretWord: "party" };
  checkProps(Input, expectedProps);
});

describe("state controlled input field", () => {
  let mockCurrentGuess;
  let wrapper;
  beforeEach(() => {
    //use state return an array with this fn as a second function
    mockCurrentGuess = jest.fn();
    React.useState = jest.fn(() => ["", mockCurrentGuess]);
    wrapper = setup({});
  });
  test("state update with value from input box ", () => {
    const inputBox = findByTestAttribute(wrapper, "input-box");
    //simulate input box getting a value train
    //apply mock event to change event
    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockEvent);

    expect(mockCurrentGuess).toHaveBeenCalledWith("train");
  });
  test("clear input box on submit ", () => {
    const formBox = findByTestAttribute(wrapper, "submit-button");
    //simulate form box submit
    //apply mock event to change event
    const mockEvent = { preventDefault: () => {} };
    formBox.simulate("click", mockEvent);

    expect(mockCurrentGuess).toHaveBeenCalledWith("");
  });
});

describe("languagePicker", () => {
  let mockCurrentGuess;
  let wrapper;
  beforeEach(() => {
    //use state return an array with this fn as a second function
    mockCurrentGuess = jest.fn();
    React.useState = jest.fn(() => ["", mockCurrentGuess]);
    wrapper = setup({ language: "en" });
  });
  test("should corectly render the submit string in english", () => {
    const wrapper = setup({ language: "en" });
    const submitButton = findByTestAttribute(wrapper, "submit-button");
    expect(submitButton.text()).toBe("Submit");
  });
  test("should corectly render the submit string in emoji ", () => {
    const wrapper = setup({ language: "emoji" });
    const submitButton = findByTestAttribute(wrapper, "submit-button");
    expect(submitButton.text()).toBe("🚀");
  });
});
