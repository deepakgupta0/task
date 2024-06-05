// App.test.js
import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App component without questions", () => {
  const { container } = render(<App />);

  expect(container.children.length).toBe(0);
});
test("renders App component with PollWidget", () => {
  const questions = [
    {
      id: 1,
      question: "Which programming language do you prefer?",
      options: ["JavaScript", "Python", "Java"],
    },
    {
      id: 2,
      question: "What is your favorite color?",
      options: ["Red", "Blue", "Green"],
    },
  ];
  const pollWidgetId = "poll-1234";

  const { getByText, getByTestId } = render(
    <App questions={questions} pollWidgetId={pollWidgetId} />
  );

  const pollWidgetRoot = getByTestId("PollWidgetRoot");
  expect(pollWidgetRoot).toBeInTheDocument();
  expect(pollWidgetRoot).toHaveAttribute("id", "poll-1234");

  questions.forEach((questionData) => {
    const { question, options } = questionData;
    expect(getByText(question)).toBeInTheDocument();
    options.forEach((option) => {
      expect(getByText(option)).toBeInTheDocument();
    });
  });
});
