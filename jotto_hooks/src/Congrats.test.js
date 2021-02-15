import { mount } from "enzyme";

import Congrats from "./Congrats";
import { findByTestAttribute, checkProps } from "./test/testUtils";
import languageContext from "./context/languageContext";
const defaultProps = { success: false };
//test context by wrap component with the Provided
const setUp = ({ success, language }) => {
  language = language || "en";
  //if succes is true return true, if is false retunr false if it's undefeine return false
  success = success || false;
  return mount(
    <languageContext.Provider value={language}>
      <Congrats success={success} />
    </languageContext.Provider>
  );
};

describe("languagePicker", () => {
  test("should corectly render the congrat string in english", () => {
    const wrapper = setUp({ success: true });
    expect(wrapper.text()).toBe("Congratulations! You guessed the word!");
  });
  test("should corectly render the congrat string in emoji ", () => {
    const wrapper = setUp({ success: true, language: "emoji" });
    expect(wrapper.text()).toBe("🎯🎉");
  });
});

test("should renders without errors", () => {
  const wrapper = setUp({ success: false });
  const component = findByTestAttribute(wrapper, "c-congrat");
  expect(component.length).toBe(1);
});

test("should render no text when success prop is false", () => {
  const wrapper = setUp({ success: false });
  const component = findByTestAttribute(wrapper, "c-congrat");
  // console.log(component.debug());
  expect(component.text()).toBe("");
});

test("render no empty congrat message when success prop is true", () => {
  const wrapper = setUp({ success: true });
  const component = findByTestAttribute(wrapper, "c-congrat");
  expect(component.text().length).not.toBe(0);
});

test("does not throw warning with expected props ", () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});
