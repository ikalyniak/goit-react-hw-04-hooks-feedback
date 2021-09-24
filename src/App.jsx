import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';
import styles from './App.module.css';

export default function App() {
  const options = ['good', 'neutral', 'bad'];
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'good':
        setGood(value + 1);
        break;

      case 'neutral':
        setNeutral(value + 1);
        break;

      case 'bad':
        setBad(value + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good * 100) / this.countTotalFeedback());

  return (
    <div className={styles.App}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      {countTotalFeedback() !== 0 && (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}

      {countTotalFeedback() !== 0 || (
        <Notification message="No feedback given" />
      )}
    </div>
  );
}

App.propTypes = {
  stats: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    options: PropTypes.array.isRequired,
  }),
};
