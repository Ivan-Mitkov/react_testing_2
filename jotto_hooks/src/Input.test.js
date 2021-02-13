import { shallow } from "enzyme";
import { findByTestAttribute, checkProps } from "./test/testUtils";
import Input from "./Input";

const defaultProps = { secretWord: "party" };

const setup = (props = {}) => {
  const setupProps = { ...props, ...defaultProps };
  return shallow(<Input {...setupProps} />);
};

test("Input should render without error", () => {
  const wrapper = setup();
  const component = findByTestAttribute(wrapper, "comp-input");
  expect(component.length).toBe(1);
});

test("does not throw warning with expected props ", () => {
  const expectedProps = { secretWord: "party" };
  checkProps(Input, expectedProps);
});
