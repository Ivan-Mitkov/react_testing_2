import { correctGuess, actionTypes } from "./index";

describe("correct guess", () => {
  test("should return an action with type CORRECT_GUESS", () => {
    const action = correctGuess();
    //toBe for primitive toEqual for objects
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});
