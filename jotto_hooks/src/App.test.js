import { shallow } from "enzyme";
import { findByTestAttribute } from "./test/testUtils";
import App from "./App";

const setup = () => {
  return shallow(<App />);
};

test("App should render without error", () => {
  const wrapper = setup();
  const component = findByTestAttribute(wrapper, "comp-app");
  expect(component.length).toBe(1);
});
