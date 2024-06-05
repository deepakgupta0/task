// PollWidget.test.js
import { render, screen } from "@testing-library/react";
import PollWidget from "./PollWidget";

test("Should render PollWidget component with multiple PollCard components", () => {
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

  const { getByText } = render(<PollWidget questions={questions} />);

  questions.forEach((questionData) => {
    const { question, options } = questionData;
    expect(getByText(question)).toBeInTheDocument();
    options.forEach((option) => {
      expect(getByText(option)).toBeInTheDocument();
    });
  });
});

test("Should render PollWidget component without questions", () => {
  const { container } = render(<PollWidget />);
  expect(container.children.length).toBe(0);
});

test("Should render PollWidget without duplicate questions", () => {
  const questions = [
    {
      id: 1,
      question: "Which programming language do you prefer?",
      options: ["JavaScript", "Python", "Java"],
    },
    {
      id: 2,
      question: "Which programming language do you prefer?",
      options: ["JavaScript", "Python", "Java"],
    },
  ];

  render(<PollWidget questions={questions} />);
  const cards = screen.getAllByTestId("PollCard");
  expect(cards.length).toBe(1);
});
