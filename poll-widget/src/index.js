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

const pollQuestionsSet1 = [
  {
    id: 1,
    question: "What is your favorite programming language?",
    options: ["JavaScript", "Python", "Java", "C++", "Ruby"],
  },
  {
    id: 2,
    question: "What is your favorite movie genre?",
    options: ["Action", "Comedy", "Drama", "Science Fiction", "Horror"],
  },
  {
    id: 3,
    question: "Which social media platform do you use the most?",
    options: ["Facebook", "Instagram", "Twitter", "LinkedIn", "Snapchat"],
  },
  {
    id: 4,
    question: "What is your favorite season?",
    options: [
      "Spring",
      "Summer",
      "Autumn",
      "Winter",
      "I don't have a favorite",
    ],
  },
  {
    id: 5,
    question: "How do you prefer to travel?",
    options: ["Car", "Train", "Airplane", "Bicycle", "Walking"],
  },
];

initialize("root", {
  questions: pollQuestionsSet1,
  pollWidgetId: "test-poll-1",
});
