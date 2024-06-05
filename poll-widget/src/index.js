import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

/**
 * Initializes the application by rendering the App component into the specified selector.
 * @param {string} selector - The selector of the DOM element where the App component should be rendered.
 * @param {object} data - The data to be passed as props to the App component.
 */
export function initialize(selector, data) {
  console.log(data, selector);
  const root = ReactDOM.createRoot(document.getElementById(`${selector}`));
  root.render(<App {...data} />);
}
