import React, { useState } from 'react';
import Statistics from '../components/FeedbackWidget/Statistics';
import FeedbackOptions from '../components/FeedbackWidget/FeedbackOptions';
import Section from '../components/FeedbackWidget/Section';
import Notification from '../components/FeedbackWidget/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total] = useState(0);

  const incrementBtnGood = () => {
    setGood(good + 1);
  };

  const incrementBtnNeutral = () => {
    setNeutral(neutral + 1);
  };
  const incrementBtnBad = () => {
    setBad(bad + 1);
  };

  const countTotalFeedback = total + good + neutral + bad;

  const countPositiveFeedbackPercentage = Math.round(
    (good / countTotalFeedback) * 100
  );

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          incrementBtnGood={incrementBtnGood}
          incrementBtnNeutral={incrementBtnNeutral}
          incrementBtnBad={incrementBtnBad}
        />
      </Section>
      <Section title="Statitstics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      </Section>
      <Notification message="There is no feedback" total={countTotalFeedback} />
    </>
  );
}
