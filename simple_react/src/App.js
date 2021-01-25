import React from "react";
import "./App.css";

function App() {
  const [count, setCount] = React.useState("0");
  const handleClick = () => {
    setCount(+count + 1);
  };
  return (
    <div data-test="component-app">
      <h1 data-test="counter">The counter is currently</h1>{" "}
      <span data-test="count">{count}</span>{" "}
      <button data-test="increment-button" onClick={handleClick}>
        Increment
      </button>
    </div>
  );
}

export default App;
