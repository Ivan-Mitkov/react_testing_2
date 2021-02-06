import moxios from "moxios";
import { correctGuess, actionTypes } from "./index";
import { storeFactory } from "../test/testUtils";
import { getSecretWord } from "./index";

describe("correct guess", () => {
  test("should return an action with type CORRECT_GUESS", () => {
    const action = correctGuess();
    //toBe for primitive toEqual for objects
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});

describe("get secret word action ", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("adds response word to the state", () => {
    const secretWord = "party";
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });

    return store.dispatch(getSecretWord()).then(() => {
      const newState = store.getState();
      // console.log(JSON.stringify(newState));
      expect(newState.secretWord).toEqual(secretWord);
    });
  });
});
