import React from "react";
import { shallow } from "enzyme";
import { findByTestAttribute, storeFactory } from "./test/testUtils";
import Input from "./Input";
//connect the redux store in setup
const setUp = (initState = {}) => {
  //create a store replacing redux store in Provider
  const store = storeFactory(initState);
  // const wraper = shallow(<Input store={store} />);
  // <ContextProvider value={{...}}>
  //   <Input store={{...}} dispatch={[Function: dispatch]} />
  // </ContextProvider>
  //
  //.dive() returns React child component of the shallow wrapper
  //https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/dive.html
  // const wraper = shallow(<Input store={store} />).dive();
  /* <Input store={{...}} dispatch={[Function: dispatch]} /> */
  const wraper = shallow(<Input store={store} />)
    .dive()
    .dive();
  // <div />
  // console.log(wraper.debug());
  return wraper;
};

describe("render component", () => {
  let wrapper;
  beforeEach(() => {
    const initState = { success: false };
    wrapper = setUp(initState);
  });
  describe("word has not be guessed", () => {
    test("should render component without error", () => {
      const component = findByTestAttribute(wrapper, "c-input");
      expect(component.length).toBe(1);
    });
    test("should render the input box", () => {
      const component = findByTestAttribute(wrapper, "input-box");
      expect(component.length).toBe(1);
    });
    test("should render the submit button", () => {
      const component = findByTestAttribute(wrapper, "submit-btn");
      expect(component.length).toBe(1);
    });
  });
  describe("word has been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initState = { success: true };
      wrapper = setUp(initState);
    });
    test("should render component without error", () => {
      const component = findByTestAttribute(wrapper, "c-input");
      expect(component.length).toBe(1);
    });
    test("should not render the input box", () => {
      const component = findByTestAttribute(wrapper, "input-box");
      expect(component.length).toBe(0);
    });
    test("should not render the submit button", () => {
      const component = findByTestAttribute(wrapper, "submit-btn");
      expect(component.length).toBe(0);
    });
  });
});
describe("redux props", () => {
  test("should have success piece of state ", () => {
    const success = true;
    const wrapper = setUp({ success });
    //create react component instance get props an than success prop
    const successProps = wrapper.instance().props.success;
    expect(successProps).toBe(success);
  });
  //test actions
  test("guessWord action creator is a function prop ", () => {
    const wrapper = setUp();
    const guessWordProps = wrapper.instance().props.guessword;
    expect(guessWordProps).toBeInstanceOf(Function);
  });
});
