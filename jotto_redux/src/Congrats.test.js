import Enzyme, { shallow } from "enzyme";
import App from "./App";
import Congrats from "./Congrats";
import { findByTestAttribute } from "./test/testUtils";

const setUp = (props = {}) => shallow(<Congrats {...props} />);

test("should renders without errors", () => {
  const wrapper = setUp();
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
