import React from "react";
import { mount } from "enzyme";
import { findByTestAttribute } from "../test/testUtils";
import successContext from "../context/successContext";
import guessedWordsContext from "../context/guessedWordsContext";
import Input from "../Input";
import GuessWord from "../GuessWord";

const setup = (guessedWordsStrings = [], secretWord = "party") => {
  const wrapper = mount(
    <guessedWordsContext.GuessedWordsContextProvider>
      <successContext.SuccessProvider>
        <Input secretWord={secretWord} />
        <GuessWord />
      </successContext.SuccessProvider>
    </guessedWordsContext.GuessedWordsContextProvider>
  );

  const inputBox = findByTestAttribute(wrapper, "input-box");
  const submitButton = findByTestAttribute(wrapper, "submit-button");
  //prepopulate guessedwords
  guessedWordsStrings.map((word) => {
    const mockEvent = { target: { value: word } };
    inputBox.simulate("change", mockEvent);
    submitButton.simulate("click");
  });
  return { wrapper, inputBox, submitButton };
};

describe("test word guesses", () => {
  describe("Non empty guessed words", () => {
    let wrapper, inputBox, submitButton;
    beforeEach(() => {
      const result = setup(["agile"], "party");
      wrapper = result.wrapper;
      inputBox = result.inputBox;
      submitButton = result.submitButton;
    });
    afterEach(() => {
      wrapper.unmount();
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

      test("GuessedWords table contains correct number of rows ", () => {
        const guessedWordsTableRows = findByTestAttribute(wrapper, "guess-w");
        //started with agile than added party
        expect(guessedWordsTableRows.length).toBe(2);
      });
    });
    describe("Guess is incorrect", () => {
      beforeEach(() => {
        const mockEvent = { target: { value: "train" } };
        inputBox.simulate("change", mockEvent);
        submitButton.simulate("click");
      });
      test("input box remains  ", () => {
        expect(inputBox.exists()).toBe(true);
      });
      test("GuessedWords table contains correct number of rows ", () => {
        const guessedWordsTableRows = findByTestAttribute(wrapper, "guess-w");
        //started with agile than added party
        expect(guessedWordsTableRows.length).toBe(2);
      });
    });
  });
  describe("Empty guessed words", () => {
    let wrapper, inputBox, submitButton;
    beforeEach(() => {
      const result = setup([], "party");
      wrapper = result.wrapper;
      inputBox = result.inputBox;
      submitButton = result.submitButton;
    });
    afterEach(() => {
      wrapper.unmount();
    });

    test("GuessedWords table contains 0 number of rows ", () => {
      const mockEvent = { target: { value: "train" } };
      inputBox.simulate("change", mockEvent);
      submitButton.simulate("click");
      const guessedWordsTableRows = findByTestAttribute(wrapper, "guess-w");
      //started with agile than added party
      expect(guessedWordsTableRows.length).toBe(1);
    });
  });
});
