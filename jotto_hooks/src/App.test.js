import React from "react";
import { mount } from "enzyme";
import { findByTestAttribute } from "./test/testUtils";
import App from "./App";
import hookActions from "./actions/hookActions";

const mockGetSecretWord = jest.fn();
const setup = (secretWord = "party") => {
  //clear before every test
  mockGetSecretWord.mockClear();
  hookActions.getSecretWord = mockGetSecretWord;

  //mock useReducer state is secretWord, dispatch is mocked func
  const mockUseReducer = jest.fn().mockReturnValue([{ secretWord }, jest.fn()]);
  React.useReducer = mockUseReducer;
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
  test("secretWord does not update on app aupdate", () => {
    const wrapper = setup();
    //clear again because we expect toHaveBeenCalled after mount so need to clear again
    mockGetSecretWord.mockClear();

    //wrapper.update() does not trigger update so trigger update with props
    wrapper.setProps();
    expect(mockGetSecretWord).not.toHaveBeenCalled();
  });
});

describe("secret word is not null", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup("party");
  });
  test("should render app when secret word is not null", () => {
    const appComponent = findByTestAttribute(wrapper, "comp-app");
    expect(appComponent.exists()).toBe(true);
  });

  test("not render spinner when secret word is not null", () => {
    const spinnerComponent = findByTestAttribute(wrapper, "spinner-comp");
    expect(spinnerComponent.exists()).toBe(false);
  });
});
describe("secret word is  null", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup(null);
  });
  test("should not render app when secret word is null", () => {
    const appComponent = findByTestAttribute(wrapper, "comp-app");
    expect(appComponent.exists()).toBe(false);
  });

  test("should render spinner when secret word is null", () => {
    const spinnerComponent = findByTestAttribute(wrapper, "spinner-comp");
    expect(spinnerComponent.exists()).toBe(true);
  });
});
