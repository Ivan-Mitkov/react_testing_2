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
  // const wraper = shallow(<Input store={store} />).dive();
  /* <Input store={{...}} dispatch={[Function: dispatch]} /> */
  const wraper = shallow(<Input store={store} />)
    .dive()
    .dive();
  // <div />
  // console.log(wraper.debug());
  // console.log
  return wraper;
  // at setUp (src/InputConnectWithRedux.test.js:11:11)
};

describe("render component", () => {
  describe("word has not be guessed", () => {
    test("should render component without error", () => {});
    test("should render the input box", () => {});
    test("should render the submit box", () => {});
  });
  describe("word has been guessed", () => {
    test("should render component without error", () => {});
    test("should not render the input box", () => {});
    test("should not render the submit box", () => {});
  });
});
describe("update state of component", () => {
  test("should ", () => {});
});
