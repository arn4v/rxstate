import * as React from "react";
import { useRxState } from "../lib";

function Counter() {
  const [state, setState] = useRxState("counter");

  return (
    <>
      {state}
      <button
        style={{ marginLeft: "2rem" }}
        onClick={() => {
          setState(state + 1);
        }}
      >
        Increase counter
      </button>
      <button
        style={{ marginLeft: "2rem" }}
        onClick={() => {
          setState(state - 1);
        }}
      >
        Decrease counter
      </button>
    </>
  );
}

function App() {
  return <Counter />;
}

export default App;
