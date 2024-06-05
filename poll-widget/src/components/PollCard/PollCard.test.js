import React from "react";
import { render, fireEvent } from "@testing-library/react";
import PollCard from "./PollCard";

test("Should render PollCard component with question and options", () => {
  const question = "Which programming language do you prefer?";
  const options = ["JavaScript", "Python", "Java"];
  const { getByText } = render(
    <PollCard question={question} options={options} />
  );

  // Check if the question is rendered
  expect(getByText(question)).toBeInTheDocument();

  // Check if each option is rendered
  options.forEach((option) => {
    expect(getByText(option)).toBeInTheDocument();
  });

  // Check if total votes text is rendered
  expect(getByText("Total Votes: 0")).toBeInTheDocument();
});

test("Should updates votes when an option is clicked", () => {
  const question = "Which programming language do you prefer?";
  const options = ["JavaScript", "Python", "Java"];
  const { getByText, getByTestId } = render(
    <PollCard question={question} options={options} />
  );

  // Click on the first option
  fireEvent.click(getByText("JavaScript"));

  // Check if total votes text is updated
  expect(getByText("Total Votes: 1")).toBeInTheDocument();

  // Click on the second option
  fireEvent.click(getByText("Python"));

  // Check if total votes text is updated
  expect(getByText("Total Votes: 2")).toBeInTheDocument();

  // Click on the third option
  fireEvent.click(getByText("Java"));

  // Check if total votes text is updated
  expect(getByText("Total Votes: 3")).toBeInTheDocument();
});

test("Should not render PollCard component without question and options", () => {
  const { queryByText } = render(<PollCard />);

  // Check if question and options are not rendered
  expect(queryByText("Total Votes: 0")).not.toBeInTheDocument();
});
