import { mount } from "enzyme";

import Congrats from "./Congrats";
import { findByTestAttribute } from "./test/testUtils";
import languageContext from "./context/languageContext";
import successContext from "./context/successContext";
//test context by wrap component with the Provided
const setUp = ({ success, language }) => {
  language = language || "en";
  //if succes is true return true, if is false retunr false if it's undefeine return false
  success = success || false;
  const setSuccess = jest.fn();
  return mount(
    <languageContext.Provider value={language}>
      {/**pass value as prop so it overrides the default value this way we can change success by args in setup*/}
      <successContext.SuccessProvider value={[success, setSuccess]}>
        <Congrats />
      </successContext.SuccessProvider>
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

test("should render no text when success is false", () => {
  const wrapper = setUp({ success: false });
  const component = findByTestAttribute(wrapper, "c-congrat");
  // console.log(component.debug());
  expect(component.text()).toBe("");
});

test("render no empty congrat message when success is true", () => {
  const wrapper = setUp({ success: true });
  const component = findByTestAttribute(wrapper, "c-congrat");
  expect(component.text().length).not.toBe(0);
});
