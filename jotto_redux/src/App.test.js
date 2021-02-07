import React from "react";
import { shallow } from "enzyme";
import { storeFactory } from "./test/testUtils";
import App from "./App";

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
    const guessWordProps = wrapper.instance().props.guessword;
    expect(guessWordProps).toBeInstanceOf(Function);
  });
});
