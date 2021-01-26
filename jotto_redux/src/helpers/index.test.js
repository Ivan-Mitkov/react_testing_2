import { getLetterMatchCount } from "./index";

describe("getLetterMatchCound", () => {
  const secretWord = "party";
  test("should return the correct count when there are no matching letter", () => {
    const letterMatchCount = getLetterMatchCount("bones", secretWord);
    expect(letterMatchCount).toBe(0);
  });
  test("should return the correct count when there are 3 matching letter", () => {
    const letterMatchCount = getLetterMatchCount("trains", secretWord);
    expect(letterMatchCount).toBe(3);
  });
  test("should return the correct count when there are duplicate letter", () => {
    const letterMatchCount = getLetterMatchCount("parka", secretWord);
    expect(letterMatchCount).toBe(3);
  });
});
