import { mount } from "enzyme";
import { findByTestAttribute } from "./test/testUtils";
import App from "./App";
import hookActions, { getSecretWord } from "./actions/hookActions";

const mockGetSecretWord = jest.fn();
const setup = () => {
  //clear before every test
  mockGetSecretWord.mockClear();
  hookActions.getSecretWord = mockGetSecretWord;
  return mount(<App />);
};

test("App should render without error", () => {
  const wrapper = setup();
  const component = findByTestAttribute(wrapper, "comp-app");
  expect(component.length).toBe(1);
});

describe("getSecretWord calls", () => {
  test("getSecretWord gets called on app mount ", () => {
    setup();
    expect(mockGetSecretWord).toHaveBeenCalled();
  });
});
