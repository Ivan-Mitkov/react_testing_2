import { getLetterMatchCount } from "../helpers";
export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
  GUESS_WORD: "GUESS_WORD",
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
