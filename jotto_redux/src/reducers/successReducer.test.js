import successReducer from "./successReducer";
import { actionTypes } from "../actions/index";

test("should return default initial state of false when no action is passed ", () => {
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
});

test("should return state of true if SUCCESS_GUESS is passed ", () => {
  const newState = successReducer(undefined, {
    type: actionTypes.CORRECT_GUESS,
  });
  expect(newState).toBe(true);
});
