import React from "react";
import styles from "./PollCard.module.css";
import useLocalStorage from "../../hooks/useLocalStorage";

/**
 * PollCard
 * A reusable component for displaying Poll Card.
 * @param {string} question - The poll question text.
 * @param {array} options - The poll options for given question.
 */
const PollCard = ({ question = "", options = [] }) => {
  const [votes, setVotes] = useLocalStorage(question, {});

  const handleVote = (option, votes) => {
    const updatedVotes = { ...votes, [option]: (votes[option] || 0) + 1 };
    setVotes(updatedVotes);
  };

  const totalVotes = Object.values(votes).reduce((sum, val) => sum + val, 0);

  const getPercentByCount = (vote, option, totalVotes) => {
    if (!vote[option]) return 0;
    const percent = (votes[option] / totalVotes) * 100;
    return Math.round(percent);
  };

  if (!question || options.length === 0) return;

  return (
    <div className={styles.poll_card} data-testid="PollCard">
      <h2 className={styles.poll_card_question}>{question}</h2>
      <div className={styles.poll_card_options}>
        {options.map((option) => (
          <div
            className={styles.poll_card_option}
            key={option}
            onClick={() => handleVote(option, votes)}
          >
            <div className={styles.poll_card_votes}>
              {getPercentByCount(votes, option, totalVotes)}%
            </div>
            <div className={styles.poll_card_info}>
              <div>{option}</div>
              <div
                className={styles.poll_card_result_bar}
                style={{
                  width: `${getPercentByCount(votes, option, totalVotes)}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <span> Total Votes: {totalVotes}</span>
    </div>
  );
};

export default PollCard;
