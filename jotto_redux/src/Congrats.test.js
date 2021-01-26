import  { shallow } from "enzyme";

import Congrats from "./Congrats";
import { findByTestAttribute, checkProps } from "./test/testUtils";

const defaultProps = { success: false };
const setUp = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

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

test("does not throw warning with expected props ", () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});
