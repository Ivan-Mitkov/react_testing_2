import { shallow } from "enzyme";
import React from "react";
import GuessWord from "./GuessWord";
import { findByTestAttribute, checkProps } from "./test/testUtils";

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
};
const setUp = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessWord {...setupProps} />);
};
test("does not throw warning with expected props ", () => {
  checkProps(GuessWord, defaultProps);
});

describe("if there are no words guessed", () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = setUp({ guessedWords: [] });
  });
  test("should render without error ", () => {
    const component = findByTestAttribute(wrapper, "c-guessword");
    expect(component.length).toBe(1);
  });

  test("should render instructions to guess a word", () => {
    const instruction = findByTestAttribute(wrapper, "guess-instructions");
    expect(instruction.length).not.toBe(0);
  });
});
describe("if there are words guessed", () => {
  let wrapper = null;
  const guessedWords = [
    { guessedWord: "train", letterMatchCount: 3 },
    { guessedWord: "agile", letterMatchCount: 1 },
    { guessedWord: "party", letterMatchCount: 5 },
  ];
  beforeEach(() => {
    wrapper = setUp({ guessedWords });
  });
  test("should render without error ", () => {
    const component = findByTestAttribute(wrapper, "c-guessword");
    expect(component.length).toBe(1);
  });
  test("should render guessword section", () => {
    const guessWordNode = findByTestAttribute(wrapper, "guessed-words");
    expect(guessWordNode.length).toBe(1);
  });
  test("should display the correct number of guess words", () => {
    const guessWordNodes = findByTestAttribute(wrapper, "guess-w");
    expect(guessWordNodes.length).toBe(guessedWords.length);
  });
});

describe("languagePicker", () => {
  test("should correctly render guess instructions string in english by default", () => {
    const wrapper = setUp({ guessedWords: [] });
    const instructions = findByTestAttribute(wrapper, "guess-instructions");
    expect(instructions.text()).toBe("Try to guess the secret word!");
  });
  test("should correctly render guess instructions string in emoji", () => {
    //https://jestjs.io/docs/en/mock-function-api#mockfnmockreturnvaluevalue
    const mockUseContext = jest.fn().mockReturnValue("emoji");
    React.useContext = mockUseContext;
    const wrapper = setUp({ guessedWords: [] });
    const guessInstructions = findByTestAttribute(
      wrapper,
      "guess-instructions"
    );
    expect(guessInstructions.text()).toBe("🤔🤫🔤");
  });
});
