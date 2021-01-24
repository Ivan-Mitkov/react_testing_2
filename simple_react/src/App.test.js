import Enzyme, { shallow } from "enzyme";
import App from "./App";

test("renders learn react link", () => {
  const wrapper = shallow(<App />);
  //DOM as string
  // console.log(wrapper.debug());
  const header = wrapper.find("h1");
  expect(header).toBeTruthy();
  console.log(wrapper.find("h1").debug());
  expect(header.length).toEqual(2);
});
