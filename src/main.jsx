import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "../lib";
import App from "./App";

const Test = () => {
  return "Test";
};

ReactDOM.render(
  <React.StrictMode>
    <Provider state={{ counter: 0 }}>
      <App />
      <Test></Test>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
