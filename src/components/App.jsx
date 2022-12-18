import { useState } from 'react';
import Section from './Section/section';
import FeedbackOptions from './FeedbackOptions/feedbackOptions';
import Notification from './Notification/notification';
import Statistics from './Statistics/statistics';

import { Container } from './Component.styled';

const initialOptions = ['good', 'neutral', 'bad'];

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = e => {
    const { name } = e.target;
    switch (name) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const positivePercentage = total ? ((good / total) * 100).toFixed(0) : 0;
    return Number(positivePercentage);
  };

  const total = countTotalFeedback();

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={initialOptions}
          onLeaveFeedback={leaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {!total ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </Container>
  );
};

export default App;

// import React, { Component } from 'react';
// import Section from './Section/section';
// import FeedbackOptions from './FeedbackOptions/feedbackOptions';
// import Notification from './Notification/notification';
// import Statistics from './Statistics/statistics';

// import { Container } from './Component.styled';

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   leaveFeedback = event => {
//     const { name } = event.target;
//     this.setState(prevState => {
//       return { [name]: prevState[name] + 1 };
//     });
//   };

//   countTotalFeedback() {
//     const values = Object.values(this.state);
//     let total = 0;
//     for (const value of values) {
//       total += value;
//     }
//     return total;
//   }

//   countPositiveFeedbackPercentage() {
//     const total = this.countTotalFeedback();
//     const positivePercentage = total
//       ? ((this.state.good / total) * 100).toFixed(0)
//       : 0;
//     return Number(positivePercentage);
//   }

//   render() {
//     const { good, neutral, bad } = this.state;

//     return (
//       <Container>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.leaveFeedback}
//           ></FeedbackOptions>
//         </Section>
//         <Section title="Statistics">
//           {!this.countTotalFeedback() ? (
//             <Notification message="There is no feedback" />
//           ) : (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           )}
//         </Section>
//       </Container>
//     );
//   }
// }

// export default App;
