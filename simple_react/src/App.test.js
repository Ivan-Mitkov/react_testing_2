import Enzyme, { shallow } from "enzyme";
import App from "./App";

test("renders without errors", () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find('[data-test="component-app"]');
  expect(appComponent.length).toBe(1);
});

test("should render a button", () => {});

test("should render counter display", () => {});

test("should start counter at 0 ", () => {});

test("should increment counter when clicking on the button", () => {});
