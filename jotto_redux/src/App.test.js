import React from "react";
import { shallow } from "enzyme";
import { storeFactory } from "./test/testUtils";
import App, { UnconnectedApp } from "./App";
import { getLetterMatchCount } from "./helpers";

const setUp = (state = {}) => {
  const store = storeFactory(state);
  const wraper = shallow(<App store={store} />)
    .dive()
    .dive();
  return wraper;
};

describe("redux properties", () => {
  test("should have access to success state ", () => {
    const success = true;
    const wrapper = setUp({ success });
    //create react component instance get props an than success prop
    const successProps = wrapper.instance().props.success;
    expect(successProps).toBe(success);
  });

  test("should have access to secret word", () => {
    const secretWord = "party";
    const wrapper = setUp({ secretWord });
    //create react component instance get props an than success prop
    const secretWordProps = wrapper.instance().props.secretWord;
    expect(secretWordProps).toBe(secretWord);
  });
  test("should have access to guessedWord state", () => {
    const guessedWords = [{ guessedWord: "train", letterCountMatch: 3 }];
    const wrapper = setUp({ guessedWords });
    //create react component instance get props an than success prop
    const guessedWordsProps = wrapper.instance().props.guessedWords;
    expect(guessedWordsProps).toBe(guessedWords);
  });
  test("guessWord action creator is a function prop ", () => {
    const wrapper = setUp();
    const guessWordProps = wrapper.instance().props.getSecretWord;
    expect(guessWordProps).toBeInstanceOf(Function);
  });
});

test("getSecretWord action runs on App mount ", () => {
  const getSecretWordMock = jest.fn();
  //set up App component with getSecretWord Mock as a prop

  const wrapper = shallow(
    <UnconnectedApp
      getSecretWord={getSecretWordMock}
      success={true}
      guessedWords={[{ letterMatchCount: 1, guessedWord: "party" }]}
    />
  );

  expect(wrapper.instance().props.guessedWords).toBeInstanceOf(Array);
  expect(wrapper.instance().props.guessedWords[0].letterMatchCount).toBe(1);
  //run lifecycle method
  wrapper.instance().componentDidMount();

  //check if mock run
  const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
  expect(getSecretWordCallCount).toBe(1);
});
