import React, { Component } from 'react';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';
import Notifications from './components/Notifications/Notifications';

class App extends Component {
    state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };

countTotalFeedback() {
    const {good, neutral, bad} = this.state;
    return good + neutral + bad;
}

countPositiveFeedbackPercentage() {
    const {good} = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = Math.round((good/total)*100);
    return positivePercentage || 0;
}

onLeaveFeedback = event => {
    const { name } = event.target;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  render() {
    const total = this.countTotalFeedback();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notifications message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default App;