import { Section } from "././Section/Section";
import { Statistics } from "././Statistics/Statistics"
import { FeedbackOptions } from '././FeedbackOptions/FeedbackOptions';
import { Notification } from '././Notification/Notification';
import { useState } from "react";

export const App = () => {

  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = (option) => {
    setFeedback(prevState => ({
    ...prevState,
    [option]: prevState[option] + 1
    }));
  }
  
  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    const total = good + neutral + bad;
    return total
  }

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    const positivePercentage = (good >= 1)? Math.round(good / (countTotalFeedback()) * 100) : 0
    return positivePercentage
  }
  
    const total = countTotalFeedback()
    const positivePercentage = countPositiveFeedbackPercentage()
    return (
    <>
      <div>
        <Section title="Please, leave feedback" >
            <FeedbackOptions options={Object.keys(feedback)} onLeaveFeedback={onLeaveFeedback} />
        </Section>
        <Section title="Statistics">
            {total === 0 ?
              <Notification message="There is no feedback" /> :
              <Statistics good={feedback.good} neutral={feedback.neutral} bad={feedback.bad} total={total} positivePercentage={positivePercentage}></Statistics>}
        </Section>
    </div>
    </>
  );
  
};
