import Enzyme, { shallow } from "enzyme";
import App from "./App";

let wrapper = null;
const setUp = () => shallow(<App />);

beforeEach(() => {
  wrapper = setUp();
});
const findByTestAttribute = (wrapper, attr) =>
  wrapper.find(`[data-test='${attr}']`);

test("renders without errors", () => {
  const appComponent = findByTestAttribute(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test("should render a button", () => {
  const button = findByTestAttribute(wrapper, "increment-button");
  expect(button.length).toBe(1);
});

test("should render counter display", () => {
  const counter = findByTestAttribute(wrapper, "counter");
  expect(counter.length).toBe(1);
});

test("should start counter at 0 ", () => {
  //.text returs a string
  const startText = findByTestAttribute(wrapper, "count").text();
  expect(startText).toBe("0");
});

test("should increment counter when clicking on the button", () => {
  const button = findByTestAttribute(wrapper, "increment-button");
  button.simulate("click");
  const displayNumber = findByTestAttribute(wrapper, "count").text();
  expect(displayNumber).toBe("1");
});
