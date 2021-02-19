import React from "react";
import { mount } from "enzyme";
import { findByTestAttribute } from "../test/testUtils";
import successContext from "../context/successContext";
import Input from "../Input";

const setup = (secretWord = "party") => {
  const wrapper = mount(
    <successContext.SuccessProvider>
      <Input secretWord={secretWord} />
    </successContext.SuccessProvider>
  );

  const inputBox = findByTestAttribute(wrapper, "input-box");
  const submitButton = findByTestAttribute(wrapper, "submit-button");
  return { wrapper, inputBox, submitButton };
};

describe("test word guesses", () => {
  let wrapper, inputBox, submitButton;
  beforeEach(() => {
    const result = setup();
    wrapper = result.wrapper;
    inputBox = result.inputBox;
    submitButton = result.submitButton;
  });

  describe("Guess is correct", () => {
    beforeEach(() => {
      const mockEvent = { target: { value: "party" } };
      inputBox.simulate("change", mockEvent);
      submitButton.simulate("click");
    });
    test("input component has no children ", () => {
      const inputComponent = findByTestAttribute(wrapper, "comp-input");
      expect(inputComponent.children().length).toBe(0);
    });
  });
  describe("Guess is incorrect", () => {
    beforeEach(() => {
      const mockEvent = { target: { value: "train" } };
      inputBox.simulate("change", mockEvent);
      submitButton.simulate("click");
    });
    test("input box remains  ", () => {
      expect(inputBox.exists()).toBe(true)
    });
  });
});
