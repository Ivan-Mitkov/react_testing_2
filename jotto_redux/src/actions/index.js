import axios from "axios";
import { getLetterMatchCount } from "../helpers";
export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
  GUESS_WORD: "GUESS_WORD",
  SET_SECRET_WORD: "SET_SECRET_WORD",
};
export const correctGuess = () => {
  return { type: actionTypes.CORRECT_GUESS };
};

export const guessword = (guessword) => (dispatch, getState) => {
  const secretWord = getState().secretWord;
  const letterMatchCount = getLetterMatchCount(guessword, secretWord);
  dispatch({
    type: actionTypes.GUESS_WORD,
    payload: { guessedWord: guessword, letterMatchCount },
  });
  if (guessword === secretWord) {
    dispatch({ type: actionTypes.CORRECT_GUESS });
  }
};

export const getSecretWord = () => {
  return async (dispatch) => {
    //server for random words, in test we are using moxios so it will never go to this address
    const response = await axios.get("http://localhost:3030");

    dispatch({ type: actionTypes.SET_SECRET_WORD, payload: response.data });
  };
};
