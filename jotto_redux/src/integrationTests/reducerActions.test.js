import { storeFactory } from "../test/testUtils";
import { guessword } from "../actions/index";

describe("guessword action dispatcher", () => {
  const secretWord = "party";
  const unsuccesfulGuessWord = "train";

  describe("no guess words", () => {
    let store;
    const initialState = { secretWord };
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test("should update state correctly for unsuccessful guess ", () => {
      //dispatch action to change the state
      store.dispatch(guessword(unsuccesfulGuessWord));
      //what state is expected
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [
          { guessedWord: unsuccesfulGuessWord, letterMatchCount: 3 },
        ],
      };
      //what is real state
      const newState = store.getState();
      expect(newState).toEqual(expectedState);
    });
    test("should update state correctly for successful guess ", () => {
      //dispatch action to change the state
      store.dispatch(guessword(secretWord));
      //what state is expected
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [{ guessedWord: secretWord, letterMatchCount: 5 }],
      };
      //what is real state
      const newState = store.getState();
      expect(newState).toEqual(expectedState);
    });
  });
  describe("some guess words", () => {
    const guessedWords = [{ guessedWord: "agile", letterMatchCount: 1 }];
    const initialState = { guessedWords, secretWord };
    let store;
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test("should update state correctly for unsuccessful guess ", () => {
      store.dispatch(guessword(unsuccesfulGuessWord));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: false,
        guessedWords: [
          ...guessedWords,
          { guessedWord: unsuccesfulGuessWord, letterMatchCount: 3 },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
    test("should update state correctly for successful guess ", () => {
      store.dispatch(guessword(secretWord));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: true,
        guessedWords: [
          ...guessedWords,
          { guessedWord: secretWord, letterMatchCount: 5 },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
  });
});
