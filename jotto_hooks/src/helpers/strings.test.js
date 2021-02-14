import stringsModule from "./strings";

const { getStringByLanguage } = stringsModule;

//control faked strings object for different languages
const strings = {
  en: { submit: "submit" },
  emoji: { submit: "🚀" },
  mermish: {},
};

describe("language string testing", () => {
  //mocking console.warn()
  const mockWarn = jest.fn();
  let originalWarn;

  beforeEach(() => {
    originalWarn = console.warn;
    //set console.warn to the mock function
    console.warn = mockWarn;
  });

  afterEach(() => {
    //restore console.warn
    console.warn = originalWarn;
  });

  test("returns correct submit string for english", () => {
    const string = getStringByLanguage("en", "submit", strings);
    expect(string).toBe("submit");
    expect(mockWarn).not.toHaveBeenCalled();
  });
  test("returns the correct submit string for emoji", () => {
    const string = getStringByLanguage("emoji", "submit", strings);
    expect(string).toBe("🚀");
    expect(mockWarn).not.toHaveBeenCalled();
  });
  test("returns english submit string when language does not exist", () => {
    const string = getStringByLanguage("notALanguage", "submit", strings);
    expect(string).toBe("submit");
    expect(mockWarn).toHaveBeenCalledWith(
      "Could not get string [submit] for [notALanguage]"
    );
  });
  test("returns english submit string when submit key does not exist for language", () => {
    const string = getStringByLanguage("mermish", "submit", strings);
    expect(string).toBe("submit");
    expect(mockWarn).toHaveBeenCalledWith(
      "Could not get string [submit] for [mermish]"
    );
  });
});
test("test console.warn", () => {
  console.warn("Warn");
});
