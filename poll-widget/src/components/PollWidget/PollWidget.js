import React from "react";
import PollCard from "../PollCard/PollCard";
/**
 * PollWidget
 * A reusable component for displaying list of Polls.
 * @param {array} questions - Takes in array of polls where each poll is object which has question and option properties.
 */
const PollWidget = ({ questions = [] }) => {
  let pollCards = [];
  let pollSet = new Set();
  for (let i = 0; i < questions?.length; i++) {
    let data = questions[i];
    let question = data.question;
    if (!pollSet.has(question)) {
      pollCards.push(
        <PollCard
          key={data.id}
          question={data.question}
          options={data.options}
        ></PollCard>
      );
      pollSet.add(question);
    }
  }
  return <>{pollCards}</>;
};

export default PollWidget;
