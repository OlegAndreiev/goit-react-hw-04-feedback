import React from 'react';
import Statistics from '../components/FeedbackWidget/Statistics';
import FeedbackOptions from '../components/FeedbackWidget/FeedbackOptions';
import Section from '../components/FeedbackWidget/Section';
import Notification from '../components/FeedbackWidget/Notification';

class App extends React.Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    totalFeedback: 0,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementBtnGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  incrementBtnNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  incrementBtnBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };
  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = this.props.totalFeedback + good + neutral + bad;

    const countPositiveFeedbackPercentage = Math.round(
      (good / countTotalFeedback) * 100
    );
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            incrementBtnGood={this.incrementBtnGood}
            incrementBtnNeutral={this.incrementBtnNeutral}
            incrementBtnBad={this.incrementBtnBad}
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
        <Notification
          message="There is no feedback"
          total={countTotalFeedback}
        />
      </>
    );
  }
}

export default App;
